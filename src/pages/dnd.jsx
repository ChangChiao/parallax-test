import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
function dnd() {
  const [items, setItems] = useState(["A", "B", "C"]);
  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    // 拷貝新的 items (來自 state)
    let newItems = [...items];

    // 從 source.index 剪下被拖曳的元素
    const [remove] = newItems.splice(source.index, 1);

    //在 destination.index 位置貼上被拖曳的元素
    newItems.splice(destination.index, 0, remove);

    // 設定新的 items
    setItems(newItems);
  };
  return (
    <DragDropContext
      onBeforeCapture={(e) => console.log("onBeforeCapture: ", e)}
      onBeforeDragStart={(e) => console.log("onBeforeDragStart: ", e)}
      onDragStart={(e) => console.log("onDragStart: ", e)}
      onDragUpdate={(e) => console.log("onDragUpdate: ", e)}
      onDragEnd={(e) => console.log("onDragEnd: ", e)}
    >
      <Droppable droppableId="drop-id">
        {/* // droppableId: 該 Droppable 的唯一識別ID */}

        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {/*
          provided.innerRef
          套件的機制所需, 直接去取用 dom 的 ref, 就是套用的例行公事
        */}

            {items.map((item, index) => (
              // 以 map 方式渲染每個拖曳卡片 (Draggable)

              <Draggable draggableId={item.id} index={index}>
                {/* // draggableId: 該卡片的唯一識別ID */}
                {(provided, snapshot) => (
                  /* 
                ...provided.droppableProps
                ...provided.draggableProps
                ...provided.dragHandleProps 
                單純展開其他必要的 props 
              */

                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* 實際上的卡片內容 */}
                    {item}
                    {/* 實際上的卡片內容 */}
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default dnd;
