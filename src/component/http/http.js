import axios from "axios";

export function get(url, type) {
    return dispatch => {
        axios.get(`http://192.168.1.163:9003/${url}`)
            .then(res => {
                let payload = res || {}
                if (res.status === 200) {
                    dispatch({type, payload})
                }
                return res
            })
    }
}