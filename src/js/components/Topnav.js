import { Link } from "react-router-dom";

const Topnav = ({ username }) => {
	return <nav class="navbar is-fixed-top is-spaced" role="navigation" aria-label="top navigation">
		<div class="navbar-brand">
			<a class="navbar-item">
				<h1 class="title">
					<Link to="/">
						AFLobby 2
					</Link>
				</h1>
			</a>
		</div>
		<div class="navbar-end">
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					Hello {username}
				</a>
				<div class="navbar-dropdown">
					<Link class="navbar-item" to="/profile">
						Profile
					</Link>
					<hr class="navbar-divider" />
					<a class="navbar-item">
						Log out
					</a>
				</div>
			</div>
		</div>
	</nav>
}

export default Topnav;
