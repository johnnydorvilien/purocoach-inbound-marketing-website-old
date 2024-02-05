import React from "react";
import { FaqItems } from "../../components/FaqItems";
import img from "./img/values.png";
const ValuesSection = () => {
	return (
		<section className="values-section">
			<div className="target-id" id="values"></div>
			<div className="container">
				<div className="section-title section-title-2">
					<h2 className="title text-base">Our Values</h2>
					<p className="text">
						We run our business according to our seven core principles to ensure every client get the best support.
					</p>
				</div>
				<div className="row g-3">
					<div className="col-md-6">
						<FaqItems data={data} id="values" />
					</div>
					<div className="col-md-6">
						<FaqItems data={data2} id="values-2" firstClose="undefined" />
					</div>
					<img src={img} className="w-100 rounded-15 mt-16 img" alt="" />
				</div>
				
			</div>
		</section>
	);
};

const data = [
	{
		title: "People",
		text: "Attention to detail, high standards, and professionalism will setyou apart. We pride ourselves on these qualities and infusethem into everything we do.",
	},
	{
		title: "Integrity",
		text: "Attention to detail, high standards, and professionalism will setyou apart. We pride ourselves on these qualities and infusethem into everything we do.",
	},
	{
		title: "Authenticity",
		text: "Attention to detail, high standards, and professionalism will setyou apart. We pride ourselves on these qualities and infusethem into everything we do.",
	},
	{
		title: "Diversity",
		text: "Attention to detail, high standards, and professionalism will setyou apart. We pride ourselves on these qualities and infusethem into everything we do.",
	},
];
const data2 = [
	{
		title: "Excellence",
		text: "Attention to detail, high standards, and professionalism will setyou apart. We pride ourselves on these qualities and infusethem into everything we do.",
	},
	{
		title: "Collaboration",
		text: "Attention to detail, high standards, and professionalism will setyou apart. We pride ourselves on these qualities and infusethem into everything we do.",
	},
	{
		title: "Togetherness",
		text: "Attention to detail, high standards, and professionalism will setyou apart. We pride ourselves on these qualities and infusethem into everything we do.",
	},
];

export default ValuesSection;
