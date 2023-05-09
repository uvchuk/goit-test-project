/* eslint-disable react/prop-types */
import {LoadMore} from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({handleClick}) => {
	return <LoadMore onClick={handleClick}>Load more</LoadMore>;
};

export default LoadMoreBtn;
