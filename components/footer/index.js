import Logo from '../logo'
import SocIcons from '../soc-icons'

const Footer = () => (
  <footer className="container mx-auto grid md:grid-cols-3 gap-6">
    <div className="col-span-2">
      <h2 className="text-3xl font-bold mb-10">LET US GUIDE YOU OUT OF THE WOODS</h2>
      <a href="#" className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-4 px-10 border border-white hover:border-transparent rounded">
        Button
      </a>
    </div>
    <div className="text-center">
      <Logo full={true} fill="#5b6fc6" />
      <SocIcons />
      <span>© {new Date().getFullYear()} Code of the North</span> 
    </div>
  </footer>
)

export default Footer