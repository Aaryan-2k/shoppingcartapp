import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function NavBar(){
    return (
    <div className='navbar'>
        <NavLink to='/'>
            <img src='https://e7.pngegg.com/pngimages/531/692/png-clipart-logo-graphic-design-art-online-shop-angle-text-thumbnail.png'></img>
        </NavLink>
        <div className="home-cart">
            <NavLink to='/'>
                <p>Home</p>
            </NavLink>
            <NavLink to='/cart'>
                <p><BsCart4/></p>
            </NavLink>
        </div>
    </div>
    )
}