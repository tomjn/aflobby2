import BattleNavItem from "./BattleNavItem";
import Demo from "./Demo";
import Topnav from "./Topnav";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function Frame ( props ) {
	return <React.Fragment>
		<Topnav username="AF" />
		<div class="columns">
			<div class="column is-one-fifth fixed-column">
				<nav class="menu is-medium" role="navigation" aria-label="main navigation">
					<p class="menu-label">SinglePlayer</p>
					<ul class="menu-list">
						<li><Link to="/skirmish">Play Against AI</Link></li>
						<li class="disabled"><a>Campaign</a></li>
						<li class="disabled"><a>Replays</a></li>
						<li><Link to="/settings">Settings</Link></li>
					</ul>
					<p class="menu-label">Current Battle</p>
					<ul class="menu-list">
						<BattleNavItem name="Desert Triad" />
					</ul>
					<p class="menu-label">Multiplayer</p>
					<ul class="menu-list">
						<li><Link to="/battle/new">New Battle</Link></li>
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="Red Comet FFA" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
						<BattleNavItem name="2v2 Comet Catcher" />
					</ul>
				</nav>
			</div>
			<div class="column is-offset-one-fifth is-four-fifths">
				<Switch>
					<Route path="/skirmish">
						<section class="section">
							<h1 class="title">Play Against AI</h1>
							<div class="box">
								<p>Skirmish</p>
							</div>
						</section>
					</Route>
					<Route path="/settings">
						<section class="section">
							<h1 class="title">Settings</h1>
							<div class="box">
								<div class="field is-horizontal">
								  <div class="field-label is-normal">
								    <label class="label">Favourite Faction</label>
								  </div>
								  <div class="field-body">
								    <div class="field is-narrow">
								      <div class="control">
								        <div class="select is-fullwidth">
								          <select>
								            <option>Imperium of Man</option>
								            <option>Tau</option>
								            <option>Orc</option>
								            <option>Eldar</option>
								          </select>
								        </div>
								      </div>
								    </div>
								  </div>
								</div>
								<div class="field is-horizontal">
								  <div class="field-label is-normal">
								    <label class="label">Water Renderer</label>
								  </div>
								  <div class="field-body">
								    <div class="field is-narrow">
								      <div class="control">
								        <div class="select is-fullwidth">
								          <select>
								            <option>Basic</option>
								            <option>Reflective</option>
								            <option>Dynamic</option>
								          </select>
								        </div>
								      </div>
								    </div>
								  </div>
								</div>
							</div>
						</section>
					</Route>
					<Route path="/battle/new">
						<section class="section">
							<h1 class="title">New Battle</h1>
							<div class="box">
								<div class="field is-horizontal">
								  <div class="field-label is-normal">
								    <label class="label">Battle Name</label>
								  </div>
								  <div class="field-body">
								    <div class="field">
								      <p class="control">
								        <input class="input" type="text" placeholder="Battle name goes here" />
								      </p>
								    </div>
								  </div>
								</div>
								<div class="field is-horizontal">
								  <div class="field-label is-normal">
								    <label class="label">Map</label>
								  </div>
								  <div class="field-body">
								    <div class="field is-narrow">
								      <div class="control">
								        <div class="select is-fullwidth">
								          <select>
								            <option>Red Comet</option>
								            <option>Comet Catcher</option>
								            <option>Delta Siege Dry</option>
								          </select>
								        </div>
								      </div>
								    </div>
								  </div>
								</div>
								<div class="field is-horizontal">
								  <div class="field-label is-normal">
								    <label class="label">Favourite Faction</label>
								  </div>
								  <div class="field-body">
								    <div class="field is-narrow">
								      <div class="control">
								        <div class="select is-fullwidth">
								          <select>
								            <option>Imperium of Man</option>
								            <option>Tau</option>
								            <option>Orc</option>
								            <option>Eldar</option>
								          </select>
								        </div>
								      </div>
								    </div>
								  </div>
								</div>
								<div class="field is-horizontal">
								  <div class="field-label">
								  </div>
								  <div class="field-body">
								    <div class="field">
								      <div class="control">
								        <button class="button is-primary">
								          Create Battle
								        </button>
								      </div>
								    </div>
								  </div>
								</div>
							</div>
						</section>
					</Route>
					<Route path="/battle">
						<section class="section">
							<h1 class="title">Battle: Red Comet FFA</h1>
							<div class="box">
								<p>Battle UI</p>
							</div>
						</section>
					</Route>
					<Route path="/profile">
						<section class="section">
							<h1 class="title">Hello AF!</h1>
							<div class="box">
								<p>Profile</p>
							</div>
						</section>
					</Route>
					<Route path="/">
						<Demo />
					</Route>
				</Switch>
			</div>
		</div>
	</React.Fragment>;
}

export default Frame;
