import type { NextPage } from "next";
import styles from "./list.module.css";

const List: NextPage = () => {
  return (
    <div className={styles.listDiv}>
      <div className={styles.menuItemDiv}>
        <div className={styles.optionDiv}>Singapore - Changi (LAX)</div>
      </div>
      <div className={styles.menuItemDiv1}>
        <div className={styles.optionDiv}>
          Ninoy Aquiono International Airport (NAIA
        </div>
      </div>
      <div className={styles.menuItemDiv2}>
        <div className={styles.optionDiv}>
          Mactan International Airport (MIA)
        </div>
      </div>
      <div className={styles.menuItemDiv2}>
        <div className={styles.optionDiv}>
          Clark International Airport (CIA)
        </div>
      </div>
      <div className={styles.menuItemDiv4}>
        <div className={styles.optionDiv}>Charles de Gaulle Airport (CGA)</div>
      </div>
    </div>
  );
};

export default List;
