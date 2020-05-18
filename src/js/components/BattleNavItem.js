import Minimap from "./Minimap";
import { Link } from "react-router-dom";

const BattleNavItem = ({name}) => {
	return <li><Link to="/battle/123">
		<div className="level">
			<div className="level-left">
				<div className="level-item">
					<p>{name}<br/><small>2 players waiting</small></p>
				</div>
			</div>
			<div className="level-right">
				<div className="level-item">
					<Minimap />
				</div>
			</div>
		</div>
	</Link></li>;
}

export default BattleNavItem;
