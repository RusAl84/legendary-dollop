import cc from 'classnames';
import noImage from './assets/no-image.svg';
import styles from './Image.module.css';

type ImageProps = {
  className?: string,
  src: string,
  alt?: string
}

function Image(props: ImageProps) {
  const {className, src, alt} = props;
  return (
    <img 
      className={cc(className, !src && styles.noImage)} 
      src={src || noImage} 
      alt={alt || 'Image'} 
    />
  );
}

export default Image;