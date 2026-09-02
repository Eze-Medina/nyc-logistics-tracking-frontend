import { NavLink } from 'react-router'
import style from './navbar.module.css'
import { Package, Truck, Users } from 'lucide-react'

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
            <Truck height={18} /> Crear guía
          </NavLink>
        </li>
        <li className={style.list_item}>
          <NavLink
            to="/guides"
            className={({ isActive }) =>
              isActive ? style.navbar_link_active : style.navbar_link
            }
          >
            <Package height={18} /> Consultar guías
          </NavLink>
        </li>
        <li className={style.list_item}>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive ? style.navbar_link_active : style.navbar_link
            }
          >
            <Users height={18} /> Consultar clientes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}