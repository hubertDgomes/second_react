const Menu = ({className, children}) => {
  return (
    <ul className={`${className} uppercase text-[20px] font-bold font-menuF cursor-pointer`}>{children}</ul>
  )
}

export default Menu
