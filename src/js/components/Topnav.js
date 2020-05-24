import { Link } from "react-router-dom";

const Topnav = ({ username }) => {
	return <nav className="navbar is-fixed-top is-spaced" role="navigation" aria-label="top navigation">
		<div className="navbar-brand">
			<Link to="/" className="navbar-item">
				<h1 className="title">
						AFLobby 2
				</h1>
			</Link>
		</div>
		<div className="navbar-end">
			<div className="navbar-item has-dropdown is-hoverable">
				<Link className="navbar-link" to="/profile">
					Hello {username}
				</Link>
				<div className="navbar-dropdown">
					<Link className="navbar-item" to="/profile">
						Profile
					</Link>
					<hr className="navbar-divider" />
					<a className="navbar-item">
						Log out
					</a>
				</div>
			</div>
		</div>
	</nav>
}

export default Topnav;
