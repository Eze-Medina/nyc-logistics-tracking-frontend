import { NavLink } from 'react-router'
import style from './navbar.module.css'
import { Package, Truck } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li className={style.list_item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.navbar_link_active : style.navbar_link
            }
          >
            <Truck /> Crear guía
          </NavLink>
        </li>
        <li className={style.list_item}>
          <NavLink
            to="/guides"
            className={({ isActive }) =>
              isActive ? style.navbar_link_active : style.navbar_link
            }
          >
            <Package /> Consultar guías
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}