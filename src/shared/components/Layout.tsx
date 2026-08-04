import { Outlet } from "react-router";
import { Navbar } from "./navbar/Navbar";
import { Header } from "./header/Header";
import style from './layout.module.css'


export const Layout = () => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.layout_main}>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};