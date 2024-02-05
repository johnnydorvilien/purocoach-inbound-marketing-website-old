import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import VideoPlayIcon from "../../components/VideoPlayIcon";
import useScreen from "../../hooks/useScreen";
import BannerVideo from "./BannerVideo";
import workingWithUs from "./img/working-with-us.png";
const WorkingWithUs = () => {
	const [open, setOpen] = useState(false);
	const screen = useScreen();
	return (
		<>
			<section className="trusted-crm-section crm-trusted-2 how">
				<div className="container">
					<div className="boost-title">
						<div className="section-title m-0">
							<h2 className="title text-base text-start text-md-center text-xl font-semibold pb-max-md-2" style={{paddingBottom:'40px'}}>
								{/* Working With Us */}
								How Do We Do This?
							</h2>
						</div>
					</div>
					<div className="row align-items-center gy-4">
						<div className="col-lg-6 ps-xl-4">
							<div className="crm-content">
								<p className="text">
									We calculate client revenue that 
									we’ve generated from confirmed
									qualified leads, calls from campaigns
									that we manage in SEO, PPC, social 
									media among many other digital marketing strategies.
								</p>
								<p className="text">
									With these results-driven services,
									and the help of our proprietary
									marketing automation software, 
									we’ve driven millions of leads 
									and phone calls which has resulted
									in billions of dollars in revenue for our client’s businesses.
								</p>
								<div className="d-flex flex-wrap gap-3 __crm-btn-grp">
									<HashLink
										to="/trial-signup"
										className="cmn-btn"
										style={{
											// maxWidth: "238px",
											// width: "100%",
											// height: "60px",
											// minHeight: "57px",
											alignItems: "center",
										}}
									>
										{screen < 767 ? "Get in Touch" : "Get in Touch"}
									</HashLink>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div
								className="working-img"
								onClick={() => setOpen(!open)}
							>
								<img src={workingWithUs} className="mw-100" alt="" />
								{/* <div className="icon">
									<VideoPlayIcon />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<BannerVideo contactButton open={open} setOpen={setOpen} />
		</>
	);
};

export default WorkingWithUs;
