const Buttons = ({btnText, className}) => {
  return (
    <button className={`py-[18px] px-[28px] text-white text-[20px] bg-btnCL rounded-[50px] cursor-pointer hover:rounded-2xl hover:py-[22px] transition-all duration-300 ${className}`}>{btnText}</button>
  )
}

export default Buttons
