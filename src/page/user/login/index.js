import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
// import axios from "axios";
import googleImage from "../../../asset/user/images/hero/ggimage.jpg";
const Loginpage = () =>{
    return(
        <div className="login_page">
            <div className="left">
                <h3>ReactJs Shop.</h3>
                <h4>
                    Welcome<br/>
                    start your shopping spree<br/>
                    now with our<br/>
                    management system
                </h4>
            </div>
            <div className="right">
                <h3>Create an account</h3>
                <div className="form_group">
                    <label htmlFor="email"> Xin mời nhập Email</label>
                    <input
                        className="input"
                        type="email"
                        id="email"
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="password" className="label"> Xin mời nhập PassWord</label>
                    <input
                        className="input"
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <button className="Create_account_button">
                    Create Account
                </button>
                <button className="google_button">
                    <img className="google_logo" src={googleImage} alt="googleImage" width={30} height={30}/>
                    <span className="button_text">Continue to Google</span>
                </button>
                <p className="account_text">
                    Already have an account?
                    <Link to="/login" className="login_link">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
};
export default memo(Loginpage);