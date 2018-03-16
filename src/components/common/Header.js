import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';


const Header = ({loading}) => {
	return( 
		<nav>
			<IndexLink to="/" activeCLassName="active">Home</IndexLink>
			{" | "}
			<Link to="/courses" activeCLassName="active">Courses</Link>
			{" | "}
			<Link to="/about" activeCLassName="active">About</Link>
			{loading && <LoadingDots interval={300} dots={3} />}
		</nav>
		);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;