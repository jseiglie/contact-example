import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Edit = () => {
	const params = useParams();
    const {store, actions} = useContext(Context);
    
    const [formData, setFormData] = useState({
        "full_name": store.contactToEdit?.full_name,
        "email": store.contactToEdit?.email,
        "agenda_slug": "seiglie",
        "address": store.contactToEdit?.address,
        "phone": store.contactToEdit?.phone,
    });

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        //we send the OBJECT to our FLUX ACTION
        actions.editContact(formData, store.contactToEdit.id);
        //navigate back to home
        navigate("/")
    }

    const handleInputChange = (el) => {
		const { name, value } = el.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
        <div className="container">

        <form className="form-control" onSubmit={e=>handleSubmit(e)}>

            <label className="form-text"> Full Name
                <input type="text" className="form-control" value={formData.full_name} name="full_name" placeholder="full name" onChange={e=>handleInputChange(e)}/>
            </label>
            <label className="form-text"> Email
                <input type="mail" className="form-control" value={formData.email} name="email" placeholder="full name" onChange={e=>handleInputChange(e)}/>
            </label>

            <label className="form-text"> phone
                <input type="text" className="form-control" value={formData.phone} name="phone" placeholder="full name" onChange={e=>handleInputChange(e)}/>
            </label>

            <label className="form-text"> address
                <input type="text" className="form-control" value={formData.address} name="address" placeholder="full name" onChange={e=>handleInputChange(e)}/>
            </label>

            <input type="submit" className="btn btn-primary"/>
        </form>

        </div>
	);
};