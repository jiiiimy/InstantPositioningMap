import React, {Component} from 'react';

class MainArea extends Component {
	render() {
		return (
			<div className="mainArea">
				<div className="container _table">
					<div className="contents">
						<div className="table _column">
							<div className="table _c_delete">
								<div className="r_delete">
								</div>
								<div className="c_delete">
								</div>
								<div className="c_delete" v-for="(ch, index) in columnHead">
									<span className="_btn gtm-delete-column"><span className="_minus gtm-delete-column"></span></span>
								</div>
								<div className="c_add" v-if="columnHead.length < 5">
									<span className="_btn gtm-add-column"><span className="_plus gtm-add-column">+</span></span>
								</div>
							</div>
							<div className="table _head">
								<div className="r_delete">
									<span className="_btn"><span className="_minus"></span></span>
								</div>
								<div className="cell _dead">
									<p>powerd by InstantTable</p>
								</div>
								<div className="cell _c_head" v-for="(ch, index) in  columnHead">
									<input className="_textarea" v-model="ch.text" />
								</div>
							</div>
						</div>
						<div className="table _row" v-for="(r, index) in row">
							<div className="r_delete">
								<span className="_btn gtm-delete-row"><span className="_minus gtm-delete-row"></span></span>
							</div>
							<div className="table _r_head" v-for="(rd, index) in r">
								<div className="cell">
									<input className="_textarea" v-model="rd.text" />
								</div>
							</div>
						</div>
						<div className="r_add" v-if="row.length < 7">
							<span className="_btn gtm-add-row"><span className="_plus gtm-add-row">+</span></span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default MainArea;