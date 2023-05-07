import {Avatar, Logo, UserCard, Border, Tweets, Followers, Button} from "./Card.styled";

/* eslint-disable react/prop-types */
const Card = ({tweets, avatar, followers}) => {
	const formattedFollowers = () => followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return (
		<UserCard>
			<Logo />
			<Border>
				<Avatar src={avatar} width="62px" height="62px"></Avatar>
			</Border>
			<Tweets>
				<span>{tweets}</span>Tweets
			</Tweets>
			<Followers>
				<span>{formattedFollowers()}</span>Followers
			</Followers>
			<Button>Follow</Button>
		</UserCard>
	);
};

export default Card;
