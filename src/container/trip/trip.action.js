import {get} from '../../component/http/http'

export const GET_TRIP = 'GET_TRIP'
export const GET_TRIP_DAILY = 'GET_TRIP_DAILY'
export const GET_CITY_PLACES = 'GET_CITY_PLACES'
export const ADD_TRIP_EVENTS = 'ADD_TRIP_EVENTS'


export function getTrip() {
    return get('trip/tripPlan', GET_TRIP)
}

export function getTripDaily(day) {
    //return get('trip/tripDaily', GET_TRIP_DAILY)
    return get(`trip/${day}`, GET_TRIP_DAILY)
}

export function getCityPlaces() {
    return get('city/shanghai', GET_CITY_PLACES)
}

export function addTripEvents(payload) {
    return dispatch=>(dispatch({type:'ADD_TRIP_EVENTS)',payload}))
}


