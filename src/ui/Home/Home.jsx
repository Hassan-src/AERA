import Hero from "./Hero";
import StoreSection from "./StoreSection";

import styles from "./Home.module.css";
import ShopTheRoom from "./ShopTheRoom";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <section className={styles.section}>
          <Hero />
        </section>
        <section className={styles.section}>
          <StoreSection />
        </section>
        <section className={styles.section}>
          <ShopTheRoom />
        </section>
      </div>
    </div>
  );
}

export default Home;
