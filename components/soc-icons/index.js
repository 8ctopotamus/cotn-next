import { 
  FaGitlab,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

const socials = {
  'https://jm.linkedin.com/company/codeofthenorth': FaLinkedin,
  'https://twitter.com/codeofthenorth': FaTwitter,
  'https://gitlab.codeofthenorth.com': FaGitlab,
}

const SocMedia = () => (
  <div className="flex justify-center align-center">
    {Object.entries(socials).map(([href, IconComponent]) => {     
      return (
        <a 
          href={href}
          className="m-5"
          target="_blank"
          rel="noreferrer noopener"
          key={href}
        >
          <IconComponent size={25} />
        </a>
      )}
    )}
  </div>
)

export default SocMedia 