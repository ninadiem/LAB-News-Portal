import React, { useState } from "react";
import Like from "../Like/index.jsx";
import "./styles.scss";

const Teaser = ({ src, genre, title, subtitle, type }) => {
	return (
		<div className={`teaser teaser--${type}`}>
			<img src={src} alt="Testbild" />
			<div class="content">
				<div className="text--box">
					<div className="thema--underline--teaser">
						<h4>{genre}</h4>
						<img src="./assets/vectors/linie.svg" alt="linie" />
					</div>
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</div>
				<div class="like--komponente">
					<Like start={16} />
				</div>
			</div>
		</div>
	);
};

export default Teaser;
