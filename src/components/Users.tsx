import React, { useState } from "react";
import User from "./User";

// type alias
type IUserContext = {
	name: string;
	phone: number;
};

const Users = () => {
	const [users, setUsers] = useState<IUserContext>({
		name: "Apel Mahmud",
		phone: 1739801364,
	});
	return (
		<div>
			<User name={users.name} phone={users.phone} />
		</div>
	);
};

export default Users;
