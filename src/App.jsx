import React, { createContext } from "react";
import A from "./practice_utils/contextapi/A";

// Context API

// Generally we follow a top - down approach where if 3 components,
// A, B and C all rendered through App so the it would look like this. ⬇️

// Parent Component
//      ⬇️
// Component A
//      ⬇️
// Component B
//      ⬇️
// Component C

// We can see here that there is component tree whereby data is
// being passed from parent component to child component C via A and B.

// But won't it be great if instead passing the data through A and B to reach C, we
// could simply pass the data directly from the parent to child C.

// Well, useContext helps us in doing just that.

// React Hooks provides a concept called Context.

// React Context API allows us to easily access data at different levels of the
// component tree, without passing prop to each level.

// The context api helps us avoid any unwanted data corruptions due to being passed as a prop
// from all other child components to reach C.

// To use Context API we must follow this 3 steps:
// 1. CreateContext(): we call the context api so data can be passed.
// 2. provider: this is the component that provides the data.
// 3. consumer: this uses the data being provided.

const firstName = createContext();
const secondName = createContext();

// We want the data in 'firstName' to be passed only to compnent 'C'.

const App = () => {
	return (
		<>
			{/* We need to provide the data in firstName through provider and pass the data in value.  */}
			<firstName.Provider value={"Rithick"}>
				<secondName.Provider value={"Chowdhury"}>
					{/* We must write the component inside the provider tag */}
					<A />
				</secondName.Provider>
			</firstName.Provider>
		</>
	);
};

export default App;

// Now after creating the provider we must export it.

export { firstName, secondName };
