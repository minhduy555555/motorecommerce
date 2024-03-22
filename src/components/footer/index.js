import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoClockFill } from "react-icons/go";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-name">Company</li>
        <li className="footer-items">Ducati</li>
        <li className="footer-items">Honda</li>
        <li className="footer-items">Yamaha</li>
        <li className="footer-items">Kawasaki</li>
      </ul>

      <ul className="footer-list">
        <li className="footer-name">Page</li>
        <li className="footer-items">Trang Chủ</li>
        <li className="footer-items">Xe Máy</li>
        <li className="footer-items">Phụ Tùng Dịch Vụ</li>
        <li className="footer-items">Liên Hệ </li>
        <li className="footer-items">Giỏ Hàng </li>
      </ul>

      <ul className="footer-list">
        <li className="footer-name"></li>
        <li className="footer-items">
          <FaHome style={{fontSize:'24px'}} /> <span className="footer-icon" > Đại Lộ Khoa Học </span>{" "}
        </li>
        <li className="footer-items">
          <IoMdMail style={{fontSize:'24px'}} /> <span className="footer-icon"> motobytes@gmail.com </span>{" "}
        </li>
        <li className="footer-items">
          <FaPhoneAlt style={{fontSize:'24px'}} /> <span className="footer-icon">0905956979</span>{" "}
        </li>
        <li className="footer-items"><GoClockFill style={{fontSize:'24px'}} /> <span className="footer-icon" >24/7</span> </li>
      </ul>
    </div>
  );
}

export default Footer;
