import Layout from "layout/Layout";
import HomePage from "pages/HomePage";
import {Routes, Route} from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
}

export default App;
