import cc from 'classnames';
import Image from 'components/image-block/Image';
import noImage from './assets/no-image.svg';
// import photo from './assets/human_picture.jpg';
import styles from './HistoryCard.module.css';


type HistoryCard = {
  className?: string,
  image?: string,
  name: string,
}

function HistoryCard(props: HistoryCard) {
  const {className, image, name} = props;
  return (
    <section className={cc(className, styles.root)}>
      {
        image ? (
          <Image className={styles.image} src={image} />
        ) : (
          <Image className={styles.noImage} src={noImage} alt='No image' />
        )
      }
      <p className={styles.name}>{name}</p>
    </section>
  );
}

export default HistoryCard;