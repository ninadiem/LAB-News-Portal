import React, { useState } from "react";
import "./styles.scss";

// icon importieren
// import React from "react";
// import { ReactComponent as Icon } from ".../assets/vectors/horn_Rot.svg";

// <Icon />;

const Like = ({ start }) => {
	const [count, setCount] = useState(start);

	return (
		<div className={`like like--has${count > 0 ? "Likes" : "NoLikes"}`}>
			<button className="like__btn" onClick={() => setCount(count + 1)}>
				{count} Likes
			</button>
		</div>
	);
};

export default Like;

// used on start to convert start-prop to number
export const convert = (props) => {
	return { ...props, start: parseInt(props.start, 10) || 0 };
};
