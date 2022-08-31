import {useState, useEffect} from 'react';
import LiveStream from "components/live-stream/LiveStream";
import DetectionCard from "components/detection-card/DetectionCard";
import HistoryCard from "components/history-card/HistoryCard";
import styles from "./MainLayout.module.css";
import API from "../../api/api.js";

type Item = {
  id: string | null,
  name: string | null,
  cadr: string | null,
  desc: string | null,
  photo: string | null,
};

let lastMsgID = 0;

function itemEquals(item1: Item, item2: Item): boolean {
  const obj1 = {}
  return JSON.stringify(item1) === JSON.stringify(item2);
}

function MainLayout() {
  const [historyItems, setHistoryItems] = useState<Item[]>([]);
  const [person, setPerson] = useState<Item>({
    id: null,
    name: null,
    photo: null,
    cadr: null,
    desc: null
  });
  useEffect(() => {
    const intervalCtx = setInterval(async () => {
      try {
        const msg = await API.getDash(lastMsgID);
        if (typeof msg === typeof {}) {
          const {id, name, photo, capture, desc} = msg;
          const item: Item = {
            id,
            name,
            photo,
            cadr: capture,
            desc
          };
          setHistoryItems([...historyItems, item]);
          setPerson(item);
          lastMsgID++;
        }
      } catch (e) {}
    }, 2000);
    return () => {
      clearInterval(intervalCtx);
    }
  });
  return (
    <main className={styles.root}>
      <div className={styles.mainSection}>
        <LiveStream className={styles.videoBlock} />
        <DetectionCard
          className={styles.detectionBlock}
          personPhoto={person.photo}
          cadr={person.cadr}
          name={person.name}
          desc={person.desc}
        />
      </div>
      <section className={styles.spinnerBlock}>
        {historyItems.map((item, index) => {
          const {id, desc, name} = item;
          return (
            <HistoryCard 
              key={id}
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
