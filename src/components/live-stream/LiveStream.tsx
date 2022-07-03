type LiveStream = {
  className?: string,
  src: string
}

function LiveStream(props: LiveStream) {
  const {className, src} = props;
  return (
    <video className={className} src={src} autoPlay />
  );
}

export default LiveStream;