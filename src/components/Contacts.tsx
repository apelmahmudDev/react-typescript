import React, { useState } from "react";
import Contact from "./Contact";

const Contacts = () => {
	const [contact, setContact] = useState("");
	const [contactList, setContactList] = useState<string[]>([]);

	const onClick = () => {
		setContactList([...contactList, contact]);
		setContact("");
	};
	return (
		<div>
			<h1>🦸 Contact</h1>
			<input
				onChange={(e) => setContact(e.target.value)}
				value={contact}
				type="text"
				placeholder="contact list"
			/>
			<button onClick={onClick}>Submit</button>
			{contactList.map((contactName) => (
				<Contact key={contactName} name={contactName} />
			))}
		</div>
	);
};

export default Contacts;
