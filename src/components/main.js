import React, {Component} from 'react';


class MainArea extends Component {
	render() {const list = [];
		const data = [
			{ name: 'hoge' },
			{ name: 'nani' },
			{ name: 'nani' },
			{ name: 'nani' }
		]
		for (let i = 0; i < data.length; i++) {
			list.push(
				<div className="_data" key={i}>
					<input className="_input" type="text" placeholder="hoge" />
				</div>)
		}
		return (
			<div className="mainArea">
				<div className="container _p-map">
					<div className="contents">
						<div className="wrap">
							<div className="box _button">
								<button id="devideLarge">セルを大きく</button>
								<button id="devideSmall">セルを細かく</button>
							</div>
							<div className="box _map">
								<div className="area _maplabel _tb">
									<input className="_input" type="text" placeholder="上のラベル"/>
								</div>
								<div className="area _map">
									<div className="area _maplabel _rl">
										<input className="_input" type="text" placeholder="左のラベル" />
									</div>
									<div className="area _p-map">
										<div className="quadrants _first">
											{/* {list} */}
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
				</div>
			</div>
		)
	}
}

export default MainArea;