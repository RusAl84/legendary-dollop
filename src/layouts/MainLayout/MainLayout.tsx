import LiveStream from 'components/live-stream/LiveStream';
import HistoryCard from 'components/history-card/HistoryCard';
import HorizontalScroll from 'components/horizontal-scroll/HorizontalScroll';
import photo from './assets/human_picture.jpg'
import photo1 from './assets/human_picture1.jpg'
import photo2 from './assets/human_picture2.jpg'
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
  {
    name: 'Филатов Вячеслав',
    image: photo2
  },
  {
    name: 'Болотов Александр',
    image: photo1
  },
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
      <HistoryCard
        className={styles.detectionBlock}
        personPhoto={photo2} 
        name='Русаков Алексей' 
      />
      <HorizontalScroll className={styles.spinnerBlock}>
        {historyItems.map((item, index) => {
          const {image, name} = item;
          return (
            <HistoryCard 
            key={name+image+index}
            personPhoto={image} 
            name={name}
          />
          );
        })}
      </HorizontalScroll>
    </main>
  );
}

export default MainLayout;