var React = require('react');
var {Link, IndexLink} = require('react-router');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

var Nav = () => {
	return (
		<div className="top-bar" >

			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">React Time App</li>
					<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
					<li><Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
				</ul>
			</div>

			<div className="top-bar-right"> 
				<ul className="menu">
					<li className="menu-text">Created by <a href="#"> Miranda Kapin</a></li>
				</ul>
			</div>

		</div>
	);
};

module.exports = Nav;
