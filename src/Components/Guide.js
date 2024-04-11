const Guide = () => {
  return (
    <div className="z-50 mt-12">
      <div className="text-3xl menu-title text-white underline underline-offset-4 font-bold text-center mb-4 font-mono">
        How To Use ?
      </div>
      <div className="card shadow-lg flex flex-col gap-2 w-fit mx-auto p-4">
        <Point
          index={1}
          pointTitle={"Upload Image:"}
          text={
            "Capture or upload an image of the tomato plant leaf exhibiting symptoms of disease"
          }
        />
        <Point
          index={2}
          pointTitle={"Submit:"}
          text={"Click the submit button to analyze the uploaded image."}
        />
        <Point
          index={1}
          pointTitle={"Receive Diagnosis:"}
          text={
            "Our application will swiftly analyze the image using deep learning techniques to identify any potential diseases affecting the tomato plant."
          }
        />
        <Point
          index={1}
          pointTitle={"View Results:"}
          text={
            "Once the analysis is complete, you'll receive a diagnosis indicating the detected disease(s) along with any recommended actions for management."
          }
        />
      </div>
    </div>
  );
};

const RoundBullet = ({ text }) => {
  return (
    <div className="text-center bg-primary w-8 h-8 rounded-full mr-2">
      {text}
    </div>
  );
};

const PointTitle = ({ text }) => {
  return <div className="text-accent font-bold mr-1 ml-4 mx-2">{text}</div>;
};

const Point = ({ pointTitle, index, text }) => {
  return (
    <div className="flex">
      <RoundBullet text={index} />
      <PointTitle text={pointTitle} />
      <div>{text}</div>
    </div>
  );
};

export default Guide;
