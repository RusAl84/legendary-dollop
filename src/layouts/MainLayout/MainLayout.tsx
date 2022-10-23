import {useState, useEffect} from 'react';
import LiveStream from "components/live-stream/LiveStream";
import DetectionCard from "components/detection-card/DetectionCard";
import HistoryCard from "components/history-card/HistoryCard";
import styles from "./MainLayout.module.css";
import API from "../../api/api.js";
import {Item} from './types';

let prevID = 0;
let array = [];

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
    const timeout = setInterval(async () => {
      const lastID = await API.getID();
      try {
        for (let i = prevID; i <= lastID; i++) {
          const msg = await API.getDash(i);
          if (typeof msg === typeof {}) {
            const {id, name, photo, capture, desc} = msg;
            const item: Item = {
              id,
              name,
              photo,
              cadr: capture,
              desc
            };
            setPerson(item);
            array.unshift(item);
            setHistoryItems(array);
          }
        }
      } catch (e) {
      }
      prevID = lastID + 1;
    }, 1000);
    return () => {
      clearInterval(timeout);
    }
  });
  return (
    <main className={styles.root}>
      <section className={styles.logoBox}>  
        <div className={styles.Logo1} />
        <div className={styles.Logo3} />
        <div className={styles.Logo2} />
        <div className={styles.Logo4} />
        <div className={styles.MIREA_logo} />
        <div className={styles.KBSP_logo} />
      </section>
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
        <div className={styles.spinnerBottomLine} /> 
      </section>
    </main>
  );
}

export default MainLayout;
