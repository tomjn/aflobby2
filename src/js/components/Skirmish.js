const Skirmish = () => {
	return <>
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
	</>;
}

export default Skirmish;
