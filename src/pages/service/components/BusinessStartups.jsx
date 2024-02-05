import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { toast } from "react-hot-toast";
import { Rocket } from "../../../components/Icon";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import img from "../img/business-startup.png";
import img1 from "../img/partners/1.png";
import img2 from "../img/partners/2.png";
import img3 from "../img/partners/3.png";
import img4 from "../img/partners/4.png";
import mobile from "../img/mobilepower.png";
import { useMediaQuery } from "react-responsive";
const BusinessStartups = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("Large Enterprise");
	const [message, setMessage] = useState("");
	const isMobile = useMediaQuery({ maxWidth: 767});

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (!name) {
	// 		toast.error("Please Enter a name");
	// 	} else if (!email) {
	// 		toast.error("Please Enter an email address");
	// 	} else if (!service) {
	// 		toast.error("Please Select a service");
	// 	} else if (!message) {
	// 		toast.error("Please Enter message");
	// 	} else {
	// 		toast.success("Message Sent");
	// 	}
	// };

	const [submit, setSubmit] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!name) {
			// toast.error("Please Enter a name");
		} else if (!email) {
			// toast.error("Please Enter an email address");
		} else if (!service) {
			// toast.error("Please Select a service");
		} else if (!message) {
			// toast.error("Please Enter message");
		} else {
			toast.success("Message Sent");
			setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<section className="business-startup-section">
			{window.innerWidth > 991 && (
			<div className="service-section-bg"></div>
			)}
			{/* {window.innerWidth > 991 && (
			<img
				src={img}
				alt=""
				className="service-bottom-shape d-none d-md-block"
			/>
			)} */}
			<div className="container">
				<div className="section-title d-flex mb-60">
					<Rocket />
					<h2 className="title title-xl-title text-start text-sm-center text-base pb-0">
						{/* <Rocket /> Business Startups */}
						Power Your Start-Up Forward With a Business Coach
					</h2>
				</div>
				<div className="row g-3">
					<div className="col-lg-4">
						<div className="contact-sales-form-wrapper">
							<h4 className="title" style={{fontSize:"25px"}}>Contact Sales</h4>
							<p>Don’t throw your future away.</p>
							<form onSubmit={handleSubmit}>
								<div className="d-flex flex-column gap-25px">
									<Input
										placeholder="Name"
										value={name}
										setValue={setName}
										submit={submit}
										errText={"Please Enter a name"}
									/>
									<Input
										placeholder="Email"
										value={email}
										setValue={setEmail}
										submit={submit}
										errText={"Please Enter an email address"}
									/>
									<Select
										value={service}
										setValue={setService}
										data={data}
										submit={submit}
										errText={"Please Enter a service"}
									/>
									<Input
										textarea
										placeholder="Message"
										height="100%"
										value={message}
										setValue={setMessage}
										submit={submit}
										errText={"Please Enter a message"}
									/>
									<button type="submit" className="cmn-btn">
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="row g-3">
							<div className="col-sm-6">
								<div className="small-shadow-card">
									<h4 className="title" style={{fontSize:"25px"}}>Get started!</h4>
									<p style={{fontSize:"13px"}}>
										Whether you’re a seasoned entrepreneur 
										or a first-timer, there is great value 
										in partnering with a business coach to 
										help you identify opportunity, avoid 
										collisions and develop a thorough business plan. We’ll help you:
									</p>
									<ul>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Clarify your vision</li>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Craft a business plan</li>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Identity key challenges</li>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Accomplish your business goals</li>
									</ul>
								</div>
							</div>
							<div className="col-sm-6" style={{paddingBottom:isMobile ? "50px" : " "}}>
								<div className="small-shadow-card">
									<h4 className="title" style={{fontSize:"25px"}}>Count on Us!</h4>
									<ul>
										<li style={{listStyle:"inside",fontSize:"13px"}}>With years of experience</li>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Outstanding work success</li>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Dedicated</li>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Determined</li>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Accountable </li>
										<li style={{listStyle:"inside",fontSize:"13px"}}>Dependable</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <div className="mb-60"></div> */}
						{/* <Marquee gradient={false} speed={40}>
							{client_logo?.map((item, i) => (
								// <img src={item.src} className="sponsor-img" alt="" />
								<h6 key={i} className="font-medium mx-4" style={{fontSize:"15px"}}>
									{item?.title}
								</h6>
							))}
						</Marquee> */}
					</div>
				</div>
			</div>
		</section>
	);
};

const client_logo = [
	{
		src: img1,
		title: "Integration",
	},
	{
		src: img2,
		title: "Ongoing Live Support",
	},
	{
		src: img3,
		title: "Marketing Support",
	},
	{
		src: img4,
		title: "Unlimited Email Support",
	},
	{
		src: img1,
		title: "Integration",
	},
	{
		src: img2,
		title: "Ongoing Live Support",
	},
	{
		src: img3,
		title: "Marketing Support",
	},
	{
		src: img4,
		title: "Unlimited Email Support",
	},
];

const data = [
	{
		title: "Large Enterprise",
		value: "Large Enterprise",
	},
	{
		title: "Inbound Marketing",
		value: "Inbound Marketing",
	},
	{
		title: "Sales Development",
		value: "Sales Development",
	},
	{
		title: "Automation",
		value: "Automation",
	},
	{
		title: "Client Relational Management",
		value: "Client Relational Management",
	},
	{
		title: "System Integration",
		value: "System Integration",
	},
	{
		title: "Business Coaching & Startups",
		value: "Business Coaching & Startups",
	},
];

export default BusinessStartups;
