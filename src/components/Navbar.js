import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar({Cart_items}) {
    console.log(Cart_items)
    return (
        <div className='navbar'>
            {/* took random image from internet for logo */}
            <img src='https://seeklogo.com/images/O/orange-logo-DB080DF597-seeklogo.com.png' className='logo' alt='logo'/>
            <div className='mid_nav'>
                {/* could have used 'ul' tag, but 'h3' gave me perfect font size :) */}
                 <a href='link'><h3>Shop</h3></a>
                 <a href='link'><h3>About Us</h3></a>
                 <a href='link'><h3>Our Stores</h3></a>
                 <a href='link'><h3>Contact Us</h3></a>
            </div>
            <div className='end_nav'>
                {/* used material UI icons */}
                 <a href='link'><h3>Search</h3></a>
                 <a href='link'><SearchIcon/></a>
                 <a href='link'><PersonOutlineIcon/></a>
                 <a href='link'><ShoppingCartIcon/><h6>{Cart_items.length}</h6></a>
            </div>
        </div>
    )
}

export default Navbar
