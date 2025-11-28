import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex justify-end items-center gap-15 pr-10 pt-5 pb-5  font-bold text-sm fixed left-0 right-0 shadow-lg bg-white">
      <img src="https://images.seeklogo.com/logo-png/35/1/myntra-logo-png_seeklogo-355038.png" alt="img" className="h-10 w-12"/>
      <div className="flex gap-3">
        <a href="#">MEN</a>
        <a href="#">WOMEN</a>
        <a href="#">KIDS</a>
        <a href="#">HOME</a>
        <a href="#">BEAUTY</a>
        <a href="#">GENZ</a>
        <a href="#">STUDIO <sup className="text-pink-600">NEW</sup></a>
      </div>

      <input type="text" className="bg-gray-100 text-gray-400 p-2 rounded-sm" placeholder="Search for products…" />

      <div className="flex gap-2">
        <a href="#"><FontAwesomeIcon icon={faUser} /> Profile</a>
        <a href="#"><FontAwesomeIcon icon={faHeart} /> Wishlist</a>
        <a href="#"><FontAwesomeIcon icon={faBagShopping} /> Bag</a>
      </div>
    </div>
  );
}
export default Header;