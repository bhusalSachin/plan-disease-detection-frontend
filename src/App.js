import React, { useState } from "react";
import "./App.css";
import DragDrop from "./Components/DragDrop";
import Guide from "./Components/Guide";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFile(reader.result);
    };
  };

  const handleOnSubmit = () => {
    if (!file) return;
    console.log(file);
    const formData = new FormData();
    formData.append(`'file'`, file);

    fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="App w-full h-full">
      <img
        src="bg.jpeg"
        alt=""
        className="-z-50 h-screen w-full opacity-75 absolute top-0 left-0"
      />
      <Guide />
      <div className="card container mx-auto shadow-xl flex flex-col justify-center items-center p-4 mt-12">
        <DragDrop fileStatus={{ file, setFile: handleFileChange }} />
        {file && (
          <div className="mt-4 border-red-2 rounded indicator flex flex-col gap-2">
            <img src={file} alt="Uploaded" className="w-64 h-64 rounded" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="indicator-item border bg-red-500 hover:bg-red-400 cursor-pointer rounded text-white border-red-500"
              onClick={(e) => {
                e.preventDefault();
                setFile(null);
              }}
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
            <button
              className="btn btn-outline btn-accent"
              onClick={(e) => {
                e.preventDefault();
                handleOnSubmit();
              }}
            >
              Submit for diagnosis
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
