import cc from 'classnames';
import LiveStream from 'components/live-stream/LiveStream';
import Image from 'components/image-block/Image';
import photo from './assets/human_picture.jpg';
import styles from './DetectionBlock.module.css';


type DetectionBlockProps = {
  className?: string,
  name: string
}

function DetectionBlock(props: DetectionBlockProps) {
  const {className, name} = props;
  return (
    <section className={cc(className, styles.root)}>
      <LiveStream className={styles.liveStream} src=''/>
      <Image src={photo} />
      <p className={styles.name}>{name}</p>
    </section>
  );
}

export default DetectionBlock;