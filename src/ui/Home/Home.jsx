import Hero from "./Hero";
import StoreSection from "./StoreSection";

import styles from "./Home.module.css";
import ShopTheRoom from "./ShopTheRoom";
import OurStory from "./OurStory";
import JoinUs from "./JoinUs";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <section className={styles.section} id="hero">
          <Hero />
        </section>
        <section className={styles.section} id="storeSection">
          <StoreSection />
        </section>
        <section className={styles.section} id="shopTheRoom">
          <ShopTheRoom />
        </section>
        <section className={styles.section} id="ourStory">
          <OurStory />
        </section>
        <section className={styles.section} id="joinUs">
          <JoinUs />
        </section>
      </div>
    </div>
  );
}

export default Home;
