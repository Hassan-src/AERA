import Button from "../Button";

import styles from "./Footer.module.css";

import logo from "../../assets/svgs/logoFooter.svg";
import instagram from "../../assets/svgs/instagram.svg";
import github from "../../assets/svgs/GitHub.svg";
import X from "../../assets/svgs/X.svg";
import warranty from "../../assets/svgs/warrantyFooter.svg";
import box from "../../assets/svgs/box.svg";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.company}>
        <img className={styles.logo} src={logo} alt="aeralogo" />
        <p className={styles.companySlogan}>AERA — The Shape of Living.</p>
        <div className={styles.socialMediaBox}>
          <img
            className={styles.instagramLogo}
            src={instagram}
            alt="instagram"
          />
          <img className={styles.xLogo} src={X} alt="X" />
          <a className={styles.gitHubLink} href="">
            <img className={styles.githubLogo} src={github} alt="github" />
          </a>
        </div>
      </div>
      <div className={styles.listBox}>
        <span className={styles.listName}>Shop</span>
        <ul className={styles.lists}>
          <li>
            <Button className={styles.listChild} to={"/allproducts"}>
              All products
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/allproducts"}>
              sofas
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/allproducts"}>
              tables
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/allproducts"}>
              chairs
            </Button>
          </li>
        </ul>
      </div>
      <div className={styles.listBox}>
        <span className={styles.listName}>about</span>
        <ul className={styles.lists}>
          <li>
            <Button className={styles.listChild} to={"/LearnOurStory"}>
              our story
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/CraftsmanShip"}>
              craftsmanship
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/Sustainability"}>
              sustainability
            </Button>
          </li>
        </ul>
      </div>
      <div className={styles.listBox}>
        <span className={styles.listName}>support</span>
        <ul className={styles.lists}>
          <li>
            <Button className={styles.listChild} to={"/FAQ"}>
              FAQ
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/allproducts"}>
              Shipping & returns
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/allproducts"}>
              care instructions
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/allproducts"}>
              warranty
            </Button>
          </li>
          <li>
            <Button className={styles.listChild} to={"/allproducts"}>
              contact us
            </Button>
          </li>
        </ul>
      </div>
      <div className={styles.promises}>
        <div className={styles.promise}>
          <img className={styles.promiseImage} src={box} alt="box" />
          <span className={styles.promiseText}>
            white glove delivery & Global Delivery
          </span>
        </div>
        <div className={styles.promise}>
          <img className={styles.promiseImage} src={warranty} alt="warranty" />
          <span className={styles.promiseText}>secure checkout</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
