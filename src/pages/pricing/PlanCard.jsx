import React from "react";
import { Link } from "react-router-dom";
import { Check } from "../../components/Icon";

const PlanCard = (props) => {
	const { name, subdata, index, txt } = props;
	return (
		<>
			<div className="plan-card">
				<h6 className="name">{name}</h6>
				{/* <h3 className="price">
					${yearly ? (12 * price).toFixed(2) : price}{" "}
					<small>/{duration}</small>{" "}
				</h3> */}
				<div className="txt">
					{txt}
				</div>
				<hr />
				<ul>
					{subdata?.map((item, i) => (
						<li key={i}>
							<Check />
							<span>{item}</span>
						</li>
					))}
				</ul>
				{/* <Link to="/auth/login" className="cmn-btn"> */}
				<Link to="/trial-signup" className="cmn-btn">
				Schedule a Call
				</Link>
			</div>
		</>
	);
};

export default PlanCard;
