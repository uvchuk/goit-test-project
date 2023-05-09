import {Button} from "components/Card/Card.styled";
import {Page, Title} from "layout/Layout.styled";
import {useNavigate} from "react-router-dom";
const HomePage = () => {
	const navigate = useNavigate();
	return (
		<>
			<Page>
				<Title>Welcome to Tweets App!</Title>
				<Button style={{position: "initial"}} onClick={() => navigate("/tweets")}>
					Get in!
				</Button>
			</Page>
		</>
	);
};

export default HomePage;
