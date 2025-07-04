import profilePicture from "../assets/reki1.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Reki Bintang Kuswara</h3>
        <p>Penjaga Bumi </p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/reki_bntng/">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@archix03?_t=ZS-8xYV9elkKQh&_r=1">
            <FaTiktok />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/share/19BBDzLzys/">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
