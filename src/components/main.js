import React, {Component} from 'react';

class MainArea extends Component {
	render() {
		return (
			<div className="mainArea">
				<div className="container _p-map">
					<div className="contents">
						<div className="area _maplabel _tb">
							<input className="_input" type="text" placeholder="上のラベル"/>
						</div>
						<div className="area _map">
							<div className="area _maplabel _rl">
								<input className="_input" type="text" placeholder="左のラベル" />
							</div>
							<div className="area _p-map">
								<div className="quadrants _first">
									<div className="_data">
										<input className="_input" type="text" placeholder="値" />
									</div>
								</div>
								<div className="quadrants _second">
									<div className="_data">
										<input className="_input" type="text" placeholder="値" />
									</div>
								</div>
								<div className="quadrants _third">
									<div className="_data">
										<input className="_input" type="text" placeholder="値" />
									</div>
								</div>
								<div className="quadrants _fourth">
									<div className="_data">
										<input className="_input" type="text" placeholder="値" />
									</div>
								</div>
							</div>
							<div className="area _maplabel _rl">
								<input className="_input" type="text" placeholder="右のラベル" />
							</div>
						</div>
						<div className="area _maplabel _tb">
							<input className="_input" type="text" placeholder="下のラベル" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default MainArea;