import LiveStream from "components/live-stream/LiveStream";
import DetectionCard from "components/detection-card/DetectionCard";
import HistoryCard from "components/history-card/HistoryCard";
import styles from "./MainLayout.module.css";

type historyItem = {
  name: string;
  desc?: string;
};

const historyItems: historyItem[] = [
  {
    name: "Русаков Алексей Михайлович",
    desc: "Директор проекта Персона",
  },
  {
    name: "Филатов Вячеслав Валерьевич", 
    desc: "Оченьоченьоченьоченьдлинноеслово Алгоритмист программист преподаватель",
  },
  {
    name: "Болотов Александр",
    desc: "Фронтендер",
  },
  { name: "Филатов Вячеслав" },
  { name: "Болотов Александр" },
  { name: "Филатов Вячеслав" },
  { name: "Болотов Александр" },
  { name: "Филатов Вячеслав" },
  { name: "Болотов Александр" },
  { name: "Филатов Вячеслав" },
];

function MainLayout() {
  return (
    <main className={styles.root}>
      <div className={styles.mainSection}>
        <LiveStream className={styles.videoBlock} />
        <DetectionCard
          className={styles.detectionBlock}
          personPhoto="http://localhost:5000/photo/Rusakov.jpg"
          cadr="http://localhost:5000/photo/test.jpg"
          name="Русаков Алексей Михайлович"
          desc="Директор проекта Персона"
        />
      </div>
      <section className={styles.spinnerBlock}>
        {historyItems.map((item, index) => {
          const {desc, name} = item;
          return (
            <HistoryCard 
              key={name+desc+index}
              className={styles.spinnerItem}
              name={name}
              desc={desc}
            />
          );
        })}
      </section>
    </main>
  );
}

export default MainLayout;
