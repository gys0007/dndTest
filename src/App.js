import React from "react";
import Example from "./Example";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Example />
    </DndProvider>
  );
}

export default App;
