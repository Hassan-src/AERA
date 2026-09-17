import Hero from "../../ui/Home/Hero";
import StoreSection from "../../ui/Home/StoreSection";

import styles from "./Home.module.css";
import ShopTheRoom from "../../ui/Home/ShopTheRoom";
import OurStory from "../../ui/Home/OurStory";
import JoinUs from "../../ui/Home/JoinUs";

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
        <section className={styles.sectionJoinUs} id="joinUs">
          <JoinUs />
        </section>
      </div>
    </div>
  );
}

export default Home;
