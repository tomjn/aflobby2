import {
  Link
} from "react-router-dom";

import BattleNavItem from "./BattleNavItem";

const Sidebar = () => {
	return <nav className="menu is-medium" role="navigation" aria-label="main navigation">
		<p className="menu-label">SinglePlayer</p>
		<ul className="menu-list">
			<li><Link to="/skirmish">Play Against AI</Link></li>
			<li><Link to="/settings">Settings</Link></li>
		</ul>
		<p className="menu-label">Current Battle</p>
		<ul className="menu-list">
			<BattleNavItem name="Desert Triad" />
		</ul>
		<p className="menu-label">Multiplayer</p>
		<ul className="menu-list">
			<li><Link to="/battle/new">New Battle</Link></li>
			<BattleNavItem name="Red Comet FFA" />
			<BattleNavItem name="Setons Clutch 1v1" />
			<BattleNavItem name="Desert Triad 3v3" />
			<BattleNavItem name="Comet Catcher 2v2" />
			<BattleNavItem name="Delta Siege Dry 16v16" />
			<BattleNavItem name="Speed Ball 1v1" />
			<BattleNavItem name="Painted Desert 2v2" />
		</ul>
	</nav>
}

export default Sidebar;
