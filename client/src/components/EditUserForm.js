import React, { useState } from 'react'
import { toast } from 'react-toastify'
import user from "../services/userService"

import "../styles/profile.css"

const EditUserForm = () => {
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPassword2, setNewPassword2] = useState("")

    const handleForm = async (e) => {
        e.preventDefault()
        // console.log(user.getCurrentUser().email)
        // console.log(user.getCurrentUser().username)
    }
     const users = user.getCurrentUser().data
     const username = user.getCurrentUser()

    return (
       
        <>
            <h1 className='tituloSaludo'>Hello {username.username}</h1>
            <div>
                <h1 className='tituloRecomendaciones'>Recent recommendations:</h1>
                    <div style={{color:"white"}}>
                        {users.reverse().map((e)=>(
                            <>
                                <h4>grupo1:{e.grupo1}</h4>
                                <h4>grupo2:{e.grupo2}</h4>
                                <h4>recomendacion1:{e.recomendacion1}</h4>
                                <h4>recomendacion2:{e.recomendacion2}</h4>
                                <h4>recomendacion3:{e.recomendacion3}</h4>
                            </>
                        ))}
                    </div>
            </div>

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
        </>
    );
};

export default EditUserForm;