import { Analytics } from "@vercel/analytics/react"

import { Outlet } from "react-router";
import { Navbar } from "./navbar/Navbar";
import style from './layout.module.css'


export const Layout = () => {
  return (
    <div className={style.layout}>
      <Analytics />
      <Navbar />
      <main className={style.layout_main}>
        <Outlet />
      </main>
    </div>
  );
};