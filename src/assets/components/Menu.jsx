const Menu = ({className, children}) => {
  return (
    <ul className={`${className} uppercase text-[18px] font-menuF`}>{children}</ul>
  )
}

export default Menu
