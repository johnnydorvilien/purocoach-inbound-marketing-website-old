import React from "react";
import img from "../../assets/img/trial/banner-shape.png";
import { Check } from "../../components/Icon";
const TrialBanner = ({ children }) => {
	return (
		<>
			<section className="trial-banner-section">
				
{/* 				
					<div
						className="shapes-bg"
						style={{
							WebkitMask: `url(${img}) no-repeat left bottom / cover`,
							opacity: "1",
						}}
					> */}
						{/* <span></span>
						<span></span>
						<span></span> */}
					{/* </div> */}
					<div className="container">
						<div className="d-flex abs">

						
					<div className="left-side">
					<div className=" shape-container me-md-0">
						<h1 className="title">Start your 14 days free trial today</h1>
						<h5 className="subtitle">
							No credit card required, no software to install.
						</h5>
						<div className="mb-20">With your trial, you get:</div>
						<ul className="list">
							{data?.map((item, i) => (
								<li key={i}>
									<Check /> <span>{item?.txt}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="right-side">
					<div className=" shape-container">
						<div className="right-form-wrapper">
							<div className="inner-div">{children}</div>
						</div>
					</div>
				</div>
				</div>
				</div>
			</section>
		</>
	);
};
const data = [
	{
		txt: "Pre-loaded data or upload your own",
	},
	{
		txt: "Pre-configured processes, reports, and dashboards",
	},
	{
		txt: "Guided content, how-tos, and best practices for sales",
	},
	{
		txt: "Guided content, how-tos, and best practices for sales",
	},
];
export default TrialBanner;
