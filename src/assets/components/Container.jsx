const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1400px] m-auto px-[20px] ${className}`}>{children}</div>
  )
}

export default Container
