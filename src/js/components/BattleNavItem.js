import Minimap from "./Minimap";
import { Link } from "react-router-dom";

const BattleNavItem = ({name}) => {
	return <li><Link to="/battle/123">
		<div class="level">
			<div class="level-left">
				<div class="level-item">
					<p>{name}<br/><small>2 players waiting</small></p>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item">
					<Minimap />
				</div>
			</div>
		</div>
	</Link></li>;
}

export default BattleNavItem;
