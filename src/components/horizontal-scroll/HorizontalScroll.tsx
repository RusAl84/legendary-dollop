import {ReactNode, useCallback, useRef} from 'react';
import cc from 'classnames';
import styles from './HorizontalScroll.module.css';
import { useEffect } from 'react';

type HorizontalScrollProps = {
  className?: string,
  children: ReactNode[],
};

function HorizontalScroll(props: HorizontalScrollProps) {
  const {className, children} = props;
  const ref = useRef(null);
  const hundleScroll = useCallback((e: any) => {
    e.preventDefault();
    if (!e.deltaY) return;
    e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
  }, []);
  useEffect(() => {
    ref.current.addEventListener('wheel', hundleScroll);
    return () => {
      ref.current.removeEventListener('wheel', hundleScroll);
    }
  });
  return (
    <section 
      ref={ref} 
      className={cc(className, styles.spinnerBlock)}
    >
      {children}
    </section>
  );
}

export default HorizontalScroll;