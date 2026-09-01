import Hero from "./Hero";
import styles from "./Home.module.css";
import mainBackImage from "../../assets/MainBackground.avif";
function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <section></section>
      <section></section>
    </div>
  );
}

export default Home;
