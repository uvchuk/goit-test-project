/* eslint-disable react/prop-types */
import {useDispatch, useSelector} from "react-redux";
import {syncPage} from "redux/slice";
import {selectLimit, selectPage} from "redux/selectors";
import {useFollowUserMutation} from "services/API/tweetsAPI";
import {Avatar, Logo, UserCard, Border, Tweets, Followers, Button} from "./Card.styled";

const Card = ({id, user, tweets, avatar, followers, isFollowed}) => {
	const dispatch = useDispatch();
	const [followUser, {isLoading}] = useFollowUserMutation();

	const limit = useSelector(selectLimit);
	const page = useSelector(selectPage);

	const formattedFollowers = () => followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const handleClick = () => {
		followUser({id, followers, isFollowed});
		const currentPage = Math.ceil(id / limit);
		if (currentPage !== page) dispatch(syncPage(currentPage));
	};

	return (
		<UserCard>
			<Logo title="GoIT – платформа IT-курсів" href="https://goit.global/ua/" target="_blank" />
			<Border>
				<Avatar title={`${user}`} src={avatar} width="62px" height="62px" alt={`${user}`}></Avatar>
			</Border>
			<Tweets>
				<span>{tweets}</span>Tweets
			</Tweets>
			<Followers>
				<span>{formattedFollowers()}</span>Followers
			</Followers>
			<Button onClick={handleClick} disabled={isLoading} className={isFollowed ? "following" : "follow"}>
				{isFollowed ? "Following" : "Follow"}
			</Button>
		</UserCard>
	);
};

export default Card;
