import React from "react";
import { FaqItems } from "../../../components/FaqItems";
import { useMediaQuery } from "react-responsive";
const ServiceFeatures = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return (
		<section className="features-section">
			<div className="container" >
				<div className="section-title mb-60">
					<h2 className="title title-xl-title text-white pb-0">
						Service Features
						<span className="shadow-border"></span>
					</h2>
				</div>
				<div className="row g-4">
					<div className="col-md-6">
						<FaqItems
							theme="white"
							data={data1}
							id="features-1"
							width="500px"
						/>
					</div>
					<div className="col-md-6">
						<FaqItems
							theme="white"
							data={data2}
							id="features-2"
							width="500px"
							firstClose
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const data1 = [
	{
		title: "Search Engine Optimization",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Social Media Marketing",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Email Marketing",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Landing Pages",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Branding",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Workflows and Sequences",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Market Research",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Lead Magnet",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Marketing Strategies",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Customer Service",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
];
const data2 = [
	{
		title: "Lead Nurturing",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Content Writing",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Lead Naturing",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Website Optimization",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Web Design and Development",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Lead Generation",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Sales Funnels",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Marketing Campaigns",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Per-Per-Click",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
	{
		title: "Technical Support",
		text: "Lorem ipsum dolor sit amet consectetur. Sed viverra quis dapibus pellentesque vitae facilisis fringilla. Risus phasellus varius arcu ac donec non sed. Velit bibendum tempus cursus mauris facilisis enim eget rhoncus. Pellentesque euismod quisque sagittis malesuada lorem. Elementum faucibus sit elementum enim nibh. Ornare adipiscing eget arcu in potenti.",
	},
];

export default ServiceFeatures;
