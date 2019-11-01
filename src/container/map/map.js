import React from 'react'
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Polyline, Marker} from "react-google-maps"

const Maps = compose(
    withProps({
        googleMapURL: "https://maps.google.cn/maps/api/js?key=AIzaSyADXRPfT4-ecgGNiq6mNJ0GuU7HjguF4MA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: document.documentElement.clientHeight}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
        const {mapPorps, defaultPosition, pathCoordinates} = props
        return (
            <GoogleMap
                defaultZoom={4}
                zIndex={1}
                defaultCenter={defaultPosition}
            >
                <Polyline
                    path={pathCoordinates}
                    options={{
                        strokeColor: '#00ffff',
                        strokeOpacity: 1,
                        strokeWeight: 2,
                        icons: [{
                            icon: "hello",
                            offset: '0',
                            repeat: '10px'
                        }],
                    }}
                />
                {
                    mapPorps && mapPorps.length && mapPorps.map((mark, index) => {
                        return (
                            <Marker
                                key={index}
                                position={mark.position}
                                title={mark.title}
                                animation={2}
                                draggable={true}
                            />
                        )
                    })
                }
            </GoogleMap>
        )
    }
)


export default Maps

