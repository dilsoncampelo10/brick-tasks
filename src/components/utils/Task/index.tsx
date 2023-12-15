import styles from './Task.module.scss';
import { useState } from 'react';
import gallery from './icons/gallery.png';

const Task = () => {
  const [checked, setChecked] = useState(false);

  const handleInputChange = () => {
    setChecked(!checked);
  };

  return (
    <section className={styles.taskBox}>
      <div className={styles.taskInput}>
        <input
          type="checkbox"
          id="check"
          checked={checked}
          onChange={handleInputChange}
        />
        <div className={styles.taskLabelArea}>
          <label className={styles.label} htmlFor="check">
            Pagar Imposto de Renda
          </label>
          <span>24-02</span>
        </div>
      </div>

      <div className={styles.imageArea}>
            <img src={gallery} alt="" />
      </div>
    </section>
  );
};

export default Task;
