import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, } from 'react-bootstrap'
export default class RestMenu extends Component {
    constructor(props) {
        super(props);

        this.onClickrestMenu = this.onClickrestMenu.bind(this);
        

        this.state = {
            rest_name : '',
            rest_cuisine: '',
            rest_rating: '',
            rest_menu: '',
            rest_cost: '',
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
                    rest_file: response.data.rest_file
                })
                //url = rest_menu
            })
            .catch(function(error) {
                console.log(error)
            })
                
    } 
    

    onClickrestMenu(){
        console.log(this)
        console.log('menu link clicked')
    }

    getLink() {
        return this.state.rest_menu 
        
    }

    render(){
        
        return(
            <div>
                <Button href = {this.getLink()} variant="secondary" size="lg" block>
                        Click Here to View {this.state.rest_name} Menu on Their Website
                </Button> 
                <img 
                    src={this.state.rest_file} class = "center"
                    
                
                />
                <Button href = {"/dir/"+this.props.match.params.id} variant="secondary" size="lg" block>
                        Click Here to get Directions to {this.state.rest_name} 
                </Button> 
            </div>
        );
    }
   
}