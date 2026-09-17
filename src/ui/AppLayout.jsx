import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Footer from "./Footer/Footer";
function AppLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
