import React, {Component} from 'react';
import axios from 'axios';

export default class Createrest extends Component {

    constructor(props) {
        super(props);

        this.onChangerestName  = this.onChangerestName.bind(this);
        this.onChangerestCuisine = this.onChangerestCuisine.bind(this);
        this.onChangerestRating = this.onChangerestRating.bind(this);
        this.onChangerestMenu = this.onChangerestMenu.bind(this);
        this.onChangerestCost = this.onChangerestCost.bind(this);
        this.onChangerestDir = this.onChangerestDir.bind(this);
        this.onChangerestLat = this.onChangerestLat.bind(this);
        this.onChangerestLong = this.onChangerestLong.bind(this);
        this.onChangerestFile = this.onChangerestFile.bind(this);



        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rest_name : '',
            rest_cuisine: '',
            rest_rating: '',
            rest_menu: '',
            rest_cost: '',
            rest_dir: '',
            rest_lat: '',
            rest_long: '',
            rest_file: '',
            rest_completed: false
        }
    }

    onChangerestName (e) {
        this.setState({
            rest_name : e.target.value
        });
    }

    onChangerestCuisine(e) {
        this.setState({
            rest_cuisine: e.target.value
        });
    }

    onChangerestRating(e) {
        this.setState({
            rest_rating: e.target.value
        });
    }   
    onChangerestMenu(e) {
        this.setState({
            rest_menu: e.target.value
        });
    }

    onChangerestCost(e) {
        this.setState({
            rest_cost: e.target.value
        });
    }

    onChangerestDir(e) {
        this.setState({
            rest_dir: e.target.value
        });
    }
    onChangerestLat(e) {
        this.setState({
            rest_lat: e.target.value
        });
    }
    onChangerestLong(e) {
        this.setState({
            rest_long: e.target.value
        });
    }
    onChangerestFile(e) {
        this.setState({
            rest_file: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`rest Name : ${this.state.rest_name }`);
        console.log(`rest Cuisine: ${this.state.rest_cuisine}`);
        console.log(`rest Rating: ${this.state.rest_rating}`);
        console.log(`rest Menu: ${this.state.rest_menu}`);
        console.log(`rest Cost: ${this.state.rest_cost}`);
        console.log(`rest Directions: ${this.state.rest_dir}`);



        const newrest = {
            rest_name : this.state.rest_name ,
            rest_cuisine: this.state.rest_cuisine,
            rest_rating: this.state.rest_rating,
            rest_menu: this.state.rest_menu,
            rest_cost: this.state.rest_cost,
            rest_dir: this.state.rest_dir,
            rest_long: this.state.rest_long,
            rest_lat: this.state.rest_lat,
            rest_file: this.state.rest_file
        }

        axios.post('http://localhost:4000/rests/add', newrest)
            .then(res => console.log(res.data));


        this.setState({
            rest_name : '',
            rest_cuisine: '',
            rest_rating: '',
            rest_menu: '',
            rest_cost: '',
            rest_dir: '',
            rest_lat: '',
            rest_long: '',
            rest_file: '',
            rest_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Restaurant</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Restaurant Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_name }
                                onChange={this.onChangerestName }
                                />
                    </div>
                    <div className="form-group">
                        <label>Cuisine: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_cuisine}
                                onChange={this.onChangerestCuisine}
                                />
                    </div>
                    <div className="form-group">
                        <label>Rating: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_rating}
                                onChange={this.onChangerestRating}
                                />
                    </div>
                    <div className="form-group">
                        <label>Menu Image URL: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_file}
                                onChange={this.onChangerestFile}
                                />
                    </div>
                    <div className="form-group">
                        <label>Directions: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_dir}
                                onChange={this.onChangerestDir}
                                />
                    </div>
                    <div className="form-group">
                        <label>Latitude: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_lat}
                                onChange={this.onChangerestLat}
                                />
                    </div>
                    <div className="form-group">
                        <label>Longitutde: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.rest_long}
                                onChange={this.onChangerestLong}
                                />
                    </div>
                    <div className="form-group">
                        <label>Cost: </label>
                        <br></br>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="costLevels"
                                    id="cost$"
                                    value="$"
                                    checked={this.state.rest_cost==='$'}
                                    onChange={this.onChangerestCost}
                                    />
                            <label className="form-check-label">$</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="costLevels"
                                    id="cost$$"
                                    value="$$"
                                    checked={this.state.rest_cost==='$$'}
                                    onChange={this.onChangerestCost}
                                    />
                            <label className="form-check-label">$$</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="costLevels"
                                    id="cost$$$"
                                    value="$$$"
                                    checked={this.state.rest_cost==='$$$'}
                                    onChange={this.onChangerestCost}
                                    />
                            <label className="form-check-label">$$$</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="costLevels"
                                    id="cost$$$$"
                                    value="$$$$"
                                    checked={this.state.rest_cost==='$$$$'}
                                    onChange={this.onChangerestCost}
                                    />
                            <label className="form-check-label">$$$$</label>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Restaurant" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}