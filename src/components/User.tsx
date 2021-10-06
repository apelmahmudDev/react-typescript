import React from "react";

interface IUser {
	name: string;
	phone: number;
}

const User = ({ name, phone }: IUser) => {
	return (
		<div>
			<p>
				<strong>Name: </strong>
				{name}
			</p>
			<br />
			<p>
				<strong>Phone: </strong>
				{phone}
			</p>
		</div>
	);
};

export default User;
