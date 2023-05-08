import {useFollowUserMutation} from "services/API/tweetsAPI";
import {Avatar, Logo, UserCard, Border, Tweets, Followers, Button} from "./Card.styled";

/* eslint-disable react/prop-types */
const Card = ({id, tweets, avatar, followers, isFollowed}) => {
	const formattedFollowers = () => followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const [followUser, {isLoading}] = useFollowUserMutation();

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
			<Button onClick={() => followUser({id, followers, isFollowed})} disabled={isLoading}>
				{isFollowed ? "Following" : "Follow"}
			</Button>
		</UserCard>
	);
};

export default Card;
