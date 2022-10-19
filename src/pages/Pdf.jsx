import { useState, useRef, useEffect } from "react";
//新增儲存簽名檔 → 上傳背景文件並加入簽名檔 → 下載背景文件+簽名檔
const imgType = ["jpg", "jpeg", "png"];
function Pdf() {
  const [file, setFile] = useState([]);
  const [doc, setDoc] = useState(null);
  const canvasRef = useRef(null);
  const signImgRef = useRef(null);
  const isPainting = useRef(false);
  let ctx = null;
  let canvasSize = null;

  const handleFile = (event) => {
    const upload = event.target.files[0];
    if (imgType.includes(file.type)) {
      console.log("wrong type");
      return;
    }
    if (file.size > 1024 * 1024) {
      console.log("oversize");
      return;
    }
    setFile([...file, upload]);
  };

  const handleDoc = (event) => {
    const upload = event.target.files[0];
    setDoc(upload);
  };

  // const imgToCanvas = () => {
  //   const canvas = document.getElementById("canvas");
  //   const img = new Image();
  //   img.src = "doc";
  // };

  // const pdfToCanvas = () => {
  //   const canvas = document.getElementById("canvas");
  //   const ctx = canvas.getContext("2d");
  //   const img = new Image();
  //   img.src = "doc";
  // };

  const preview = (file) => {
    return URL.createObjectURL(file);
  };

  // =========== sign =============

  function handleSign() {
    // 設定線條的相關數值
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
  }

  function getPaintPosition(e) {
    const scaleX = canvasRef.current.width / canvasSize.width;
    const scaleY = canvasRef.current.height / canvasSize.height;
    if (e.type === "mousemove") {
      return {
        x: (e.clientX - canvasSize.left) * scaleX,
        y: (e.clientY - canvasSize.top) * scaleY,
      };
    } else {
      return {
        x: e.touches[0].clientX - canvasSize.left,
        y: e.touches[0].clientY - canvasSize.top,
      };
    }
  }

  // 開始繪圖時，將狀態開啟
  function startPosition(e) {
    e.preventDefault();
    isPainting.current = true;
  }

  // 結束繪圖時，將狀態關閉，並產生新路徑
  function finishedPosition() {
    isPainting.current = false;
    ctx.beginPath();
  }

  // 繪圖過程
  function draw(e) {
    // 滑鼠移動過程中，若非繪圖狀態，則跳出
    if (!isPainting.current) return;

    // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
    const paintPosition = getPaintPosition(e);

    // 移動滑鼠位置並產生圖案
    ctx.lineTo(paintPosition.x, paintPosition.y);
    ctx.stroke();
  }

  function isTouchEventExist() {
    return "ontouchstart" in document.documentElement;
  }

  // 重新設定畫布
  function reset() {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }

  function saveImage() {
    const newImage = canvasRef.current.toDataURL("image/png");
    signImgRef.current.src = newImage;
    localStorage.setItem("sign_img", newImg);
  }

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
    canvasSize = canvasRef.current.getBoundingClientRect();
    handleSign();
  }, []);

  return (
    <div className="">
      {/* <div>
        <label htmlFor="sign">sign</label>
        <input id="sign" type="file" onChange={handleFile} />
      </div> */}
      <div>
        <label htmlFor="doc">doc</label>
        <input id="doc" type="file" onChange={handleDoc} />
      </div>
      {/* <div>
        <canvas id="canvas"></canvas>
      </div> */}
      <ul>
        {file.map((item, i) => {
          return (
            <li className="my-2" key={i}>
              <img className="w-20" src={preview(item)} alt="sign" />
            </li>
          );
        })}
      </ul>
      <div className="sign_box">
        <canvas
          className="h-[300px] w-[300px] border border-gray-800"
          id="canvas"
          onMouseDown={startPosition}
          onMouseUp={finishedPosition}
          onMouseLeave={finishedPosition}
          onMouseMove={draw}
          onTouchStart={startPosition}
          onTouchEnd={finishedPosition}
          onTouchCancel={finishedPosition}
          onTouchMove={draw}
          ref={canvasRef}
        ></canvas>
        <img
          className="h-[200px] w-[200px] border border-gray-800"
          ref={signImgRef}
        />
        <div className="flex items-center justify-between">
          <button onClick={reset} className="clear">
            Clear
          </button>
          <button className="save" onClick={saveImage}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pdf;
