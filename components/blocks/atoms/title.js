const Title = ({ children, className, ...props }) => children ? (
  <h2 className={`text-3xl font-bold mb-2 ${className}`} {...props}>
    {children}
  </h2>
) : null

export default Title