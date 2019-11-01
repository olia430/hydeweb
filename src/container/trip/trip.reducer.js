import {createReducer} from 'redux-create-reducer'

import {
    GET_TRIP,
    GET_TRIP_DAILY,
    GET_CITY_PLACES,
    ADD_TRIP_EVENTS,
} from './trip.action'

const initState = {
    cityList: [],
    tripDaily: [],
    cityStations: [],
}

const handlers = {

    [GET_TRIP]: (state, action) => {
        initState.cityList = action.payload.data.list
        return {...state, ...initState}
    },

    [GET_TRIP_DAILY]: (state, action) => {
        initState.tripDaily = action.payload.data.data.event_list
        return {...state, ...initState}
    },

    [GET_CITY_PLACES]: (state, action) => {
        initState.cityStations = action.payload.data.data
        return {...state, ...initState}
    },

    [ADD_TRIP_EVENTS]: (state, action) => {
        initState.tripDaily.push(action.payload)
        return {...state, ...initState}
    },

}

export default createReducer(initState, handlers)

