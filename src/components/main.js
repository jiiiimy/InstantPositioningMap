import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subdivision, broadening } from '../actions'

class MainArea extends Component {
	render() {
		const props = this.props
		let cell = [];
		for (let i = 0; i < props.devision; i++) {
			cell.push(
				<div className={props.dataStyle} key={i}>
					<input className="_input" type="text" />
				</div>)
		}
		return (
			<div className="mainArea">
				<div className="container _p-map">
					<div className="contents">
						<div className="wrap">
							<div className="box _button">
								<div className="_frame">
									<button className={props.btnSubStyle} onClick={props.subdivision}>セルを細かく</button>
								</div>
								<div className="_frame">
									<button className={props.btnBrdStyle} onClick={props.broadening}>セルを大きく</button>
								</div>
							</div>
							<div className="box _map">
								<div className="area _maplabel _tb">
									<input className="_input" type="text" placeholder="ラベルを入力"/>
								</div>
								<div className="area _map">
									<div className="area _maplabel _rl">
										<input className="_input" type="text" placeholder="ラベルを入力" />
									</div>
									<div className="area _p-map">
										<div className="quadrants _first">
											{cell}
										</div>
										<div className="quadrants _second">
											{cell}
										</div>
										<div className="quadrants _third">
											{cell}
										</div>
										<div className="quadrants _fourth">
											{cell}
										</div>
									</div>
									<div className="area _maplabel _rl">
										<input className="_input" type="text" placeholder="ラベルを入力" />
									</div>
								</div>
								<div className="area _maplabel _tb">
									<input className="_input" type="text" placeholder="ラベルを入力" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	devision: state.devision.value,
	dataStyle: state.devision.dataStyle,
	btnSubStyle: state.devision.btnSubStyle,
	btnBrdStyle: state.devision.btnBrdStyle
 })
const mapDispatchToProps = dispatch => ({
	subdivision: () => dispatch(subdivision()),
	broadening: () => dispatch(broadening())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainArea);