const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://playground.4geeks.com/apis/fake/contact/",
			urlWithSlug: "https://playground.4geeks.com/apis/fake/contact/agenda/seiglie",
		},
		actions: {
			setContactToEdit: (contact) => {
				console.log(contact)
				setStore({contactToEdit: contact})
			},
			editContact: async (newData, id) => {
				const opt = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
					{
						"full_name": newData.full_name ,
						"email": newData.email ,
						"agenda_slug": "seiglie",
						"address": newData.address ,
						"phone": newData.phone 
					})	
				}
				const resp = await fetch(getStore().url+id, opt)
				const data = await resp.json()
				console.log(data)
			},

			getOneContact: async (id)=> {				
				const resp = await fetch(getStore().url+id);
				const data = await resp.json();
				setStore({singleContact : data})
			},

			deleteContact: async (id)=> {
				//DELETE: /apis/fake/contact/{contact_id}
				const opt = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify()
				};
				const resp = await fetch(getStore().url+id, opt);
				const data = await resp.json();
				console.log(data)
				await getActions().getContacts();
			},

			newContact: async (contactData) => {
				const opt = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
					{
						"full_name": contactData.full_name || "Dave Bradley",
						"email": contactData.email || "dave@gmail.com",
						"agenda_slug": "seiglie",
						"address": contactData.address || "47568 NW 34ST, 33434 FL, USA",
						"phone": contactData.phone || "7864445566"
					})
				}
				const resp = await fetch(getStore().url, opt)
				const data = await resp.json()
				console.log(data)
				return true
			},
			getContacts: async ()=>{
				const resp = await fetch(getStore().urlWithSlug)
				const data = await resp.json()
				setStore({contacts: data})

			},
		}
	};
};

export default getState;
