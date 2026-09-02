import Hero from "./Hero";
import StoreSection from "./StoreSection";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <Hero />
        <StoreSection />
        <section></section>
      </div>
    </div>
  );
}

export default Home;
