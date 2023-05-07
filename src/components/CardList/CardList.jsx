import Card from "components/Card/Card";
import {useFetchUsersQuery} from "services/API/tweetsAPI";

const CardList = () => {
	const {data: users} = useFetchUsersQuery();

	return (
		<ul>
			{users?.map(user => (
				<Card key={user.id} {...user} />
			))}
		</ul>
	);
};

export default CardList;
