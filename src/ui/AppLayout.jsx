import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default AppLayout;
