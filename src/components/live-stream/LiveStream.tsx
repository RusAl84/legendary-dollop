// import React from "react";
import Webcam from "react-webcam";


type LiveStream = {
  className?: string
}

function LiveStream(props: LiveStream) {
  const {className} = props;
  return (
    <Webcam className={className} />
  );
}

export default LiveStream;