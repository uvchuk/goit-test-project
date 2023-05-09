import {useDispatch} from "react-redux";
import {filterTweets} from "redux/slice";

const Dropdown = () => {
	const dispatch = useDispatch();
	return (
		<div className="dropdown">
			<button className="dropbtn">Filter</button>
			<div className="dropdown-content">
				<button onClick={() => dispatch(filterTweets(""))}>all</button>
				<button onClick={() => dispatch(filterTweets("false"))}>follow</button>
				<button onClick={() => dispatch(filterTweets("true"))}>followings</button>
			</div>
		</div>
	);
};

export default Dropdown;
