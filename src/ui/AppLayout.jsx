import Header from "./Home/Header";
import Footer from "./Home/Footer";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
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
