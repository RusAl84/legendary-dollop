// import React from "react";
import Webcam from "react-webcam";


type LiveStream = {
  className?: string,
  src: string
}

function LiveStream(props: LiveStream) {
  const {className, src} = props;
  return (
    // <img className={className} src={src} width="100%"></img>
    <Webcam />
    // <video className={className} src={src} autoPlay />
  );
}

export default LiveStream;