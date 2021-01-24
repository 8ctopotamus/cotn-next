const Container = ({ className, children, ...props }) => {
  return (
    <div 
      className={`container mx-auto pt-10 pb-10 ${className}`} 
      { ...props }
    >
      { children }
    </div>
  )
}

export default Container