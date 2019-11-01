import {combineReducers} from "redux";

import location from './container/create/create.reducer'
import trip from './container/trip/trip.reducer'

export default combineReducers({
    location,
    trip
})