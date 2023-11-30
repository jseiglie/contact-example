import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const Contact = () => {

    const {store, actions} = useContext(Context);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(formData);
        //we send the OBJECT to our FLUX ACTION
        await actions.newContact(formData)
        navigate("/")
    }

    const handleInputChange = (el) => {
		const { name, value } = el.target;
		setFormData({ ...formData, [name]: value });
	};


    return(

        <div className="container">

        <form className="form-control" onSubmit={e=>handleSubmit(e)}>

            <label className="form-text"> Full Name
                <input type="text" className="form-control" name="full_name" placeholder="full name" onChange={e=>handleInputChange(e)}/>
            </label>
            <label className="form-text"> Email
                <input type="mail" className="form-control" name="email" placeholder="full name" onChange={e=>handleInputChange(e)}/>
            </label>

            <label className="form-text"> phone
                <input type="text" className="form-control" name="phone" placeholder="full name" onChange={e=>handleInputChange(e)}/>
            </label>

            <label className="form-text"> address
                <input type="text" className="form-control" name="address" placeholder="full name" onChange={e=>handleInputChange(e)}/>
            </label>

            <input type="submit" className="btn btn-primary"/>
        </form>

        </div>

    )

}