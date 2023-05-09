import styled from "styled-components";
import background from "assets/images/picture.svg";

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 12px;
	width: 1260px;
`;

export const Main = styled.main`
	position: relative;
	overflow: auto;
	min-height: 70vh;
`;

export const Page = styled.div`
	background: url(${background}), linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-weight: 800;
`;
