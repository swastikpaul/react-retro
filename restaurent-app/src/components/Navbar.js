import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Foody Restro</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/list">List</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/create"> Create</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/chart"> Chart</Link>
                            </li>

                        </ul>

                        <button class="btn btn-primary" type="submit"> <Link class="nav-link" to="/signup">Registration</Link></button>
                        <button class="btn btn-primary" type="submit"> <Link class="nav-link" to="/login">Login</Link></button>

                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;