import { combineReducers } from 'redux';
import HourSlotReducer from './HourSlotReducer';

const rootReducers = combineReducers({
	slot: HourSlotReducer
})

export default rootReducers;