import React from "react";
import { FaqItems } from "../../components/FaqItems";
import Title from "../../components/Title";
const FaqsSection = () => {
	return (
		<section className="faqs-section">
			<div className="container">
				<div className="section-title">
					<h2 className="title">Frequently Asked Questions</h2>
					<span className="shadow-border"></span>
				</div>
				{/* <Title title="Frequently Asked Questions" /> */}
				<div className="row g-4">
					<div className="col-md-6">
						<FaqItems id="faqs-items-2" data={data} />
					</div>
					<div className="col-md-6">
						<div className="ps-xl-3">
							<FaqItems id="faqs-items" firstClose data={data} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const data = [
	{
		title: "Lorem ipsum dolor sit amet consectetur.",
		text: "Attention to detail, high standards, and professionalism will set you apart. We pride ourselves on these qualities and infuse them into everything we do.",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur.",
		text: "Attention to detail, high standards, and professionalism will set you apart. We pride ourselves on these qualities and infuse them into everything we do.",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur.",
		text: "Attention to detail, high standards, and professionalism will set you apart. We pride ourselves on these qualities and infuse them into everything we do.",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur.",
		text: "Attention to detail, high standards, and professionalism will set you apart. We pride ourselves on these qualities and infuse them into everything we do.",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur.",
		text: "Attention to detail, high standards, and professionalism will set you apart. We pride ourselves on these qualities and infuse them into everything we do.",
	},
];

export default FaqsSection;
