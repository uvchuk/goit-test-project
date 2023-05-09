import {Suspense} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Container, Main} from "./Layout.styled";

const Layout = () => {
	const location = useLocation();

	return (
		<Container>
			<Main>
				<Suspense>
					<Outlet state={location} />
				</Suspense>
			</Main>
		</Container>
	);
};

export default Layout;
