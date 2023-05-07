import {UserCard} from "./Card.styled";

/* eslint-disable react/prop-types */
const Card = ({tweets, avatar, followers}) => {
	return (
		<UserCard>
			<img src={avatar}></img>
			<p>
				<span>{tweets}</span>Tweets
			</p>
			<p>
				<span>{followers}</span>Followers
			</p>
		</UserCard>
	);
};

export default Card;
