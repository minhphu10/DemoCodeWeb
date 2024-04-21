import {memo,useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tabs, TabList,TabPanel,Tab } from "react-tabs";
import "./style.scss";
import { formater } from "util/formater";
import { AiOutlineMenu, AiOutlinePhone} from "react-icons/ai";
import sp1Img from "asset/user/images/categories/sp1.jpg";
import sp2Img from "asset/user/images/categories/sp2.jpg";
import sp3Img from "asset/user/images/categories/sp3.jpg";
import sp4Img from "asset/user/images/categories/sp4.jpg";
import sp5Img from "asset/user/images/categories/sp5.jpg";
import featured1Img from "asset/user/images/featured/featured-1.jpg";
import featured2Img from "asset/user/images/featured/featured-2.jpg";
import featured3Img from "asset/user/images/featured/featured-3.jpg";
import featured4Img from "asset/user/images/featured/featured-4.jpg";
import featured5Img from "asset/user/images/featured/featured-5.jpg";
import featured9Img from "asset/user/images/featured/featured-9.jpg";
import featured7Img from "asset/user/images/featured/featured-7.jpg";
import featured8Img from "asset/user/images/featured/featured-8.jpg";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Homepage = () =>{
    const [isShowCategories, setShowCategories] = useState(true)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const sliderItems = [
        {
            bgImg: sp1Img,
            name: "Jacket",
        },
        {
            bgImg: sp2Img,
            name: "T-shirt",
        },
        {
            bgImg: sp3Img,
            name: "Jewelry",
        },
        {
            bgImg: sp4Img,
            name: "Shoes",
        },
        {
            bgImg: sp5Img,
            name: "Hoodie",
        },
    ]
    const featProducts = {
        all:{
            title: "ALL",   
            products: [
                {
                    img: featured1Img,
                    name:"Levents Ribbon Rabit",
                    price:450000,
                },
                {
                    img: featured2Img,
                    name:"Levents Stripe",
                    price:350000,
                },
                {
                    img: featured3Img,
                    name:"Levents My Animal",
                    price:400000,
                },
                {
                    img: featured4Img,
                    name:"Degrey bé xoài",
                    price:375000,
                },
                {
                    img: featured5Img,
                    name:"Degrey Is Us",
                    price:550000,
                },
                {
                    img: featured9Img,
                    name:"Degrey Navy",
                    price:680000,
                },
                {
                    img: featured7Img,
                    name:"BLVCK Love Striped",
                    price:300000,
                },
                {
                    img: featured8Img,
                    name:"BLVCK Logo Basic",
                    price:290000,
                },
            ],
        },
        Tshirt: {
            title: "T-Shirt",
            products: [
                {
                    img: featured1Img,
                    name:"Levents My Animal",
                    price: 450000
                },
                {
                    img: featured4Img,
                    name:"Degrey bé xoài",
                    price:400000,
                },
            ]
        },
    };
    const renderFeaturedProducts = (data) =>{
        const tabList = [];
        const tabPanels = [];
        Object.keys(data).forEach((key, index) =>{
            // console.log(key,index);
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            const tabPanel = [];
            data[key].products.forEach((item,index1) =>{
                tabPanel.push(
                    <div className="col-lg-3" key={index1}>
                        <div className="featured__item">
                            <div className="featured__item_pic" style={{
                                backgroundImage:`url(${item.img})`
                            }}>
                                <ul className="featured__item_pic_hover">
                                    <li>
                                        <AiOutlineEye/>
                                    </li>
                                    <li>
                                        <AiOutlineShoppingCart/>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item_text">
                                <h6>
                                    <Link to ="">{item.name}</Link>
                                </h6>
                                <h5>
                                    {formater(item.price)}
                                </h5>
                            </div>
                        </div>
                    </div>);
            });
            tabPanels.push(tabPanel);
        });
        return(
            <Tabs>
                <TabList>{tabList}</TabList>
                {
                    tabPanels.map((item, key) =>(
                        <TabPanel key={key}>
                            <div className="row">
                                {item}
                            </div>
                        </TabPanel>
                    ))}
            </Tabs>
        );
    }
    return(
       <>
       <div className="container">
                <div className="row hero__categories_container">
                    <div className="col-lg-3 hero__categories">
                        <div className="hero__categories_all" onClick={()=>setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu/>
                            Danh sách sản phẩm
                        </div> 
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to={"#"}>T-Shirt</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Jacket</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Shoes</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Jewelry</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 hero__search_container">
                        <div className="hero__search">
                            <div className="hero__search_form">
                                <form>
                                    <input type="" name="" value="" placeholder="Hãy Tìm Kiếm Ở Đây!"/>
                                    <button type="submit">Tìm Kiếm</button>
                                </form>
                            </div>
                            <div className="hero__search_phone">
                                <div className="hero__search_phone_icon">
                                    <AiOutlinePhone/>
                                </div>
                                <div className="hero__search_phone_text">
                                    <p>0965.499.498</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item">
                            {/* <div className="hero__text">
                                <span>Fashion Style</span>
                                <h2>
                                    Thời Trang <br/>
                                    Phong cách của bạn
                                </h2>
                            </div> */
                                <div className="hero__text">
                                    <Link to="" className="primary-btn">
                                        Mua Ngay
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        {/*Categories Begin */}
        <div className="container container__categories_slider">
            <Carousel responsive={responsive} className="categories_slider">
                {
                    sliderItems.map((item, key) => (
                        <div className="categories_slider_item" 
                        style={{backgroundImage: `url(${item.bgImg})`}}
                        key={key}
                        >
                            <p>{item.name}</p>
                        </div>
                    ))}
            </Carousel>
        </div>
        {/*Categories End */}
        {/*Featured Begin*/}
        <div className="container">
            <div className="featured">
                <div className="section-title">
                    <h2>Sản Phẩm nổi bật</h2>
                </div>
                {renderFeaturedProducts(featProducts)}
            </div>
        </div>
        {/*Featured End*/}
        
       </>
    )
};
export default memo(Homepage);