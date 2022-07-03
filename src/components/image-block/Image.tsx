import styles from './Image.module.css';

type ImageProps = {
  className?: string,
  src: string,
  alt?: string
}

function Image(props: ImageProps) {
  const {className, src, alt} = props;
  return (
    <img className={className} src={src} alt={alt || 'Image'} />
  );
}

export default Image;