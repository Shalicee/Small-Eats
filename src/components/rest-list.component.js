import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Rest = props => (
    <tr>
        <td className={props.rest.rest_completed ? 'completed' : ''}>{props.rest.rest_name}</td>
        <td className={props.rest.rest_completed ? 'completed' : ''}>{props.rest.rest_cuisine}</td>
        <td className={props.rest.rest_completed ? 'completed' : ''}>{props.rest.rest_cost}</td>
        <td className={props.rest.rest_completed ? 'completed' : ''}>{props.rest.rest_rating}</td>
        <td> 
            <Link to={"/menu/"+props.rest._id}>Menu</Link>
        </td>
        <td>
            <Link to={"/dir/"+props.rest._id}>Directions</Link>
        </td>
        <td>
            <Link to={"/edit/"+props.rest._id}>Update</Link>
        </td>
    </tr>
)

export default class restsList extends Component {



    
    constructor(props) {
        super(props);
        this.state = {rests: [], search: ''};
    }

   display() {

    return (
            <div>
                <h3>Local Restaurants in the area:</h3>
              
                <table className="table table-striped" style={{ marginTop: 0 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cuisine</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Menu</th>
                            <th>Directions</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.restList() }
                    </tbody>
                </table>
            </div>
        );
    };
    
    toolBar = () => {
        

        
        const onInput = (e) => {
            //console.log(e.target.value);
            this.setState({search: e.target.value})
        }

        const BarStyling = {width:"69.45rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
        return (
        <div>
          <input 
           style={BarStyling}
           key="random1"
           placeholder={"Search for Restaurants"}
           value={this.state.search}
           onChange={onInput}
          />
        </div>
          );
    };
    restList() {
        return this.state.rests.filter((element) => {
            return element.rest_name.toLowerCase().includes(this.state.search.toLowerCase()) || element.rest_cuisine.toLowerCase().includes(this.state.search.toLowerCase()) || element.rest_rating >= this.state.search || element.rest_cost == this.state.search;
        })
        .map(function(currentrest, i) {
            return <Rest rest={currentrest} key={i} />;
        });
    }
        
    

    componentDidMount() {
        axios.get('http://localhost:4000/rests/')
            .then(response => {
                this.setState({rests: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/rests/')
        .then(response => {
            this.setState({rests: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }


    render() {
        return (
            <div>
                <> {this.toolBar()} </>
                <> {this.display()} </>
            </div>
        ); 
    }
}

