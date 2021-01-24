import Border from './border'

const Section = ({ 
  fill,
  borders, 
  children, 
  ...props 
}) => {
  return (
    <>
      <Border fill={fill} />
      <section { ...props } style={{backgroundColor: fill ? fill : 'inherit'}}>
        <div className="container mx-auto">
        { children }
        </div>
      </section>
      <Border 
        fill={fill} 
        style={{ transform: `scale(-1)` }} 
      />
    </>
  )
}

export default Section