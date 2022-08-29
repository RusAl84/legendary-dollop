import {useState, useEffect} from 'react';
import LiveStream from "components/live-stream/LiveStream";
import DetectionCard from "components/detection-card/DetectionCard";
import HistoryCard from "components/history-card/HistoryCard";
import styles from "./MainLayout.module.css";
import API from "../../api/api.js";

type historyItem = {
  name: string;
  desc?: string;
};

// const historyItems: historyItem[] = [
//   {
//     name: "Русаков Алексей Михайлович",
//     desc: "Директор проекта Персона",
//   },
//   {
//     name: "Филатов Вячеслав Валерьевич", 
//     desc: "Оченьоченьоченьоченьдлинноеслово Алгоритмист программист преподаватель",
//   },
//   {
//     name: "Болотов Александр",
//     desc: "Фронтендер",
//   },
//   { name: "Филатов Вячеслав" },
//   { name: "Болотов Александр" },
//   { name: "Филатов Вячеслав" },
//   { name: "Болотов Александр" },
//   { name: "Филатов Вячеслав" },
//   { name: "Болотов Александр" },
//   { name: "Филатов Вячеслав" },
// ];

let lastMsgID = 0;

// {"capture":"http://127.0.0.1:5000\\capture\\1661797039825_5371237021.jpg","milliseconds":1661797039825,"name":"\u0420\u0443\u0441\u0430\u043a\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447","name_id":4,"photo":"http://127.0.0.1:5000/photo/Rusakov.jpg","timestr":"2022-08-29 21:17:19.825000              "}

function MainLayout() {
  const [historyItems, setHistoryItems] = useState([]);
  const [person, setPerson] = useState({
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
          const {name, photo, capture, desc} = msg;
          setHistoryItems([...historyItems, {name}]);
          setPerson({
            name,
            photo,
            cadr: capture,
            desc
          });
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
