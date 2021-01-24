import Border from './border'

// example props
// className="pt-8 pb-8 text-black"
// fill="turquoise"
// borders={true}

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