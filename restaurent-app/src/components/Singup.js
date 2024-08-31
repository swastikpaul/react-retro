import React, { useState} from 'react';
import './style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate} from 'react-router-dom';
function Singup() {
    const [id, idchange] = useState('');
    const [name, namechange] = useState('');
    const [password, passwordchange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [country, countrychange] = useState('');
    const [address, addresschange] = useState('');
    const [gender, genderchange] = useState('');

    const navigate=useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, phone, country, address, gender };
        // console.log(regobj)
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success('Register successfully')
            navigate('/login')
        }).catch((err) => {
            toast.err('Failed :' +err.massage);
        })
    }

    return (
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handlesubmit}>
                <div className='card'>
                    <div className='header'>
                        <h1 >User Registration</h1>
                    </div>
                    <div className='card-body'>

                        <div className='col-lg-9'>
                            <div className='form-group'>
                                <label>User Name<span className='errmsg'>*</span></label>
                                <input value={id} onChange={e => idchange(e.target.value)} className='form-control'></input>

                                <label>Password<span className='errmsg'>*</span></label>
                                <input value={password} onChange={e => passwordchange(e.target.value)} type='password' className='form-control'></input>

                            </div>
                            <div className='form-group'>
                                <label>Full Name<span className='errmsg'>*</span></label>
                                <input value={name} onChange={e => namechange(e.target.value)} className='form-control'></input>
                            </div>
                            <div className='form-group'>
                                <label>Email<span className='errmsg'>*</span></label>
                                <input value={email} onChange={e => emailchange(e.target.value)} className='form-control'></input>
                            </div>
                            <div className='form-group'>
                                <label>Phone No.<span className='errmsg'>*</span></label>
                                <input value={phone} onChange={e => phonechange
                                    (e.target.value)} className='form-control'></input>
                            </div>
                            <div className='form-group'>
                                <label>Country<span className='errmsg'>*</span></label>
                                <select value={country} onChange={e => countrychange(e.target.value)} class="form-select" aria-label="Default select example">
                                    <option selected>India</option>
                                    <option value="singapur">Sinagapur</option>
                                    <option value="us">United State</option>
                                    <option value="usa">USA</option>
                                </select>

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                                    <textarea value={address} onChange={e => addresschange(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="form-check">
                                    <input class="app-check" type="radio" value={gender} onChange={e => genderchange(e.target.value)} name="gender" id="exampleRadios1" />
                                    <label> Male &nbsp; &nbsp; &nbsp;</label>

                                    <input class="app-check" type="radio" value={gender} onChange={e => genderchange(e.target.value)} name="gender" id="exampleRadios2" />
                                    <label> Female </label>

                                </div>
                            </div>

                        </div>


                    </div>


                    <button className='register' type="submit" class="btn btn-primary">Register</button>




                </div>

            </form>
        </div>
    );
}

export default Singup;