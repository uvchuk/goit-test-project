import {styled} from "styled-components";
import background from "assets/images/picture.svg";
import logo from "assets/images/logo.svg";

export const UserCard = styled.li`
	position: relative;
	width: 380px;
	height: 460px;
	background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
	background-repeat: no-repeat;
	background-position: 50px 10px 50px 20px;
	box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
	border-radius: 20px;
	&:before {
		content: "";
		display: block;
		position: absolute;
		height: 168px;
		width: 308px;
		top: 28px;
		left: 36px;
		background: url(${background});
	}
	&:after {
		content: "";
		display: block;
		position: absolute;
		height: 8px;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #ebd8ff;
		box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
			inset 0px 3.43693px 2.5777px #fbf8ff;
	}
`;

export const Logo = styled.div`
	display: block;
	position: absolute;
	height: 22px;
	width: 76px;
	top: 20px;
	left: 20px;
	background: url(${logo});
`;

export const Border = styled.div`
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80px;
	height: 80px;
	overflow: hidden;
	background: #ebd8ff;
	box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3,
		inset 0px 4.39163px 3.29372px #fbf8ff;
	border-radius: 13.1749px;
	border-radius: 50px;
	z-index: 1;
`;

export const Avatar = styled.img`
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Tweets = styled.p`
	display: flex;
	gap: 8px;
	position: absolute;
	bottom: 152px;
	left: 50%;
	margin: 0;
	transform: translateX(-50%);
`;

export const Followers = styled.p`
	display: flex;
	gap: 8px;
	position: absolute;
	bottom: 112px;
	left: 50%;
	margin: 0;
	transform: translateX(-50%);
`;

export const Button = styled.button`
	width: 196px;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 14px 28px;
	gap: 6px;

	position: absolute;
	width: 196px;
	height: 50px;
	left: 92px;
	top: 374px;

	background: #ebd8ff;
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border-radius: 10.3108px;

	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	text-transform: uppercase;
	color: #373737;
	cursor: pointer;
`;
