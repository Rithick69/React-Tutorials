import React from "react";

const SearchResult = (props) => {
	// Using API from Unsplash website o search images
	const image = `https://source.unsplash.com/400x300/?${props.searchdata}`;
	return (
		<>
			<div>
				<img src={image} alt="search" />
			</div>
		</>
	);
};

export default SearchResult;
