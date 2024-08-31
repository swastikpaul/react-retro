import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

const navigate=useNavigate();


    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()){
           
            fetch ("http://localhost:3000/login/"+username).then ((res)=>{
                return res.json();
            }).then ((resp)=>{
                console.log(resp)
                if(Object.keys(resp).length===0){
                    toast.error ('Please Enter Valid Username')
                }else{
                    if(resp.password===password){
                        toast.success('Login successfully')
                        navigate('/list')
                    }else{
                        toast.error ('Please Enter Valid Credetials')
                    }
                }
            }).catch((err)=>{
                toast.error('Login Faild due to :'+err.message);
                })
        }
    }
    const validate=()=>{
        let result=true;
        
        if(username ==='' || username===null){
            result=false;
        toast.warning('Please Enter Your Username');
         } if (password==='' || password ===null){
            result=false;
            toast.warning('Please Enter your Password');
         }
         return result; 
    }
    return (
        <form onSubmit={ProceedLogin} className="container">
                    <div className='card' style={{width:'40%',marginLeft:'30%' , backgroundColor :'gray' , marginTop:'5%'}}>
                 
                    <div className='header'>
            <h1>Login</h1>
           </div>
            <div style={{marginLeft: '10%', marginTop: "40px", marginRight:'10%' }}>
                <div class="mb-9">

                    <input class="form-control"  placeholder="Enter your User id" value={username} onChange={e=>usernameupdate(e.target.value)}/><br></br>
                </div>
                <div class="mb-3">

                    <input type="password" class="form-control"  placeholder="Enter your Password" value={password} onChange={e=>passwordupdate(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
            </div>
        </form>
    )
}

export default Login;