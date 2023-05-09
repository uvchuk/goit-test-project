import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {syncUsers, syncPage} from "redux/slice";
import {selectLimit, selectPage, selectUsers} from "redux/selectors";
import {Link, useLocation} from "react-router-dom";
import {useFetchUsersQuery} from "services/API/tweetsAPI";
import CardList from "components/CardList/CardList";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";
import {DropdownList} from "components/Dropdown/Dropdown.styled";

const TweetsPage = () => {
	const dispatch = useDispatch();
	const users = useSelector(selectUsers);
	const page = useSelector(selectPage);
	const limit = useSelector(selectLimit);
	const {data} = useFetchUsersQuery({page, limit});
	const {state} = useLocation();

	const handleClick = () => {
		const currentPage = Math.ceil(users.length / limit);
		dispatch(syncPage(currentPage + 1));
	};

	useEffect(() => {
		if (!data) return;
		dispatch(syncUsers(data));
	}, [data, dispatch]);

	return (
		<>
			<Link to={state ? state : "/"}>Back</Link>
			<DropdownList />
			<CardList users={users} />
			{data?.length === limit && <LoadMoreBtn handleClick={handleClick} />}
		</>
	);
};

export default TweetsPage;
