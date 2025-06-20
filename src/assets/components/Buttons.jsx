const Buttons = ({btnText, className}) => {
  return (
    <button className={`py-[14px] px-[28px] text-white font-bold bg-btnCL rounded-[50px] font-menuF cursor-pointer hover:rounded-2xl transition-all duration-700 ${className}`}>{btnText}</button>
  )
}

export default Buttons
