import Hero from "../../ui/Home/Hero";
import StoreSection from "../../ui/Home/StoreSection";

import styles from "./Home.module.css";
import ShopTheRoom from "../../ui/Home/ShopTheRoom";
import OurStory from "../../ui/Home/OurStory";
import JoinUs from "../../ui/Home/JoinUs";
import Slider from "../../ui/Home/Slider";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <nav className={styles.homeNavBar}>
          <ul className={styles.linksList}>
            <li>
              <a href="#storeSection">Products</a>
            </li>
            <li>
              <a href="#shopTheRoom">Shop The Room</a>
            </li>
            <li>
              <a href="#ourStory">our Story</a>
            </li>
            <li>
              <a href="#joinUs">AERA World</a>
            </li>
          </ul>
        </nav>
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
        <section className={styles.sectionSlider}>
          <Slider />
        </section>
      </div>
    </div>
  );
}

export default Home;
