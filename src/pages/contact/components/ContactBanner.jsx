import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Select from "../../../components/Select";

import { Link } from "react-router-dom";
import img from "../../../assets/img/banner/banner-shape.png";
import ContactSalesForm from "../../../components/ContactSalesForm";
import { Email, Phone, Pin } from "../../../components/Icon";
import bg from "../bgc.png";
import mobile from "../mobilebgc.png";
import { useMediaQuery } from "react-responsive";

const ContactBanner = () => {
	const isMobile = useMediaQuery({  maxWidth: 767 });

	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [service, setService] = useState("");
	const [submit, setSubmit] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!name) {
			// toast.error("Please Enter a name");
		} else if (!email) {
			// toast.error("Please Enter an email address");
		} else if (!phone) {
			// toast.error("Please Enter a phone");
		} else if (!service) {
			// toast.error("Please Select a service");
		} else if (!message) {
			// toast.error("Please Enter message");
		} else {
			toast.success("Message Sent");
			navigate("/payment");
			setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<section className="banner-section contact-banner" >
			{/* <div
				className="shapes-bg"
				style={{
					WebkitMask: `url(${img}) no-repeat left bottom / cover`,
					opacity: "1",
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div> */}
			<div className="container">
				<div className="banner-wrapper" >
					<div className="banner-content">
						<h1
							className="title"
							style={{ lineHeight: "1.25", marginBottom: "20px" }}
						>
							PUROCoach
						</h1>
						<div className="txt">
							<p>Our team can help you think about a business development plan, as well as establishing a long-term growth strategy. We can assess the strengths, weaknesses, opportunities, and threats to your business and come up with a roadmap to address any needs that arise.</p>
							<p>Contact us to learn more about how we can assist with business development.</p>
						</div>
						<div className="contact-info">
							{/* <div className="item">
								<div className="icon">
									<Pin />
								</div>
								<h5 className="sub-title">Address</h5>
								<div>12, Some Street, 11000 Belgrade, Serbia</div>
							</div> */}
							{/* <div className="item">
								<div className="icon">
									<Phone />
								</div>
								<h5 className="sub-title">Contact Phone</h5>
								<Link to="Tel:(+381) 11.123.4567">
									(+381) 11.123.4567
								</Link>
							</div> */}
							<div className="item">
								<div className="icon">
									<Email />
								</div>
								<h5 className="sub-title">Email</h5>
								<Link to="Mailto:PuroCoach@gmail.com">
								support@purocoach.com
								</Link>
							</div>
						</div>
					</div>
					<div className="banner-thumb" style={{marginTop: isMobile ? "25px" : " "}}>
						<div className="contact-sales-form-wrapper " style={{border:isMobile ? "0" :" ",borderRadius: isMobile ? "0" : " ", boxShadow: isMobile ? "0px 0px 0px 0px " : " "}}>
							<h4 className="title text-base" style={{ fontWeight: "600" }}>
								Contact Sales
							</h4>
							<p>Let us draw you a marketing plan and roadmap</p>
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
									<Input
										placeholder="Phone"
										value={phone}
										setValue={setPhone}
										submit={submit}
										errText={"Please Enter a phone"}
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
										Request Demo
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const data = [
	{
		title: "Select service",
		value: "",
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

export default ContactBanner;
