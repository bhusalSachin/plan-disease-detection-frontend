import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({ fileStatus }) {
  const handleChange = (file) => {
    fileStatus.setFile(file);
  };

  return (
    <FileUploader
      handleChange={(file) => {
        handleChange(file);
      }}
      name="file"
      types={fileTypes}
      onSizeError={() => {
        alert(`Please choose a smaller file 5mb max)`);
      }}
      label={"Upload Leaf Image here.."}
      // hoverTitle="Yes Let us take it.."
      // dropMessageStyle="text-primary"
      children={
        <button className="btn text-white btn-primary">
          Click Here to Upload Leaf Image
        </button>
      }
      classes="drop_area drop_zone"
    />
  );
}

export default DragDrop;
