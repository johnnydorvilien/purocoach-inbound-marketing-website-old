import React from "react";
import {
	AutomationIcon2,
	InboundMarketingIcon,
	Integration,
	PieChartIcon,
	Rocket,
	SalesDev,
} from "../../components/Icon";
import Title from "../../components/Title";
// import service from "./img/service.png";
import img from "./img/shape1.png";
import mobile from "./img/mobileservice.png";
import { useMediaQuery } from "react-responsive";
import tablet from "./img/tabletstop.png";

const Service = () => {
	const istablet = useMediaQuery({ maxWidth: 991 });
	return (
		<section className="service-section position-relative youronestop">
			{window.innerWidth > 768 && <div className="service-section-bg"></div>}
			{/* {window.innerWidth > 991 && (
				<div className="service-section-bg max-b-0"></div>
			)}
			{window.innerWidth > 991 && (
				<img
					src={img}
					alt=""
					className="service-bottom-shape d-none d-md-block"
				/>
			)} */}
			<div className="container">
				
				{/* <br className="d-lg-none" />
				<br className="d-lg-none" /> */}
				<div className="yourone">
				
				<div className="boost-title">
					<div className="section-title">
						<h2 className="text-base text-start text-md-center shape-full">
							Your One Stop Shop for All Your Marketing Business Needs
						</h2>
						<span className="shadow-border"></span>
					</div>
				</div>
				<div className="row gy-3 gx-4 service-card-wrapper">
					{data?.map((item, i) => (
						<div className="col-sm-6 col-lg-4" key={i}>
							<div className="service-card">
								<div className="icon">{item?.icon}</div>
								<h5 className="title">{item?.title}</h5>
								<p>{item?.text}</p>
							</div>
						</div>
					))}
				</div>
				</div>
			</div>
			<style>
       
      </style>
		</section>
	);
};

const data = [
	{
		icon:   <Rocket />,
		title: "SEO",
		text: "Lead the way in optimized SEO and get ahead of your competitors. Our team of experts will help you boost your online presence and rise to top of search engine rankings.",
	},
	{
		icon:  <SalesDev />,
		title: "Emails & Lead Nurturing",
		text: "The highly effective way for your businesses to nurture leads and drive conversions is through email marketing. You’ll gain trust, credibility and convert prospects fast.",
	},
	{
		icon: <InboundMarketingIcon /> ,
		title: "Content Creation",
		text: "The content you create is heavily tied to your business growth. Like all marketing pursuits, creating well-planned, well-executed content that engages with your audience will directly affect your sales.",
	},
	{
		icon:  <AutomationIcon2 />,
		title: "Social Media Management",
		text: "Building more personal connections with your target audiences at scale is key. It helps to build brand trust, affinity and best of all, loyalty to your customers.",
	},
	{
		icon: <PieChartIcon />,
		title: "Reports & Analytics",
		text: "Running marketing reports that better inform your decisions, bolster your marketing resources, and help your business grow better is vital.",
	},
	{
		icon: <Integration /> ,
		title: "Automation",
		text: "Automating the many steps between marketing and sales gives your team more time to focus on overall strategy and nurturing the leads that show real promise.",
	},
];

export default Service;
