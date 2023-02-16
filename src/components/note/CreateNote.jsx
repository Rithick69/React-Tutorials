import React from "react";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const CreateNote = () => {
	return (
		<>
			<div className="main_notes">
				<form>
					<input type="text" placeholder="Title" autoComplete="off" />
					<textarea rows="" column="" placeholder="Write a note ..."></textarea>
					<Button>
						<Add className="plus_sign" />
					</Button>
				</form>
			</div>
		</>
	);
};
export default CreateNote;
