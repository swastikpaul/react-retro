import React, { Component } from 'react';

class RestaurantUpdate extends Component {  

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

    update(){        
        const items = window.location.href.split("/")       
        fetch("http://localhost:3000/restro/"+items[items.length-1], {
            method: "Put",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert('Record updated successfully!')
                window.location.reload();
            })
        })       
    }  
   
    render() {
            return (
            <div>
                <h1>Restaurant  Update</h1>
                <div style={{width: "40%", marginLeft: '30%', marginTop: "70px"}}>                    
                    <input class="form-control form-control-lg" onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant name"/><br></br>
                    <input class="form-control form-control-lg" onChange={(event) => { this.setState({ food: event.target.value }) }} placeholder="Rating"/><br></br>
                    <input class="form-control form-control-lg" onChange={(event) => { this.setState({ Price: event.target.value }) }} placeholder="Pricing"/><br></br>

                    <button type="button" class="btn btn-primary"onClick={() => {this.update()}}>Update Restaurant </button>
                </div>              
            </div>
        );
    }
}
export default RestaurantUpdate;