import {get} from '../../component/http/http'

export const GET_HOT = 'GET_HOT'
export const GET_AFRICA = 'GET_AFRICA'
export const GET_ASIA = 'GET_ASIA'
export const GET_EUROPE = 'GET_EUROPE'
export const GET_NORTH_AMERICA = 'GET_NORTH_AMERICA'
export const GET_SOUTH_AMERICA = 'GET_SOUTH_AMERICA'
export const GET_OCEANIA = 'GET_OCEANIA'
export const SAVE_TRIP = 'SAVE_TRIP'
export const CHANGE_MAP_CENTER = 'CHANGE_MAP_CENTER'
export const GET_NATION_LIST = 'GET_NATION_LIST'


export function getHot() {
    return get('location/hot', GET_HOT)
}

export function getAfrica() {
    return get('location/africa', GET_AFRICA)
}

export function getAsia() {
    return get('location/asia', GET_ASIA)
}

export function getEurope() {
    return get('location/europe', GET_EUROPE)
}

export function getNorthAmerica() {
    return get('location/northAmerica', GET_NORTH_AMERICA)
}

export function getSouthAmerica() {
    return get('location/southAmerica', GET_SOUTH_AMERICA)
}

export function getOceania() {
    return get('location/oceania', GET_OCEANIA)
}

//获取大洲/城市数据列表
export function getNationList(loc) {
    return get(`location/${loc}`, GET_NATION_LIST)
}

export function saveTrip(payload) {
    return dispatch=>(dispatch({payload,type:'SAVE_TRIP'}))
}

export function changeMapCenter(payload) {
    return dispatch=>(dispatch({payload,type:'CHANGE_MAP_CENTER'}))
}