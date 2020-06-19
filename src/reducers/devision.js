import { SUBDIVISION, BROADENING } from '../actions'

const initialize = {
	value: 1,
	dataStyle: '_data _'+1,
	btnSubStyle: 'block',
	btnBrdStyle: 'none' 
}
export default (state = initialize, action) => {
	switch (action.type) {
		case SUBDIVISION:
			if (state.value < 16 ) {
				return {
					value: state.value * 2,
					dataStyle: '_data _' + state.value * 2,
					btnSubStyle: 'block',
					btnBrdStyle: 'block' 
				}	
			}else{
				return {
					value: state.value,
					dataStyle: '_data _' + state.value,
					btnSubStyle: 'none',
					btnBrdStyle: 'block' }
			}
		case BROADENING:
			if (state.value > 1) {
				return {
					value: state.value / 2,
					dataStyle: '_data _' + state.value / 2,
					btnSubStyle: 'block',
					btnBrdStyle: 'block'
				}
			} else {
				return {
					value: state.value,
					dataStyle: '_data _' + state.value,
					btnSubStyle: 'block',
					btnBrdStyle: 'none'
				}
			}
		default:
			return state
	}
}