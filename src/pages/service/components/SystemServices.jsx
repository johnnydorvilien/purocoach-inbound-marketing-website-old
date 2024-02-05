import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	AutomationIcon2,
	BusinessIcon,
	IntegrationIcon,
	SalesDevelopmentIcon,
	PieChartIcon
} from "../../../components/Icon";
import WhiteDivider from "../../about/WhiteDivider";
import img1 from "../img/system-services/1.png";
import img2 from "../img/system-services/2.png";
import img3 from "../img/system-services/3.png";
import img4 from "../img/system-services/4.png";
import { useMediaQuery } from "react-responsive";
const SystemServices = ({ systemData }) => {
	const [showData, setShowData] = useState(data);

	useEffect(() => {
		systemData && setShowData(systemData);
	}, [systemData]);
	const isMobile = useMediaQuery({ maxWidth: 767});
	return (
		<>
			<div className="system-solutions">
			
				<div className="container space">
								<h2
									className="title auto"
									style={{ textAlign:"center",justifyContent:"center",paddingTop:isMobile ? "100px" : "130px",paddingBottom: isMobile ? "25px" : "40px",marginBottom:"0"}}
								>
									Automate All Your Marketing Processes
								</h2>
					{showData?.map((item, i) => (
						<div className="item" key={i}>
							<div className="target-id" id={item?.id}></div>
							<div
								className="row  flex-wrap-reverse align-items-center"
								style={{
									flexDirection: i % 2 == 0 ? "row" : "row-reverse",
								}}
							>
								<div
									className={`col-lg-6 ${
										i % 2 == 1 ? "text-lg-end" : ""
									}`}
								>
									<img
										src={item?.img}
										// style={{ maxWidth: "595px" }}
										alt=""
									/>
								</div>
								<div className="col-lg-6">
									<h2 className="title">
										{item?.icon} <span>{item?.title}</span>
									</h2>
									{item?.text?.map((txt, j) => (
										<p key={j}>{txt}</p>
									))}
									{item?.txt1 && (
                  						<ul>
                    						{item?.txt1.map((itemTxt, k) => (
                      							<li style={{listStyle:"inside",fontSize:isMobile ? "10px" : " "}} key={k}>{itemTxt}</li>
                    						))}
                  						</ul>
                					)}
									{item?.title === "Reporting & KPI Performance" && (
										<Link
											to="/trial-signup"
											className="cmn-btn btn-white btn-standard"
											style={{ minWidth: "175px" }}
										>
                    						Schedule a Meeting
                  						</Link>
                					)}
								</div>
							</div>
							{i != data?.length - 1 || systemData?.length - 1 ? (
								<WhiteDivider margin="67px" />
							) : (
								""
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

const data = [
	{
		icon: <AutomationIcon2 />,
		img: img1,
		title: "Sales Funnel",
		id: "automation",
		text: [
			"Understand your customer's purchasing journey, while also identifying what stage of this journey your customers are in. These insights can be used to decide which marketing channels and activities will best guide your customer towards a purchase.",
			"Your funnel will allow you to work smarter, not harder—allowing you to start with a general picture of your target audience. By knowing your target audience's social media habits, for example, you can build awareness on their favorite sites, leading some potential customers to your landing page.",
		],
		txt1:"",
	},
	{
		icon: <IntegrationIcon />,
		img: img2,
		title: "Email Communication",
		id: "integration",
		text: [
			"Email marketing is a solid tool for getting your brand, product, or service out there, with the added benefit that email marketing tends to go to people who are already interested in your service. However, for small businesses, especially up-and-coming ones, it may not be so easy to see the exact benefits.",
			"",
		],
		txt1:[
			"Generates traffic to your website",
			"Strengthens relationships with customers",
			"Increases brand awareness",
			"Cost-effective",
		],
	},
	{
		icon: <SalesDevelopmentIcon />,
		img: img3,
		title: "Workflows & Sequences",
		id: "sales-development",
		text: [
			"Connecting Marketing and Sales Experience with a Business Development Plan to set your business to success.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
		txt1:[
			"Define goals and objectives.",
			"Segment your audience for targeted emails.",
			"Personalize emails using dynamic content.",
			"Utilize automation workflows for multi-step campaigns.",
			"A/B test email elements for better performance.",
			"Monitor metrics like open rates and conversions.",
			"Continuously optimize based on data-driven insights.",
		],
	},
	{
		icon: <PieChartIcon />,
		img: img4,
		title: "Reporting & KPI Performance",
		id: "business-coaching",
		text: [
			"Allow you and your business leaders to quickly and easily review and analyze key performance indicators (KPIs) and thereby know how your organization is performing against specific strategic marketing and sales goals.",
		],
		txt1:"",
	},
];

export default SystemServices;
