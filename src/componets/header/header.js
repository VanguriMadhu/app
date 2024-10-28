import React from 'react';
import './header.css';

const Header = () =>{
    return(
        <dv class="container">
            <header class="fix container">
				<div class="logo">
					<a href="index.html">
						<img src="images/logo.png" alt="logo"/>
					</a>
				</div>

				<nav>
					<ul>
						<li><a href="www.google.com">HOME</a></li>
						<li><a href="www.google.com">ABOUT US</a></li>
						<li><a href="www.google.com">SERVICES</a></li>
						<li><a href="www.google.com">OVERVIEW</a></li>
						<li><a href="www.google.com">PROFILE</a></li>
						<li><a href="www.google.com">CONTACT US</a></li>
					</ul>
				</nav>
			</header>
        </dv>
    )
}

export default Header;