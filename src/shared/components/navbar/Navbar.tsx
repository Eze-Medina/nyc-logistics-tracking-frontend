import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <h1>ShipTrack API</h1>
      <ul className={style.list}>
        <li className={style.list_item}>Dashboard</li>
      </ul>
    </nav>
  )
}