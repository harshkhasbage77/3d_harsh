import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {

  const date = new Date();

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © {date.getFullYear()} <strong>Harsh Khasbage</strong>. All rights reserved.
          {/* © {date.getFullYear()} <strong>Adrian Hajdin</strong>. Credits to Adrian Hajdin. */}
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link, index) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`object-contain ${index === 1 ? 'w-9 h-9' : 'w-6 h-6'}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer
