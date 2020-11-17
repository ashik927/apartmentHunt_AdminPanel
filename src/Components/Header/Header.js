import React from 'react';
import './Header.css'
import logo from '../../Images/Logo.png'
const Header = () => {
	return (
		<div class="menu sticky-top" id="my-div">
			<nav class="navbar navbar-expand-lg sticky-top my-navbar">
				<div class="container">

					<a class="navbar-brand" href="#">
						<img src={logo} width="auto" height="45" class="d-inline-block align-top" alt="" loading="lazy" />
					</a>
					<button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" type="button">
						<span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item act">
								<a class="nav-link" href="#" id="home" to="/home">Home <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="projects" to="/about">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="blog" to="/service">Service</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" href="#" to="/concerns">Concerns</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" href="#about" to="/event">Event</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#about" to="/contact">Contact</a>
							</li>

							<li class="nav-item">
								<a class="nav-link btn " href="" id="login" target="_blank">Login</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Header;