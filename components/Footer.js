import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <p>2022 E-Headphones All rights reserved</p>
      <p className="icons">
        <a href="http://" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
}

export default Footer;
