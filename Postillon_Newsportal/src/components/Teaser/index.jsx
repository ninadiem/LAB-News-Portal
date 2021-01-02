import React, { useState } from "react";
import "./styles.scss";

const Teaser = ({ src, genre, title, subtitle, type }) => {
	return (
		<div className={`teaser teaser--${type}`}>
			<img src={src} alt="Testbild" />
			<div class="content">
				<div className="text--box">
					<div className="thema--underline">
						<h4>{genre}</h4>
						<img src="./assets/vectors/linie.svg" alt="linie" />
					</div>
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</div>
				<div class="like--komponente">
					<div component="like"></div>
					<div component="like" start="54"></div>
					<div component="like" start="23"></div>
				</div>
			</div>
		</div>
	);
};

export default Teaser;
