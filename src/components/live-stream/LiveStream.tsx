import Webcam from "react-webcam";


type LiveStreamProps = {
  className?: string
}

function LiveStream(props: LiveStreamProps) {
  const {className} = props;
  return (
    <Webcam className={className} />
  );
}

export default LiveStream;