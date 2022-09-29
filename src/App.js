import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  const [{ isDragging }, dragRef, previewRef] = useDrag(() => ({
    type: "Nemo",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <DndProvider backend={HTML5Backend}>
      <div ref={dragRef} title="다른 카드 옆으로 드래그해서 위치를 변경합니다.">
        드래그
      </div>
    </DndProvider>
  );
}

export default App;
