import {
  Phone,
  Mail,
  Instagram,
  Youtube
} from 'lucide-react'

import "./style.css"

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-content">
        <h3>KGL Enterprises</h3>
        <ul className="footer-contact">
          <li>
            <Phone size={20} />
            <a href="tel:8072871881">91+ 8072871881</a>
          </li>
          <li>
            <Mail size={20} />
            <a href="mailto:kglenterprises11@gmail.com">kglenterprises11@gmail.com</a>
          </li>
          <li>
            <Instagram size={20} />
            <a
              href="https://www.instagram.com/_kgl_enterprises_?igsh=MThzNXdqbWlzNTR1OA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on Instagram
            </a>
          </li>
          <li>
            <Youtube size={20} />
            <a
              href="https://youtube.com/@kgl_enterprises?si=oDP7UN_S-jPYkJLH"
              target="_blank"
              rel="noopener noreferrer"
            >
              View us on YouTube
            </a>
          </li>
        </ul>
        <p className="footer-copy">© {new Date().getFullYear()} KGL Enterprises. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
