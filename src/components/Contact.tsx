import React from "react";

interface IProps {
	name: string;
	email?: string;
}

const Contact = ({ name, email = "N/A" }: IProps) => {
	// (props: IProps)
	return (
		<div className="card">
			<h1>🦸 Contact</h1>
			<p>
				<strong>Name: </strong> {name}
			</p>
			<p>
				<strong>email: </strong> {email}
			</p>
		</div>
	);
};

export default Contact;
