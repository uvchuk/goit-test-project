import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import {Container, Main} from "./Layout.styled";

const Layout = () => {
	return (
		<Container>
			<Main>
				<Suspense>
					<Outlet />
				</Suspense>
			</Main>
		</Container>
	);
};

export default Layout;
