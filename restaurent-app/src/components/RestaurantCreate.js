import React, { Component } from 'react';

class RestaurantCreate extends Component {
    
    constructor() 
    {
        super();
        this.state = {
            id: null,
            name: null,
            food: null,
            Price: null            
        }
    }

    create(){
        
        console.warn(this.state)
        fetch("http://localhost:3000/restro", {
            method: "Post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert('Record added successfully!')
                window.location.reload();
            })
        })       
    }
 
    render() {
        return (
            <div>
                <h1>Restaurant  Create</h1>
                <div style={{width: "40%", marginLeft: '30%', marginTop: "40px"}}>
                    <input class="form-control form-control-lg" onChange={(event) => { this.setState({ id: event.target.value }) }} placeholder="id"/><br></br>
                    <input class="form-control form-control-lg" onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Name"/><br></br>
                    <input class="form-control form-control-lg" onChange={(event) => { this.setState({ food: event.target.value }) }} placeholder="Rating"/><br></br>
                    <input class="form-control form-control-lg" onChange={(event) => { this.setState({ Price: event.target.value }) }} placeholder="Price"/><br></br>
                  
                    <button type="button" class="btn btn-primary"onClick={() => {this.create()}}>Add Restaurant </button>
                </div>
            </div>
        );
    }
}
export default RestaurantCreate;