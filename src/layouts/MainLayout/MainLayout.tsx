import LiveStream from 'components/live-stream/LiveStream';
import DetectionBlock from 'components/detection-block/DetectionBlock';
import HistoryCard from 'components/history-card/HistoryCard';
import HorizontalScroll from 'components/horizontal-scroll/HorizontalScroll';
import photo from './assets/human_picture.jpg'
import styles from './MainLayout.module.css';

type historyItem = {
  name: string,
  image?: string,
}

const historyItems: historyItem[] = [
  {
    name: 'Русаков Алексей',
    image: photo
  },
  {name: 'Филатов Вячеслав'},
  {name: 'Болотов Александр'},
  {name: 'Филатов Вячеслав'},
  {name: 'Болотов Александр'},
  {name: 'Филатов Вячеслав'},
  {name: 'Болотов Александр'},
  {name: 'Филатов Вячеслав'},
  {name: 'Болотов Александр'},
  {name: 'Филатов Вячеслав'},
]

function MainLayout() {
  return (
    <main className={styles.root}>
      <LiveStream className={styles.videoBlock} src='' />
      <DetectionBlock className={styles.detectionBlock} name='Русаков Алексей' />
      <HorizontalScroll className={styles.spinnerBlock}>
        {historyItems.map((item, index) => {
          const {image, name} = item;
          return (
            <HistoryCard 
            key={name+image+index}
            image={image} 
            name={name}
          />
          );
        })}
      </HorizontalScroll>
    </main>
  );
}

export default MainLayout;