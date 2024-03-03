import React, { useRef } from "react";

function Example() {
  // 创建一个 ref
  const myRef = useRef();

  const handleClick = () => {
    // 使用 ref 访问 DOM 元素
    console.log(myRef.current);
    myRef.current.style.backgroundColor = "blue";
    myRef.current.textContent = "Clicked";
  };

  return (
    <div>
      <button onClick={handleClick}>Change Color</button>
      <div ref={myRef}>This is a div element</div>
    </div>
  );
}

export default Example;
