import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Input from "../../components/Input";
import Select from "../../components/Select";
import img from "./img/about-shape.png";
import bg from "./img/req.png";
import mobile from "./img/reqmobile.png"
import { useMediaQuery } from "react-responsive";
const RequestDemo = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("");
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState("");
	const isMobile = useMediaQuery({ maxWidth: 767 });
	

	const [submit, setSubmit] = useState(false);

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
			setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<>
			<section className="request-demo-section" >
				{/* <div
					className="service-section-bg d-none d-md-block"
					style={{
						background: `url(${bg}) no-repeat top right / cover`,
						// top: "-117px",
						// borderBottomLeftRadius: "50px",
						// transform: "skewY(0)",
						// left: "-50px",
						// borderRadius: "0 0 0 250px",
					}}
				></div>
				<img
					src={img}
					alt=""
					className="service-bottom-shape d-none d-md-block"
				/> */}
				<div className="container">
					{/* <img
						src={bg}
						className="d-md-none w-100"
						style={{ borderRadius: "16px", marginBottom: "52px" }}
						alt=""
					/> */}
					<div className="contact-sales-form-wrapper">
						<div className="target-id" id="request-demo"></div>
						<h4 className="title font-semibold text-base">
						   Let Us Help You!
						</h4>
						<p>Send us your request here.</p>
						<form onSubmit={handleSubmit}>
							<div className="d-flex flex-column gap-15px">
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
									submit={submit}
									errText={"Please Enter a service"}
									data={data}
								/>
								<Input
									textarea
									placeholder="Message"
									height="108px"
									value={message}
									setValue={setMessage}
									submit={submit}
									errText={"Please Enter a message"}
								/>
								<button type="submit" className="cmn-btn">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
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

export default RequestDemo;
