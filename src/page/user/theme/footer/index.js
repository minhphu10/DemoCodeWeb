import {memo} from "react" ;
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
const Footer = () =>{
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer__about">
                        <h1 className="footer__about_logo">ReactJs Shop</h1>
                        <ul>
                            <li>Địa Chỉ: 202 Bùi Vịnh</li>
                            <li>Phone: 0965-499-498</li>
                            <li>Email: minhphuhct12@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer__widget">
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li>
                                <Link to="#">Liên hệ</Link>
                            </li>
                            <li>
                                <Link to="#">Thông tin cửa hàng</Link>
                            </li>
                            <li>
                                <Link to="#">Sản phẩm kinh doanh</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="#">Thông tin tài khoản</Link>
                            </li>
                            <li>
                                <Link to="#">Giỏ hàng</Link>
                            </li>
                            <li>
                                <Link to="#">Danh sách ưa thích</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer__widget">
                        <h6>Khuyến mãi & Ưu đãi</h6>
                        <p>Đăng kí nhận thông tin ở đây</p>
                        <form action="#">
                            <div className="input__group">
                                <input type="text" placeholder="Nhập email ở đây!!"/>
                                <button type="submit" className="button__submit">
                                    Đăng ký
                                </button>
                            </div>
                            <div className="footer__widget_social">
                                <div>
                                    <AiOutlineFacebook/>
                                </div>
                                <div>
                                    <AiOutlineInstagram/>
                                </div>
                                <div>
                                    <AiOutlineTwitter/>
                                </div>
                                <div>
                                    <BiLogoTiktok />
                                </div>
                                <div></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </footer>;
};
export default memo(Footer);