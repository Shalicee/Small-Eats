import React, {Component} from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import { Button, } from 'react-bootstrap'
class RestDir extends Component {
    constructor(props) {
        super(props);

        this.onClickrestDir = this.onClickrestDir.bind(this);
 
        this.state = {
            rest_name : '',
            rest_cuisine: '',
            rest_rating: '',
            rest_menu: '',
            rest_cost: '',
            rest_dir: '',
            rest_lat: '',
            rest_long: '',
            rest_completed: false
        }
    }    
    
    componentDidMount() {
        axios.get('http://localhost:4000/rests/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    rest_name: response.data.rest_name,
                    rest_cuisine: response.data.rest_cuisine,
                    rest_rating: response.data.rest_rating,
                    rest_menu: response.data.rest_menu,
                    rest_cost: response.data.rest_cost,
                    rest_dir: response.data.rest_dir,
                    rest_lat: response.data.rest_lat,
                    rest_long: response.data.rest_long
                })
                
            })
            .catch(function(error) {
                console.log(error)
            })
                
    }

    onClickrestDir(){
       
        console.log(this)
        console.log('menu link clicked')
    }

    getLat(){
        return console.log(this.state.rest_lat)
    }
    getLong(){
        return this.state.rest_long
    }
    getLink() {
        return this.state.rest_dir 
    }
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
    };

    render(){

        const style = {
            width: '1111px',
            height: '500px'
            }
        const center = {
            lat: this.state.rest_lat,
            lng: this.state.rest_long
        }
        return(
            <div>
                <br />
                    <>
                    <Button href = {this.getLink()} variant="secondary" size="lg" block>
                        Click Here to Get Directions to {this.state.rest_name}
                    </Button> 
                </>
                <br />
                <Map google = {this.props.google}
                
                zoom = {15}
                initialCenter = {center}
                center = {center}

                style={style}>
                        <Marker
                        onClick={this.onMarkerClick}
                        position={{lat: this.state.rest_lat, lng: this.state.rest_long}} />
                            <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                            >
                        <div>
                            <h4>{this.state.rest_name}</h4>
                        </div>
                    </InfoWindow>  
                </Map>
                         
        </div >
        );
    }
   
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDZINRxcEDKX6i4lIJe91fZY_M7wWKeTtg'),
    version: 3.31
   }) (RestDir);
