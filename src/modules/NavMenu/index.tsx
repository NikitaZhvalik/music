import { useState } from 'react'
import Logo from '../../ui/Logo'
import MenuList from './components/MenuList/MenuList'
import BurgerIcon from './components/BurgerIcon'
import s from './style.module.css'

const NavMenu = () => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <nav className={s.main}>
      <Logo />
      <BurgerIcon show={show} setShow={setShow} />
      {show && <MenuList />}
    </nav>
  )
}

export default NavMenu
