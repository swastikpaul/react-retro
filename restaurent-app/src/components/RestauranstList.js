import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit , faTrash} from '@fortawesome/free-solid-svg-icons'

class RestauranstList extends Component {

    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/restro").then((response) => {
            response.json().then((result) => {                
                this.setState({ list: result })
            })
        })
    }

    delete(id){
        if (window.confirm('Click to delete id: '+id)) {
            fetch("http://localhost:3000/restro/"+id, {
                method: "DELETE",            
            }).then((result) => {
                result.json().then((resp) => {
                    alert('Record Deleted successfully!')
                    window.location.reload();
                })
            })
        }       
    }

    render() {
        return (

            <div>

                <h1>Restaurans List</h1>{
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sr No. </th>
                                        <th>ID</th>
                                        <th>Menu</th>
                                        <th>Rating</th>
                                        <th>Price</th>
                                        <th>Opration</th>
                                        <th>Delete Here</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            
                                            <tr>
                                                <th>{i+1}</th>  
                                                <th>{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.food}</td>
                                                <td>{item.Price}</td>
                                                <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color='blue'/></Link></td>
                                                <td> <Link onClick={() => {this.delete(item.id)}}><FontAwesomeIcon icon={faTrash} color='red'/></Link></td>
                                            </tr>
                                        )
                                    }
                               
                                </tbody>
                            </Table>
                        </div>
                        : <p>please wait...</p>
                    }
            </div>
        );
    }
}
export default RestauranstList;