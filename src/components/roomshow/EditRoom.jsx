import React, { useState } from "react";
import Configure from "./Configure";

const EditRoom = ({
  model,
  position,
  setPosition = () => {},
  setModel = () => {},
}) => {
  const [isEditOpen, setEditOpen] = useState(false);
  return (
    <>
      <div
        className="w-[60px] h-[60px] rounded-full bg-white absolute top-[80px] right-[80px] z-30 text-[42px] grid place-items-center leading-[60px] cursor-pointer"
        onClick={() => setEditOpen(true)}
      >
        +
      </div>
      {isEditOpen && (
        <Configure
          model={model}
          position={position}
          setEditOpen={setEditOpen}
          setPosition={setPosition}
          setModel={setModel}
        />
      )}
    </>
  );
};

export default EditRoom;
