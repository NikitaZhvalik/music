import s from './style.module.css'

interface BurgerIconProps {
  show: boolean
  setShow: (show: boolean) => void
}

const BurgerIcon = ({ show, setShow }: BurgerIconProps) => {
  const toggleShow = () => setShow(!show)

  return (
    <div onClick={toggleShow} className={s.burger}>
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
    </div>
  )
}

export default BurgerIcon
