import React, { useState } from "react";
import "../Like/styles.scss";

// icon importieren
// import React from "react";
// import { ReactComponent as Icon } from ".../assets/vectors/horn_Rot.svg";

// <Icon />;

const Share = ({ start }) => {
	const [count, setCount] = useState(start);

	return (
		<div className={`like like--has${count > 0 ? "Likes" : "NoLikes"}`}>
			<button className="like__btn" onClick={() => setCount(count + 1)}>
				<img
					src="./assets/vectors/pferd_Rot.svg"
					alt="Steckenpferd"
					className="like--icon"
				/>{" "}
				{count}
			</button>
		</div>
	);
};

export default Share;

// used on start to convert start-prop to number
export const convert = (props) => {
	return { ...props, start: parseInt(props.start, 10) || 0 };
};
