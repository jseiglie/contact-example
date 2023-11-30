import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	useEffect(() => {
		actions.getContacts();
	}, [])

	const handleEdit = contact => {
		actions.setContactToEdit(contact)
		navigate("/edit/" + contact.id)
	}
	
	return (
		<div className="text-center mt-5">
			<button className="btn btn-primary rounded rd-5" onClick={e => navigate("/contact")}>+</button>
			{/* First we check if CONTACTS exists */}
			{store.contacts && store.contacts.map(el =>
				<div className="card" key={el.id}>
					<p>{el.full_name}</p>
					<p>{el.phone}</p>
					<p>{el.address}</p>
					<p>{el.email}</p>
					<button onClick={e => actions.deleteContact(el.id)}>Delete</button>
					<button onClick={e => handleEdit(el)}>Edit</button>
				</div>

			)}
		</div>
	);
}
