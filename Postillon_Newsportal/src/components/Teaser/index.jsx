import React, { useState } from "react";
import "./styles.scss";

const Teaser = ({ src, genre, title, subtitle, type }) => {
	return (
		<div className={`teaser teaser--${type}`}>
			<img src={src} alt="Testbild" />
			<div className="text--box">
				<h4>{genre}</h4>
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>
		</div>
	);
};

export default Teaser;
