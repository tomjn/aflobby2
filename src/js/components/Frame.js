import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Battle from "./Battle";
import Demo from "./Demo";
import Settings from "./Settings";
import Sidebar from "./Sidebar";
import Skirmish from "./Skirmish";
import Topnav from "./Topnav";

function Frame ( props ) {
	return <React.Fragment>
		<Topnav username="AF" />
		<div className="columns">
			<div className="column is-one-fifth fixed-column">
				<Sidebar />
			</div>
			<div className="column is-offset-one-fifth is-four-fifths">
				<section className="section main-area">
					<Switch>
						<Route path="/skirmish">
							<Skirmish />
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
									<article className="media">
										<div className="media-left">
											<figure className="image is-64x64 is-square is-rounded">
												<img className="is-rounded" src="https://i.pinimg.com/originals/00/2d/57/002d5714c44f88a16c1f0bdfa97ca05e.jpg" alt="Image" />
											</figure>
										</div>
										<div className="media-content">
											<div className="content">
												<p>
													<strong>AF</strong> <small>@tarendai</small>
													<br/>
													Fellow pokemons, please be patient while I wire up things. Until the various screens are hooked up, here's a test screen of various UI elements.
												</p>
											</div>
										</div>
									</article>
								</div>
								<div className="box content">
									<p>Things that might live here eventually:</p>
									<ul>
										<li>A log out button</li>
										<li>When you joined</li>
										<li>A delete account button</li>
										<li>In the far future, your rank status? Maybe recent wins</li>
										<li>Trophies and awards, achievements etc</li>
									</ul>
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
