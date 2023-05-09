import {styled} from "styled-components";

export const DropdownList = styled.div`
	position: absolute;
	display: block;

	&:hover .dropdown-content {
		display: block;
	}
`;

export const DropdownBtn = styled.button`
	background-color: #4caf50;
	color: white;
	padding: 16px;
	font-size: 16px;
	border: none;
	cursor: pointer;
`;

export const DropdownContent = styled.div`
	display: block;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 12px 16px;
	z-index: 1;
	& a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}
	& a:hover {
		background-color: #f1f1f1;
	}
`;
