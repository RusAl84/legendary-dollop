import cc from 'classnames';
import styles from './HistoryCard.module.css';


type HistoryCardProps = {
  className?: string,
  name: string,
  desc?: string,
}

function HistoryCard(props: HistoryCardProps) {
  const {className, name, desc} = props;
  return (
    <section className={cc(className, styles.root)}>
      <p className={styles.name}>{name}</p>
      <p className={styles.desc}>{desc}</p>
    </section>
  );
}

export default HistoryCard;