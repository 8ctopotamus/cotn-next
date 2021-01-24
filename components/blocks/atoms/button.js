const Button = ({ url, title }) => (
  <a 
    href={url ? url : '#'} 
    className="inline-block mb-3 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-4 px-10 border border-white hover:border-transparent rounded"
  >
    {title && title}
  </a>
)

export default Button