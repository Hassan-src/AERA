import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
