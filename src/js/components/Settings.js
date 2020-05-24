
const Settings = () => {
	return <>
		<h1 className="title">Settings</h1>
		<div className="box">
			<h2 className="subtitle">Graphics Options</h2>
			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Display mode</label>
				</div>
				<div className="field-body">
					<div className="field has-addons is-narrow">
						<p className="control">
							<button className="button">
								<span>Fullscreen</span>
							</button>
						</p>
						<p className="control">
							<button className="button is-info is-selected">
								<span>Borderless Window</span>
							</button>
						</p>
						<p className="control">
							<button className="button">
								<span>Windowed</span>
							</button>
						</p>
					</div>
				</div>
			</div>
			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Anti-Aliasing</label>
				</div>
				<div className="field-body">
					<div className="field has-addons is-narrow">
						<p className="control">
							<button className="button">
								<span>None</span>
							</button>
						</p>
						<p className="control">
							<button className="button">
								<span>1x</span>
							</button>
						</p>
						<p className="control">
							<button className="button">
								<span>2x</span>
							</button>
						</p>
						<p className="control">
							<button className="button is-info is-selected">
								<span>4x</span>
							</button>
						</p>
						<p className="control">
							<button className="button">
								<span>8x</span>
							</button>
						</p>
					</div>
				</div>
			</div>
			<div className="field is-horizontal">
			  <div className="field-label is-normal">
				<label className="label">Water Renderer</label>
			  </div>
				<div className="field-body">
					<div className="field has-addons is-narrow">
						<p className="control">
							<button className="button">
								<span>Basic</span>
							</button>
						</p>
						<p className="control">
							<button className="button is-info is-selected">
								<span>Reflective</span>
							</button>
						</p>
						<p className="control">
							<button className="button">
								<span>Dynamic</span>
							</button>
						</p>
					</div>
				</div>
			</div>
			<div className="field is-horizontal">
			  <div className="field-label is-normal">
				<label className="label">Particles</label>
			  </div>
				<div className="field-body">
					<div className="field has-addons is-narrow">
						<p className="control">
							<button className="button">
								<span>Low</span>
							</button>
						</p>
						<p className="control">
							<button className="button is-info is-selected">
								<span>Medium</span>
							</button>
						</p>
						<p className="control">
							<button className="button">
								<span>High</span>
							</button>
						</p>
					</div>
				</div>
			</div>
			<h2 className="subtitle">Engine Location</h2>
			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Spring Location</label>
				</div>
				<div className="field-body">
					<div className="field is-narrow">
						<div className="control">
							<div className="file has-name">
								<label className="file-label">
									<input className="file-input" type="file" name="resume" />
									<span className="file-cta">
										<span className="file-icon">
											<i className="fas fa-upload"></i>
										</span>
										<span className="file-label">
											Choose
										</span>
									</span>
									<span className="file-name">
										C:\spring\spring.exe
									</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="field is-horizontal">
				<div className="field-label is-normal">
					<label className="label">Unitsync Location</label>
				</div>
				<div className="field-body">
					<div className="field is-narrow">
						<div className="control">
							<div className="file has-name">
								<label className="file-label">
									<input className="file-input" type="file" name="resume" />
									<span className="file-cta">
										<span className="file-icon">
											<i className="fas fa-upload"></i>
										</span>
										<span className="file-label">
											Choose
										</span>
									</span>
									<span className="file-name">
										C:\spring\unitsync.dll
									</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
}

export default Settings;
