import React, { useContext } from "react";
import { ContentRoutes } from "../utils/routes";
import Header from "./header/header";
import Content from "./content";
import Footer from "./footer/footer";
import { SideContext } from "../contexts/sideContext";
import { ListProvider } from "../contexts/listContext";

const Wrapper = () => {
	const { sideOpen } = useContext(SideContext);
	return (
		<section className={`p-wrapper${sideOpen ? " push" : ""}`}>
			<Header />
			<Content>
				<ListProvider>
					<ContentRoutes />
				</ListProvider>
			</Content>
			<Footer />
		</section>
	);
};

export default Wrapper;
