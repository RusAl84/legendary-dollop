import {useState, useEffect} from 'react';
import LiveStream from "components/live-stream/LiveStream";
import DetectionCard from "components/detection-card/DetectionCard";
import HistoryCard from "components/history-card/HistoryCard";
import styles from "./MainLayout.module.css";
import API from "../../api/api.js";
import {itemEquals} from './utils';
import {Item} from './types';


let prevID = 0;
let array = [];
let isFirst = true;

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
      const lastMsgID = await API.getID();
      try {
        if (lastMsgID === 0 && isFirst) {
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
            setPerson(item);
            array.unshift(item);
            setHistoryItems(array);
            isFirst = false;
          }
        }
        if (prevID === lastMsgID && lastMsgID !== 0) return;
        console.log(lastMsgID);
        if (lastMsgID <= 0) return;
        for (let i = prevID; i < lastMsgID; i++) {
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
            isFirst = false;
          }
        }
      } catch (e) {
      }
      prevID = lastMsgID;
    }, 1000);
    return () => {
      clearInterval(timeout);
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
              id={id}
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
