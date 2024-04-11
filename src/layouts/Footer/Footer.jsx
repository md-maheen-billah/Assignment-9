import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaTree } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-[#05386B] text-[#5CDB95]">
        <aside>
          <h2 className="flex items-center text-2xl gap-2">
            Terra Scope <FaTree />
          </h2>
          <p>Copyright © 2024 - All right reserved by Md. Maheen Billah</p>
          <div className="text-xl mt-2 flex items-center gap-4">
            <a href="https://www.facebook.com/md.maheen.billah.97/">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/md-maheen-billah/">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/md.maheen.billah">
              <FaInstagram />
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
