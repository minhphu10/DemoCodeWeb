import {memo, useState} from "react" ;
import "./style.scss";
import { AiOutlineFacebook} from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { formater } from "util/formater";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ROUTERS } from "util/router";
const Header = () =>{
    const [menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",

            isShowSubmenu: false,
            child: [
                {
                    name: "T-Shirt",
                    path: "",
                },
                {
                    name: "Jacket",
                    path: "",
                },
                {
                    name: "Shoes",
                    path: "",
                },
                {
                    name: "Jewelry",
                    path: "",
                },
            ],
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ])


    return(
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li>
                                    <BiLogoGmail />
                                    minhphuhct12@gmail.com
                                </li>
                                <li>
                                    Miễn Phí giao hàng đơn từ {formater(500000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to={"https://www.facebook.com/minhphu2003"}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://www.instagram.com/minhphu0710/"}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://twitter.com/minh_phu72471"}>
                                        <AiOutlineTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://www.tiktok.com/@minhphu102003"}>
                                        <BiLogoTiktok />
                                    </Link>
                                </li>
                                <li>                  
                                    {/* <button > */}
                                        <Link to={"/login"}>
                                        <AiOutlineUser />
                                        <button>Đăng nhập</button>
                                    </Link>
                                    {/* Đăng Nhập</button> */}
                                </li>
                            </ul>
                        </div>   
                   </div>
                </div>;
            </div>
            <div className="container">
                 <div className="row">
                    <div className="col-xl-3">
                        <div className="header__logo">
                            <h1>ReactJs Shop</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="header__menu">
                            <nav className="header__menu">
                                <ul>
                                    {
                                        menus?.map((menu,menuKey) =>(
                                            <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                                <Link to={menu?.path}>{menu?.name}</Link>
                                                {
                                                    menu.child && (
                                                        <ul className="header__menu_dropdown">
                                                            {
                                                                menu.child.map((childItem, childKey) =>(
                                                                    <li key={`${menuKey}-${childKey}`}>
                                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                                    </li>
                                                                ))}
                                                            
                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>

                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formater(1100000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"#"}>
                                        <AiOutlineShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(Header);