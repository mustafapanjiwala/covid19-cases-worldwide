import React, { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule,
    ZoomableGroup
} from 'react-simple-maps';
import logo from '../MAP.png';
import { dataProcessing, drawerInfo } from '../data/DataProcessing';
import ReactTooltip from 'react-tooltip';
import '../styles/App.css';

const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = ({ stats }) => {
    const [position, setPosition] = useState({
        coordinates: [80, -50],
        zoom: 1
    });
    const [content, setContent] = useState('');

    function handleMoveEnd(position) {
        setPosition(position);
    }
    return (
        <div>
            <img src={logo} className="img" alt="Covid-19"></img>

            <ComposableMap
                className="mapContainer"
                data-tip=""
                projectionConfig={{ scale: 100, rotate: [-10, 0, 0] }}
            >
                <ZoomableGroup
                    zoom={position.zoom}
                    center={position.coordinates}
                    onMoveEnd={handleMoveEnd}
                >
                    <Sphere stroke="#3f434c" strokeWidth={0.5} />
                    <Graticule stroke="#3f434c" strokeWidth={0.5} />
                    <Geographies className="map" geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                let d = dataProcessing(stats, geo);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            console.log(d);
                                            setContent(drawerInfo(d));
                                        }}
                                        onMouseLeave={() => {
                                            setContent('');
                                        }}
                                        style={{
                                            default: {
                                                fill: '#D6D6DA',
                                                outline: 'none'
                                            },
                                            hover: {
                                                fill: '#F53',
                                                transition: 'all 250ms',
                                                outline: 'none'
                                            },
                                            pressed: {
                                                outline: 'none'
                                            }
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <ReactTooltip type="dark">{content}</ReactTooltip>
        </div>
    );
};

export default MapChart;
