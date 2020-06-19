import { SUBDIVISION, BROADENING } from '../actions'

const initialize = { devision: 1 }
export default (state = initialize, action) => {
	switch (action.type) {
		case SUBDIVISION:
			return { division: state.devision * 2 }
		case BROADENING:
			return { division: state.devision / 2 }
		default:
			return state
	}
}