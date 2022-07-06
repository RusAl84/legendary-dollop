import cc from 'classnames';
import Image from 'components/image-block/Image';
import styles from './HistoryCard.module.css';


type HistoryCard = {
  className?: string,
  personPhoto?: string,
  cadr?: string,
  name: string,
}

function HistoryCard(props: HistoryCard) {
  const {className, personPhoto, cadr, name} = props;
  return (
    <section className={cc(className, styles.root)}>
      <Image className={styles.image} src={cadr} />
      <Image className={styles.image} src={personPhoto} />
      <p className={styles.name}>{name}</p>
    </section>
  );
}

export default HistoryCard;