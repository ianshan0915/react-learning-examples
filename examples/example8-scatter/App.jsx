import React, { Component } from 'react';
import MapGL from "react-map-gl";
import DeckGLOverlay from './DeckglOverlay';
import TestPanel from "./TestPanel";
import './App.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaWFuc2hlbiIsImEiOiJjamZucWMydXcwOThqMzNvOWtobnVtanQ3In0.SmBxq_Zue3IYNVAelutVDg';
const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];
const DATA_URL =
  'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/scatterplot/manhattan.json';

  class App extends Component {
      constructor(props) {
          super(props);
          this.state = {
              viewport: {
                  ...DeckGLOverlay.defaultViewport,
                  width: 0,
                  height: 0
              },
              data: null
          };
          
          fetch(DATA_URL)
            .then(resp => resp.json())
            .then(data => this.setState({data}))
      }
    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
    }
    
    _resize = () => {
        this._onViewportChange({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    _onViewportChange = viewport => {
        this.setState({
            viewport: {...this.state.viewport, ...viewport}
        });
    };

    render() {
        const {viewport, data} = this.state;
        
        return (
            <MapGL
                {...viewport}
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN} >
                <DeckGLOverlay
                    viewport={viewport}
                    data={data}
                    maleColor={MALE_COLOR}
                    femaleColor={FEMALE_COLOR}
                    radius={30}
                />                
                <TestPanel />
            </MapGL>
        );
    }
}

export default App;