import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '/user.png'
import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const NavBar = ({ navInfo }) => {
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/career"}>Career</NavLink></li>

    </>
    const { logOutUser, user } = useContext(AuthContext)
    const HandleProfileView = () => {
        if (!user) {
            window.location.href = '/login';
        }
    }

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("Logout successful:");
            })
            .catch(err => {
                console.error(err);
            })


    }
    // const { button_link, button_text } = navInfo;
    return (
        <div className="navbar mb-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#706F6F]">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#706F6F]">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2" onClick={() => { HandleProfileView() }}>
                    <div className="w-10 rounded-full">
                        <img alt="Defult_User_pic_notFound" src={userDefaultPic} />
                    </div>
                </div>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn text-xl font-medium text-white py-2 px-6 bg-[#403F3F] rounded-none hover:text-black">LogOut</button>
                        :
                        <Link to={navInfo?.button_link || "/"}>
                            <button className="btn text-xl font-medium text-white py-2 px-6 bg-[#403F3F] rounded-none hover:text-black">{navInfo?.button_text || "Loading..."}</button>
                        </Link>
                }

            </div>
        </div>
    );
};

NavBar.propTypes = {
    navInfo: PropTypes.object.isRequired,
};

export default NavBar;