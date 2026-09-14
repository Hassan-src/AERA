import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <img src="" alt="" />
      <a href="#hero">hero</a>
      <a href="#storeSection">StoreSection</a>
      <a href="#shopTheRoom">ShopTheRoom</a>
      <a href="#ourStory">ourStory</a>
      <a href="#joinUs">joinUs</a>
    </header>
  );
}

export default Header;
