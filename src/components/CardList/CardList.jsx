import Card from "components/Card/Card";
import {useFetchUsersQuery} from "services/API/tweetsAPI";
import {List} from "./CardList.styled";

const CardList = () => {
	const {data: users} = useFetchUsersQuery();

	return (
		<List>
			{users?.map(user => (
				<Card key={user.id} {...user} />
			))}
		</List>
	);
};

export default CardList;
