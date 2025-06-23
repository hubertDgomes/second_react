const Buttons = ({btnText, className}) => {
  return (
    <button className={`custom-cursor1 py-[18px] px-[28px] text-white text-[20px] bg-btnCL rounded-[50px] hover:rounded-2xl hover:py-[22px] transition-all duration-300 ${className}`}>{btnText}</button>
  )
}

export default Buttons
