import React, { useState } from "react";
import SearchResult from "./SearchResult";
// React live Search app
const Search = () => {
	const [img, setImg] = useState("");
	// using onchange event to call the SearchEvent method.
	const SearchEvent = (event) => {
		const { value } = event.target;
		// console.log(value);
		// changing the state of 'img' with curr value in the input field.

		setImg(value);
	};
	return (
		<>
			<div className="searchbar">
				<input
					type="text"
					placeholder="Search Anything"
					value={img}
					onChange={SearchEvent}
				/>
				{/* If img value is null don't display anthing */}
				{img === "" ? null : <SearchResult searchdata={img} />}
			</div>
		</>
	);
};

export default Search;
