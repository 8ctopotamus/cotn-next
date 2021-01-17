import Logo from '../logo'

const Footer = () => (
  <footer className="grid md:grid-cols-3 gap-6">
    <div className="col-span-2">
      <h2 className="text-3xl font-bold">LET US GUIDE YOU OUT OF THE WOODS</h2>
      <button>Contact Us</button>
    </div>
    <div className="text-center">
      <Logo full={true} fill="#5b6fc6" className="mb-8" />
      <span>© {new Date().getFullYear()} Braustin Homes</span> 
    </div>
  </footer>
)

export default Footer