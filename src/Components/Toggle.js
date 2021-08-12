import React from "react";

const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <img
        src="https://picsum.photos/id/237/200/300"
        className={toggle ? "centerImage" : "rightImage"}
        alt="image"
      />

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
};

export default Toggle;
