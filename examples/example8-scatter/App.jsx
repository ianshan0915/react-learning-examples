import React, { Component } from 'react';
import MapGL from "react-map-gl";
import DeckGLOverlay from './DeckglOverlay';
import SiderBar from "./SiderBar";
import './App.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaWFuc2hlbiIsImEiOiJjamZucWMydXcwOThqMzNvOWtobnVtanQ3In0.SmBxq_Zue3IYNVAelutVDg';
// const MALE_COLOR = [0, 128, 255];
// const FEMALE_COLOR = [255, 0, 128];
const COLORS = [
    [0, 255, 0],
    [200, 67, 20],
    [255, 0, 0],
];
const DATA_URL =
  'http://35.234.93.185:8080/stations';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                ...DeckGLOverlay.defaultViewport,
                width: 0,
                height: 0
            },
            datMap: null,
            datPanel: null
        };
          
        fetch(DATA_URL)
        .then(resp => resp.json())
        .then(data => {
            const datMap=data.map(d=> [d.LGTD, d.LTTD, COLORS[d.num_label]]);
            const sortedDat = data.sort((a,b) => b.num_label - a.num_label);
            this.setState({datMap: datMap, datPanel: sortedDat});
        });
      }
    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
        setInterval(() => {
            fetch(DATA_URL)
            .then(resp => resp.json())
            .then(data => {
                const datMap=data.map(d=> [d.LGTD, d.LTTD, COLORS[d.num_label]]);
                const sortedDat = data.sort((a,b) => b.num_label - a.num_label);
                this.setState({datMap: datMap, datPanel: sortedDat});
            });
        }, 60000)
    }
    
    _resize = () => {
        this._onViewportChange({
            width: window.innerWidth-300,
            height: window.innerHeight
        });
    };
    _onViewportChange = viewport => {
        this.setState({
            viewport: {...this.state.viewport, ...viewport}
        });
    };

    render() {
        const {viewport, datMap, datPanel} = this.state;

        return (
            <div>
                <div className="map">
                    <MapGL
                        {...viewport}
                        onViewportChange={this._onViewportChange}
                        mapboxApiAccessToken={MAPBOX_TOKEN} >
                        <DeckGLOverlay
                            viewport={viewport}
                            data={datMap}
                            // maleColor={MALE_COLOR}
                            // femaleColor={FEMALE_COLOR}
                            radius={30}
                        />
                    </MapGL>
                </div>
                <SiderBar stations={datPanel}/>
            </div>
        );
    }
}

export default App;