import { useContext, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import './login.css';
import axios from 'axios';
// import { BasicAuthentication, loginAPI } from "../API/APIService";
import VpnKeySharpIcon from '@mui/icons-material/VpnKeySharp';
import { LoadingButton } from "@mui/lab";
import Link from '@mui/material/Link';
import { userContext } from "../Context/Context";
// import { RepeatOneSharp } from "@mui/icons-material";


// function ShowSuccess(istrue) {


//     if (istrue) {
    //         return <h1>Authentication Successfull!</h1>
    //     }
    //     return null;
    // }
    
    
    // function ShowError(istrue) {
        //     if (istrue) {
            //         return <h1>Authentication Failed!</h1>
            //     }
            //     return null;
            // }
        
            function Login() {
                const navigate = useNavigate();
                const [username, setUsername] = useState('');
                const [password, setPassword] = useState('');
                const [success, setSuccess] = useState(false);
                const [error, setError] = useState(false);
                
                const user = useContext(userContext);
                
                const handleChangename = (event) => {
                    setUsername(event.target.value); // Update the state with the new value
                  };

                      
            function successMessage(){
        
            }
            
                
                const handleChangepassword = (event) => {
                    setPassword(event.target.value); // Update the state with the new value
                  };


    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('Login');

    const handleLoginSubmit = (event) =>{
        event.preventDefault(); // Prevent default form submission behavior
        console.log(event);
        const logindata = {
            email:username,
            pass:password
        }
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          // Axios POST request
        //   const response = axios.get('https://jsonplaceholder.typicode.com/posts');
          axios.post('http://localhost:8000/login/',logindata)
          .then(response=>{
            // user.setUser(response);
            // console.log("response.data = "+response);
            // const b = response.data === "Wrong Password";
            // console.log(response.data === "Wrong Password");
            if(response.data.comment == 0){
                Swal.fire({
                    title: "Invalid Credentials",
                    text: "Incorrect username or password",
                    icon: "error"
                  });
            } else {

                navigate('/restaurantlist',{state:response.data});
            }

           
          })
          .catch(error=>{
            console.log(error);
          });

    
          // Handle the server's response
      
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <div style={{ height: '100vh' }} className="outerdiv">
                <div className="login_container">
                    <div >
                        <h1 className="heading">
                            Login
                        </h1>
                    </div>



                   


                    <div className="username">
                        <TextField className="inptxt" id="outlined-basic 2" label="User Name" variant="outlined" onChange={handleChangename} value={username} required />
                    </div>
                    <div className="password">
                        <TextField className="inptxt" id="outlined-basic" type="password" label="Password" variant="outlined" onChange={handleChangepassword} value={password} required />

                    </div>
                    <div>
                        <LoadingButton
                            color="primary"
                            type='submit'
                            loading={loading}
                            loadingPosition="start"
                            variant="contained"
                            startIcon={<VpnKeySharpIcon />}
                            id='regbtn'
                            onClick={()=>{successMessage()}}
                        >
                            <span>{text}</span>
                        </LoadingButton>

                        {/* <Button className="inp" variant='contained' color='primary' onClick={Authenticate} type="submit">Login</Button> */}
                    </div>

                    <div>
                        {/* <Link style={{ "margin": "30px", "cursor": "pointer" }} className="formlinks" onClick={() => { navigate("/register") }}> Register </Link> */}
                    </div>


                </div>
            </div>
        </form>
    );
}






export default Login;