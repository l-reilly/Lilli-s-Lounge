import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render(){
    return(
      <div>
           <Map google={this.props.google} zoom={14} initialCenter={{
               lat: 43.3623,
               lng:-5.8441
           }}
           style={{
               width: "70%",
               height: "300px"
           }}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

</Map>
      </div>
      
    );
  }
};
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDLlKkmlDGT6cd2Cw9uZfkEFt2YvkZwgyE")
  })(App)