import React from "react";

const Configure = ({
  model = "",
  position = "",
  setEditOpen = () => {},
  setPosition = () => {},
  setModel = () => {},
}) => {
  const handleClose = () => {
    const selectedModel = document.getElementById("model").value;
    const selectedPosition = document.getElementById("position").value;
    setModel(selectedModel);
    setPosition(selectedPosition);
    setEditOpen(false);
  };
  return (
    <div className="w-screen h-screen fixed inset-0 grid place-items-center opacity-1">
      <div className="w-[400px] h-[150px] bg-white p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="font-extrabold text-3xl">Edit</h1>
          <span
            className="w-[30px] h-[30px] bg-black text-white grid place-items-center text-[28px] rounded-full leading-[30px] cursor-pointer"
            onClick={handleClose}
          >
            x
          </span>
        </div>
        <div>
          <div>
            <span>3D-Model: </span>
            <select id="model" defaultValue={model}>
              <option value="">Please select the model to render</option>
              <option value="girl">Girl</option>
              <option value="tiger">Tiger</option>
              <option value="car">Car</option>
            </select>
          </div>
          <div>
            <span>Position: </span>
            <select id="position" defaultValue={position}>
              <option value="">Please select the position to render</option>
              <option value="pos1">Position 1</option>
              <option value="pos2">Position 2</option>
              <option value="pos3">Position 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configure;
