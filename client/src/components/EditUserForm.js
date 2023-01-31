import React, { useState } from 'react'
import { toast } from 'react-toastify'
import user from "../services/userService"
import axios from 'axios'

import "../styles/profile.css"

const EditUserForm = () => {
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPassword2, setNewPassword2] = useState("")
    const users = user.getCurrentUser().data
    const username = user.getCurrentUser()

    const handleForm = async (e) => {
        e.preventDefault()
        
       newPassword === "" && toast.warning("Password is required")
       newPassword !== newPassword2 && toast.warning("Passwords must match!")
        
       newUsername === "" && setNewUsername(user.getCurrentUser().username)
       newEmail === "" && setNewEmail(user.getCurrentUser().email)

       console.log(newPassword)

       fetch(`http://www.localhost:3000/user/edit/${user.getCurrentUser().email}`, 
        
       {method: 'PUT',
        headers: {
         'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: newUsername,
            email: newEmail
        }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data) && toast.info("Account information updated successfully")
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
     

    return (
       
        <>
            <h1 className='tituloSaludo'>Hello {username.username}</h1>
            <div>
                <h1 className='tituloRecomendaciones'>Here are your recent recommendations:</h1>
                <div className='ContainerProfile'>
                    
                        {users.reverse().map((e)=>(
                            <div className='cardProfile'>
                                <h3>Artist/Bands</h3>
                                <h4>1: {e.grupo1}</h4>
                                <h4>2: {e.grupo2}</h4>
                                <h3>Recommendations:</h3>
                                <h4> 1: {e.recomendacion1}</h4>
                                <h4> 2: {e.recomendacion2}</h4>
                                <h4> 3: {e.recomendacion3}</h4>
                            </div>
                        ))}
                </div>
                 
            </div>
            <div className='login-wrapper'>
            <h1 className='login-title'>Edit your information:</h1>
            <form className='inputbox loginForm'>
                <div className="inputbox">
                    <input autoComplete='true' type="text" id="username" name="username" onChange={(e) => setNewUsername(e.currentTarget.value)} />
                    <span>Username</span>
                    <i></i>
                </div>

                <div className="inputbox">
                    <input autoComplete='true' type="email" id="email" name="email" onChange={(e) => setNewEmail(e.currentTarget.value)} />
                    <span>Email</span>
                    <i></i>
                </div>

                <div className="inputbox">
                    <input autoComplete='true' type="password" id="password" name="password" onChange={(e) => setNewPassword(e.currentTarget.value)} />
                    <span>Password</span>
                    <i></i>
                </div>

                <div className="inputbox">
                    <input autoComplete='true' type="password" id="password2" name="password" onChange={(e) => setNewPassword2(e.currentTarget.value)} />
                    <span>Repeat password</span>
                    <i></i>
                </div>

                <button type="submit" onClick={(e) => handleForm(e)}>
                    Edit user
                </button>
            </form>
            
            </div>

        </>
    );
};

export default EditUserForm;