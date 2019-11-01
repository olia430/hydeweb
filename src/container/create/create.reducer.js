import {createReducer} from 'redux-create-reducer'

import {
    GET_HOT,
    GET_AFRICA,
    GET_ASIA,
    GET_EUROPE,
    GET_NORTH_AMERICA,
    GET_SOUTH_AMERICA,
    GET_OCEANIA,
    SAVE_TRIP,
    CHANGE_MAP_CENTER,
    GET_NATION_LIST,
} from './create.action'

const initState ={
    hot: [],
    africa: [],
    asia: [],
    europe: [],
    northAmerica: [],
    southAmerica: [],
    oceania: [],
    trip: [],
    mapCenter:{lat:20,lng:110},
    nationList:[],
    markerArr:[],
}

const handlers = {

    [GET_HOT]: (state, action) => {
        initState.hot =  action.payload.data.data.list
        return {...state, ...initState}
    },
    [GET_AFRICA]: (state, action) => {
        initState.africa =  action.payload.data.data.list
        return {...state, ...initState}
    },
    [GET_ASIA]: (state, action) => {
        initState.asia =  action.payload.data.data.list
        return {...state, ...initState}
    },
    [GET_EUROPE]: (state, action) => {
        initState.europe =  action.payload.data.data.list
        return {...state, ...initState}
    },
    [GET_NORTH_AMERICA]: (state, action) => {
        initState.northAmerica =  action.payload.data.data.list
        return {...state, ...initState}
    },
    [GET_SOUTH_AMERICA]: (state, action) => {
        initState.southAmerica =  action.payload.data.data.list
        return {...state, ...initState}
    },
    [GET_OCEANIA]: (state, action) => {
        initState.oceania =  action.payload.data.data.list
        return {...state, ...initState}
    },
    [SAVE_TRIP]: (state, action) => {
        initState.trip =  action.payload
        return {...state, ...initState}
    },

    //储存地图中心点，移动地图
    [CHANGE_MAP_CENTER]: (state, action) => {
        initState.mapCenter =  action.payload
        return {...state, ...initState}
    },

    //储存国家/城市列表，设置marker
    [GET_NATION_LIST]: (state, action) => {
        const list = action.payload.data.data.list
        const markerArr = []

        list.map(item => {
            markerArr.push({
                position: {
                    lat: Number(item.lat),
                    lng: Number(item.lng),
                },
                title: item.catename
            })
        })
        initState.nationList =  list
        initState.markerArr =  markerArr

        return {...state, ...initState}
    },
}

export default createReducer(initState, handlers)

