/* eslint-disable react/prop-types */
import Card from "components/Card/Card";
import {List} from "./CardList.styled";

const CardList = ({users}) => {
	return (
		<List>
			{users?.map(user => (
				<Card key={user.id} {...user} />
			))}
		</List>
	);
};

export default CardList;
