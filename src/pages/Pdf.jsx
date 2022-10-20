import { useState, useRef, useEffect } from "react";
import PdfToCanvas from "./PdfToCanvas";
import Sign from "./Sign";
//新增儲存簽名檔 → 上傳背景文件並加入簽名檔 → 下載背景文件+簽名檔
const imgType = ["jpg", "jpeg", "png"];
function Pdf() {
  const [file, setFile] = useState([]);
  const [doc, setDoc] = useState(null);

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

  useEffect(() => {}, []);

  return (
    <div className="">
      {/* <div>
        <label htmlFor="sign">sign</label>
        <input id="sign" type="file" onChange={handleFile} />
      </div> */}
      {/* <div>
        <label htmlFor="doc">doc</label>
        <input id="doc" type="file" onChange={handleDoc} />
      </div> */}
      {/* <div>
        <canvas id="canvas"></canvas>
      </div> */}
      {/* <ul>
        {file.map((item, i) => {
          return (
            <li className="my-2" key={i}>
              <img className="w-20" src={preview(item)} alt="sign" />
            </li>
          );
        })}
      </ul> */}
      <Sign />
      <PdfToCanvas />
    </div>
  );
}

export default Pdf;
