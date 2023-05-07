import {Suspense} from "react";
import {Main} from "./Layout.styled";
import {Outlet} from "react-router-dom";

const Layout = () => {
	return (
		<Main>
			<Suspense>
				<Outlet />
			</Suspense>
		</Main>
	);
};

export default Layout;
