import {Routes, Route} from "react-router-dom";
import Layout from "layout/Layout";
import HomePage from "pages/HomePage";
import TweetsPage from "pages/TweetsPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/tweets" element={<TweetsPage />} />
			</Route>
			<Route path="*" element={<HomePage />} />
		</Routes>
	);
}

export default App;
