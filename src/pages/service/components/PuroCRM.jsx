import React from "react";
import { Link } from "react-router-dom";
import img from "../img/puro-crm.png";
import { useMediaQuery } from "react-responsive";
const PuroCRM = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return (
		<section className="puro-crm-section">
			<div className="target-id" id="crm"></div>
			<div className="container" style={{paddingBottom:"0px"}}>
				<div className="row gy-5 align-items-center" >
					<div className="col-lg-6">
						<div className="crm-txt text-white">
							<h2 className="title text-white">Consulting Services</h2>
							<p>
								Our consultants handle a wide array of tasks across developing, implementing, analyzing, and maintaining a successful marketing strategy for your business. We analyzing existing marketing strategies to see if they’re still effective and identifying any weak links to improve on. We help you create an effective marketing strategy along with a roadmap to help your business reach its marketing goals. We monitor the progress of new marketing strategies by keeping track of analytics for SEO, PPC, email marketing, campaigns, social media marketing metrics, and more...
							</p>
							<Link
								className="cmn-btn btn-white"
								to="/trial-signup"
								// style={{ minWidth: "233px" }}
							>
								Contact Us Now
							</Link>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="ps-xl-4">
							<img src={img} alt="" className="__rounded-img" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PuroCRM;
