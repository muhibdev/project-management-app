import logo from './assets/logo.png';

const Header = () => {
	return (
		<nav className='navbar bg-light mb-4 p-0'>
			<div className='container'>
				<div className='navbar-brand'>
					<div className='d-flex'>
						<img src={logo} alt='logo' />
						<div>ProjectMGMT</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
