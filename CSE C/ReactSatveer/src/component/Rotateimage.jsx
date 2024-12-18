<<<<<<< HEAD
import React, { useState } from "react";
import pic from "../images/M.jpg";
function RotateImage() {
  const [rotation, setRotation] = useState(0);
  const [width, setWidth] = useState(200); 
  const [height, setHeight] = useState(200); 

  return (
    <div>
      <h1>My image</h1>
      <img
        src={pic}
        alt="Example"
        style={{
          transform: `rotate(${rotation}deg)`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
      <div>
        <button onClick={() => setRotation(rotation + 45)}>Rotate</button>
        <button onClick={() => setWidth(width + 20)}>Increase Width</button>
        <button onClick={() => setHeight(height + 20)}>Increase Height</button>
      </div>
    </div>
  )
}

export default RotateImage;
=======
import React, { useState } from "react";
import pic from "../images/M.jpg";
function RotateImage() {
  const [rotation, setRotation] = useState(0);
  const [width, setWidth] = useState(200); 
  const [height, setHeight] = useState(200); 

  return (
    <div>
      <h1>My image</h1>
      <img
        src={pic}
        alt="Example"
        style={{
          transform: `rotate(${rotation}deg)`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
      <div>
        <button onClick={() => setRotation(rotation + 45)}>Rotate</button>
        <button onClick={() => setWidth(width + 20)}>Increase Width</button>
        <button onClick={() => setHeight(height + 20)}>Increase Height</button>
      </div>
    </div>
  )
}

export default RotateImage;
>>>>>>> 554bbb8 (FSD)
