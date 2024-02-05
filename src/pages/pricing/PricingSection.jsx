import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import ContactSalesForm from "../../components/ContactSalesForm";
import { CaretDown2, CaretUp2 } from "../../components/Icon";
import RangeItem from "../../components/RangeItem";
import BlackDivider from "../about/BlackDivider";
import ShapeViewsTwo from "../service/components/ShapeViewsTwo";
import PlanCard from "./PlanCard";
import PlanFeatureDetails from "./PlanFeatureDetails";
import contactSalesImage from "./img/contactSalesImage.png";
import img from "./img/pricing-bottom.png";
import pricingShape from "./img/pricing-shape.png";
import bg from "./img/bg.png";
import mobile from "./img/mobilebg.png";
import { useMediaQuery } from "react-responsive";

const PricingSection = () => {
	const [yearly, setYearly] = useState(false);
	const [featureOpen, setFeatureOpen] = useState(false);
	const location = useLocation();
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return (
		<>
			<div className="pricing-section pb-0 overflow-hidden offer">
				<img src={pricingShape} alt="" className="pricing_Shape" />
				<div className="container price">
					<div className="pricing-tag">
						{/* Pricing */}
						Packages
						</div>
					{/* <div className="pricing-spacing">
						<div className="section-title mb-0">
							<h2 className="title pb-0 text-base font-xl-57" style={{marginBottom: isMobile ? " " : "10px"}}>
								We Offer a Variety of Packages
							</h2>
							<span className= {isMobile ? "shadow-border my-20px": "" }></span>
							{window.innerWidth 767 && (
							<p className="txt mx-auto" style={{ maxWidth: "1170px" ,fontSize:"14px"}}>
								Eager to meet the needs of any coach we work with, we
								have various price points available to suit your
								business.  You will see a high return on your
								investment, with an increase in clients and inbound
								inquiries as a result of working with us.
							</p>
							)}
							{window.innerWidth 767 && (
									<p className="txt mx-auto" style={{ maxWidth: "1170px" ,fontSize:"13px", textAlign:"center"}}>
									We’re eager to meet the needs of any coach or consultant we work with. We have various package points available to suit your business needs. You will see a high return on your investment, with an increase in clients and inbound inquiries as a result of working with us.
								</p>
							)}
						</div>
					</div> */}
				</div>
			</div>
			<section className="cards">
				
				{/* <img
					src={img}
					alt=""
					className="service-bottom-shape d-none d-md-block"
				/> */}
				<div className="container">
					
					<div className="row g-3 justify-content-center" style={{paddingTop: isMobile ? "50px" : "120px"}}>
						{data?.map((item, i) => (
							<div className="col-lg-3 col-md-6 col-sm-9" key={i}>
								<PlanCard {...item} index={i} yearly={yearly} />
							</div>
						))}
					</div>
				</div>
				{/* {featureOpen && <PlanFeatureDetails />} */}
				<div className="container con2">
				
					<div className="row align-items-center flex-wrap-reverse reverse">
						<div className="col-lg-6">
							<div style={{ maxWidth: "699px", paddingTop:isMobile ? "50px" : " " }}>
								<ContactSalesForm />
							</div>
						</div>
						<div className="col-lg-6 text-center">
							<img src={contactSalesImage}  alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

const data = [
	{
		name: "Consulting Pack",
		// price: 0,
		// duration: "yearly",
		txt:"We work with you to develop a complete marketing strategy, live campaign, and functionality testing with your own data",
		subdata: [
			"12 Week Consultation Sessions",
			"Ongoing Email Support",
			"Marketing Growth Plan",
			"Lead Segmentation",
			"SEO Strategy",
			"Email Marketing",
			"Strategic Roadmap",
			"Custom Reporting",
			"Automation Strategies",
			"Lead Magnet  ",
			"Lead Capturing",
			"Lead Nurturing",
			"Social Media Marketing Strategies",
			"2 Marketing Training Blocks",
		
		],
	},
	{
		name: "Automation Pack",
		// price: 49.99,
		// duration: "yearly",
		txt:"We develop a unique automation system flow that tailored to your business",
		subdata: [
			"Marketing System Setup",
			"Inbound Automation",
			"Sales Funnels",
			"Pipelines",
			"SEO Optimization",
			"Workflows Engineering",
			"Sequence Automation",
			"Reporting Setup",
			"Third Party Integration",
			"Template Setup",
			"Website Development",
			"Landing Pages",
			"Website Optimization",
			"Ongoing Email of Technical Support",
			
		],
	},
	{
		name: "Complete Inbound Pack",
		// price: 109.99,
		// duration: "yearly",
		txt:"We provide you with a 12 week of consultation and setup your entire backend marketing automation",
		subdata: [
			"12 Week Consulting Sessions",
			"Marketing System Setup",
			"Weekly Status Report",
			"Inbound Strategies + Automation",
			"Sales Funnels Consulting + Design",
			"Pipelines Consulting + Design",
			"SEO Strategies + Optimization ",
			"Workflows Strategies + Engineering",
			"Sequence Automation",
			"Advanced Reporting",
			"Third Party Integration ",
			"Template Setup + Design",
			"Website Development + Consultation",
			"Landing Pages Design",
			"Website Optimization + Revamping",
			"Ongoing Email of Technical Support",
		],
	},
	// {
	// 	name: "Professional",
	// 	// price: 199.99,
	// 	// duration: "yearly",
	// 	subdata: [
	// 		"Lorem ipsum dolor sit",
	// 		"Lorem ipsum dolor sit amet",
	// 		"Lorem ipsum dolor sit",
	// 		"Lorem ipsum",
	// 		"Lorem ipsum dolor sit",
	// 	],
	// },
];

export default PricingSection;
