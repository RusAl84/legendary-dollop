import cc from 'classnames';
import Image from 'components/image-block/Image';
import styles from './HistoryCard.module.css';


type HistoryCardProps = {
  className?: string,
  personPhoto?: string,
  cadr?: string,
  name: string,
  desc?: string,
}

function HistoryCard(props: HistoryCardProps) {
  const {className, personPhoto, cadr, name, desc} = props;
  return (
    <section className={cc(className, styles.root)}>
      <div className={styles.imageBox}>
        <Image className={styles.image} src={cadr} />
      </div>
      <div className={styles.imageBox}>
        <Image className={styles.image} src={personPhoto} />
      </div>
      <div>
      <p className={styles.name}>{name}</p>
      <p className={styles.name}>{desc}</p>
      </div>
    </section>
  );
}

export default HistoryCard;