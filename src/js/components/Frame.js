import Battle from "./Battle";
import BattleNavItem from "./BattleNavItem";
import Demo from "./Demo";
import Settings from "./Settings";
import Topnav from "./Topnav";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function Frame ( props ) {
	return <React.Fragment>
		<Topnav username="AF" />
		<div className="columns">
			<div className="column is-one-fifth fixed-column">
				<nav className="menu is-medium" role="navigation" aria-label="main navigation">
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
			</div>
			<div className="column is-offset-one-fifth is-four-fifths">
				<section className="section main-area">
					<Switch>
						<Route path="/skirmish">
							<>
								<h1 className="title">Play Against AI</h1>
								<div className="columns">
									<div className="column is-two-thirds">
										<div className="field has-addons">
											<div className="field-label is-normal">
												<label className="label">AIs</label>
											</div>
											<div className="field-body">
												<p className="control">
													<button className="button is-selected is-info">
														<span>1</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>2</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>3</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>4</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>5</span>
													</button>
												</p>
											</div>
										</div>
										<div className="field has-addons">
											<div className="field-label is-normal">
												<label className="label">Difficulty</label>
											</div>
											<div className="field-body">
												<p className="control">
													<button className="button">
														<span>No AI</span>
													</button>
												</p>
												<p className="control">
													<button className="button is-selected is-info">
														<span>Easy AI</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>Normal AI</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>Difficult AI</span>
													</button>
												</p>
											</div>
										</div>
										<div className="field has-addons">
											<div className="field-label is-normal">
												<label className="label">Faction</label>
											</div>
											<div className="field-body">
												<p className="control">
													<button className="button is-selected is-info">
														<span>Red</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>Blue</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>Scavengers</span>
													</button>
												</p>
												<p className="control">
													<button className="button">
														<span>Random</span>
													</button>
												</p>
											</div>
										</div>
										<div className="field has-addons">
											<div className="field-label is-normal">
												<label className="label">Map</label>
											</div>
											<div className="field-body">
												<p className="control level">
													<span class="level-left">
														<span className="level-item">
															Setons Clutch
														</span>
														<button className="button level-item">
															<span>Change</span>
														</button>
													</span>
												</p>
											</div>
										</div>
										<hr />
										<div className="field is-grouped">
											<p className="control">
												<button className="button is-primary">
													<span>Start Game</span>
												</button>
											</p>
											<p className="control">
												<button className="button">
													<span>Reset</span>
												</button>
											</p>
										</div>
									</div>
									<div className="column is-one-third is-right">
										<div className="box">
											<p>Battle offline against the computer AI</p>
										</div>
									</div>
								</div>
							</>
						</Route>
						<Route path="/settings">
							<Settings />
						</Route>
						<Route path="/battle/new">
							<>
								<h1 className="title">New Battle</h1>
								<div className="box">
									<div className="field is-horizontal">
									  <div className="field-label is-normal">
									    <label className="label">Battle Name</label>
									  </div>
									  <div className="field-body">
									    <div className="field">
									      <p className="control">
									        <input className="input" type="text" placeholder="Battle name goes here" />
									      </p>
									    </div>
									  </div>
									</div>
									<div className="field is-horizontal">
									  <div className="field-label is-normal">
									    <label className="label">Map</label>
									  </div>
									  <div className="field-body">
									    <div className="field is-narrow">
									      <div className="control">
									        <div className="select is-fullwidth">
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
									<div className="field is-horizontal">
									  <div className="field-label is-normal">
									    <label className="label">Favourite Faction</label>
									  </div>
									  <div className="field-body">
									    <div className="field is-narrow">
									      <div className="control">
									        <div className="select is-fullwidth">
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
									<div className="field is-horizontal">
									  <div className="field-label">
									  </div>
									  <div className="field-body">
									    <div className="field">
									      <div className="control">
									        <button className="button is-primary">
									          Create Battle
									        </button>
									      </div>
									    </div>
									  </div>
									</div>
								</div>
							</>
						</Route>
						<Route path="/battle">
							<Battle />
						</Route>
						<Route path="/profile">
							<>
								<h1 className="title">Hello AF!</h1>
								<div className="box">
									<p>Profile</p>
								</div>
							</>
						</Route>
						<Route path="/">
							<Demo />
						</Route>
					</Switch>
				</section>
			</div>
		</div>
	</React.Fragment>;
}

export default Frame;
