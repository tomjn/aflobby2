const Battle = () => {
	const url = "https://springfiles.com/sites/default/files/imagecache/182x120/images/spring/spring-maps/RedComet.sd7_minimap.jpg";
//	return <span className="icon mini-map"></span>
	return <>
		<h1 className="title">Battle Room</h1>
		<div className="columns">
			<div className="column is-three-quarters">
				<h2 className="subtitle">AFs Team</h2>
				<table className="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th className="is-narrow">Ready</th>
							<th>Name</th>
							<th className="is-narrow">Faction</th>
						</tr>
					</thead>
					<tbody>
						<tr className="">
							<td><span className="tag is-success">Ready</span></td>
							<td>AF</td>
							<td>
								<div className="select">
									<select>
										<option selected>Arm</option>
										<option>Core</option>
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td><span className="tag is-success">Ready</span></td>
							<td>Gajop</td>
							<td>
								<div className="select">
									<select>
										<option>Arm</option>
										<option selected>Core</option>
									</select>
								</div>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="3">
								<button className="button is-fullwidth">
								    <span className="icon">
										<i className="fas fa-user-plus"></i>
									</span>
									<span>Join AF's team</span>
								</button>
							</td>
						</tr>
					</tfoot>
				</table>
				<h2 className="subtitle">IceXuicks Team</h2>
				<table className="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th className="is-narrow">Ready</th>
							<th>Name</th>
							<th className="is-narrow">Faction</th>
						</tr>
					</thead>
					<tbody>
						<tr className="">
							<td><span className="tag is-success">Ready</span></td>
							<td>IceXuick</td>
							<td>
								<div className="select">
									<select>
										<option selected>Arm</option>
										<option>Core</option>
									</select>
								</div>
							</td>
						</tr>
						<tr>
							<td><span className="tag is-success">Ready</span></td>
							<td>Doo</td>
							<td>
								<div className="select">
									<select>
										<option>Arm</option>
										<option selected>Core</option>
									</select>
								</div>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="3">
								<button className="button is-fullwidth">
								    <span className="icon">
										<i className="fas fa-user-plus"></i>
									</span>
									<span>Join IceXuick's team</span>
								</button>
							</td>
						</tr>
					</tfoot>
				</table>
				<h2 className="subtitle">Spectators</h2>
				<table className="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						<tr className="">
							<td>SuperNoob</td>
						</tr>
						<tr>
							<td>Floris</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>
								<button className="button is-fullwidth">
								    <span className="icon">
										<i className="fas fa-binoculars"></i>
									</span>
									<span>Become a Spectator</span>
								</button>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className="column is-one-quarter">
				<div className="card">
					<div className="card-image">
						<figure className="image is-4by3">
							<img src={url} alt="Minimap" />
						</figure>
					</div>
					<div className="card-content">
						<div className="media">
							<div className="media-left">
								<p className="title is-4">Red Comet</p>
							</div>
							<div className="media-content">
								<button className="button is-small">Change</button>
							</div>
						</div>
					</div>
				</div>
				<hr/>
				<div className="box">
					<div className="field">
						<div className="control">
							<div className="select">
								<select>
									<option selected>Random start position</option>
									<option>Choose in game</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<div className="control">
							<div className="select">
								<select>
									<option selected>Destroy Enemy Commanders</option>
									<option>Destroy all units</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div className="box is-paddingless">
					<div className="box">
						<span className="tag">Chat goes here</span>
					</div>

					<div className="field has-addons">
						<div className="control">
							<input className="input" type="text" placeholder="Say something nice" />
						</div>
						<div className="control">
							<a className="button">
								Send
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="buttons field is-right is-grouped has-addons">
			<button className="button">Leave</button>
			<button className="button">Ready</button>
			<button className="button is-primary">Start Game</button>
		</div>
	</>;
}

export default Battle;
