import React from "react";

function Loader() {
  return (
    <>
      <img
        className="w-48 -mt-12"
        src="https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif"
      />
      <h3 className="-ml-20 mt-1 text-blue-500">loading...</h3>
    </>
  );
}

export default Loader;
