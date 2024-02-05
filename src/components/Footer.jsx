import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../pages/Logo";
import { CaretDown, Facebook, Linkedin, Twitter } from "./Icon";
import { useMediaQuery } from "react-responsive";
const Footer = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return (
		<>
			<footer className="footermargin">
				<div className="footer-top">
				<div className="container">
						{window.innerWidth > 767 && (
          					<div className="shapes-mobile"></div>
        				)}
						<div className="footer-top-widget">
							<div className="widget-left">
								{/* <div className="mb-3">
									<Logo />
								</div> */}
								{/* {window.innerWidth > 991 && (
          							<div className="mb-3">
            							<Logo />
          							</div>
        						)} */}
								<h3 className="title d-md">
									Sign Up For Our Newsletter
								</h3>
								<form>
									<div className="input-group">
										<input
											type="text"
											placeholder="Email"
											className="form-control form--control"
										/>
										<Link className="cmn-btn input-btn-text" to="/trial-signup" >
											Subscribe
										</Link>
									</div>
								</form>
								<p>
								Get on our newsletter email list to be the first to see inspiring content, news and exclusive offers.
								</p>
							</div>
							<div className="widget-right">
								{data?.map((item, i) => (
									<FooterLinks key={i} {...item} />
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div style={{fontWeight:"normal",display:isMobile ? "block" : "flex",justifyContent:"space-between",alignItems:"center",}}>
							<div className="widget-left">
								
								<ul className="social-icons justify-content-start" >
									<li>
										<Link to="#">
											<Facebook color="var(--base)" />
										</Link>
									</li>
									{/* <li>
										<Link to="#">
											<Twitter color="var(--base)" />
										</Link>
									</li> */}
									<li>
										<Link to="#">
											<Linkedin color="var(--base)" />
										</Link>
									</li>
								</ul>
							</div>
							<div style={{paddingTop: isMobile ? "10px" : "",textAlign: isMobile ? "justify" : ""}}>
								<Link to="#" style={{fontWeight:"400"}}>Privacy Policy</Link> &copy; Company 2024. All
								rights reserved.
							</div>
							
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export const FooterLinks = ({ title, links }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="item">
				<h5 className="subtitle">
					<span>{title}</span>
					{/* <span className="d-sm-none">
						{" "}
						<CaretDown />{" "}
					</span> */}
				</h5>
				{/* <div className={`inner-div ${open ? "active" : ""}`}> */}
					<ul className="links">
						{links?.map((item, i) => (
							<li key={i}>
								<Link to={item?.url}>{item?.title}</Link>
							</li>
						))}
					</ul>
				{/* </div> */}
			</div>
		</>
	);
};

const data = [
	{
		title: "Company",
		links: [
			{
				title: "About PUROCoach",
				url: "/about",
			},
			{
				title: "Our Mission",
				url: "/pricing",
			},
			{
				title: "Our Vision",
				url: "/contact",
			},
			{
				title: "Our Team",
				url: "/contact",
			},
			{
				title: "Contact Us",
				url: "/contact",
			},
		],
	},
	{
		title: "Services",
		links: [
			{
				title: "Organic SEO",
				url: "/services#inbounding",
			},
			{
				title: "Email Marketing",
				url: "/services#automation",
			},
			{
				title: "Social Media Managment",
				url: "/services#integration",
			},
			{
				title: "Content Creation",
				url: "/services#sales-development",
			},
			{
				title: "Reports and Analytics",
				url: "/services#business-coaching",
			},
			{
				title: "Automation",
				url: "/services#business-coaching",
			},
		],
	},
];

export default Footer;
