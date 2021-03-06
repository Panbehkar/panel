import React, { createContext, useReducer } from "react";
import SideReducer from "../reducers/sideReducer";

export const SideContext = createContext();

export const SideProvider = ({ children }) => {
	const [sideOpen, dispatch] = useReducer(SideReducer, false);
	return (
		<SideContext.Provider value={{ sideOpen, dispatch }}>
			{children}
		</SideContext.Provider>
	);
};
