import React from 'react'
import {compose, withProps, withStateHandlers} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"


const MapInCreateEvents = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({isOpen}) => () => ({
            isOpen: !isOpen,
        })
    }),
    withProps({
        googleMapURL: "https://maps.google.cn/maps/api/js?key=AIzaSyADXRPfT4-ecgGNiq6mNJ0GuU7HjguF4MA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: "700px"}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
        const {mapPorps} = props
        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{lat: 31.23691, lng: 121.50109}}
                //scrollwheel={true}　 //是否允许滚轮滑动进行缩放
            >
                {
                    mapPorps && mapPorps.length && mapPorps.map((mark, index) => {
                        return (
                            <Marker
                                key={index}
                                position={mark.position}
                                //title={mark.title}
                                onClick={() => props.onToggleOpen(index)}
                                animation={2}
                                //icon={zjj}
                                draggable={true}
                            >
                               {/* <InfoWindow
                                    // options={{ closeBoxURL: ``, enableEventPropagation: true }}
                                    // position={mark.position}
                                    // onCloseClick={() => props.onToggleOpen(index)}
                                >
                                    {mark.title}
                                </InfoWindow>*/}
                            </Marker>
                        )
                    })
                }
            </GoogleMap>
        )
    }
)


export default MapInCreateEvents

