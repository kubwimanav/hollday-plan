import{BsFacebook} from "react-icons/bs"
import{AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai"
import {MdCancel} from "react-icons/md"

import './Search.css'
import white from '../images/white.png'
import { Link } from "react-router-dom"
function Search({ setModal, handlemadal }) {
  return (
    <div className="search">
      <div className="top">
        <img src={white} alt="Top Image" />
        <MdCancel className="BOTH" onClick={handlemadal} />
      </div>

      <div class="navigation">
        <Link to="homepage" onClick={handlemadal}>Home</Link>
        <Link to ="tour" onClick={handlemadal}>Tour</Link>
        <Link to="login" onClick={handlemadal}>Login</Link>
        <Link to="contact_page" onClick={handlemadal}>Contact Us</Link>
      </div>

      <div class="social-media">
        <BsFacebook />
        <AiFillInstagram />
        <AiFillTwitterCircle />
      </div>
    </div>
  );
} export default Search