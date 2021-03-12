const Border = ({ fill, ...props }) => (
  <svg {...props} viewBox="0 0 500 80" preserveAspectRatio="none">
    <path 
      fill={fill}
      d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
    />
  </svg>
)

export default Border