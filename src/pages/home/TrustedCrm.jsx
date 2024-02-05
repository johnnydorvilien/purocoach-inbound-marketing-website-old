import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check2, VideoIcon } from "../../components/Icon";
import BannerVideo from "./BannerVideo";
import crmModalImg from "./img/crm-modal.png";
import crm from "./img/crm.png";
import { useMediaQuery } from "react-responsive";

const TrustedCrm = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const istablet = useMediaQuery({ maxWidth: 991 });
	return (
		<>
			<section className="trusted-crm-section traffic">
				<div className="container">
					<div className="row align-items-center gy-2">
						<div className="col-lg-6 img">
							<img src={crm} className="mw-100" alt="" />
						</div>
						<div className="col-lg-6 ps-xl-4">
							<div className="crm-content">
								<h2 className="title d-none d-sm-block">
									Traffic, Visibility, Conversion – We Deliver
								</h2>
								<h2 className="title d-sm-none">
									{/* The Trusted <br /> CRM For Coache */}
									Traffic, Visibility, Conversion – We Deliver
								</h2>
								{/* <ul className="infos-data-crm">
									{infodata?.map(({ text }, i) => (
										<li key={i}>
											<Check2 color="var(--base-3)" />{" "}
											<span>{text}</span>
										</li>
									))}
								</ul> */}
								<p className="text">
								Working with PUROCoach will bring a wealth of benefits to your business by helping it scale and grow. Whether you’re a small startup or a large coaching or consultant firm, having a full marketing team at your disposal who can deliver will help you be found online, attract prospects, convert clients at ease and achieve your business goals.
								</p>
								<div className="d-flex flex-wrap gap-3 __crm-btn-grp">
									<Link
										to="#trustedCRM"
										data-bs-toggle="modal"
										className="cmn-btn"
									>
											{/* Learn More */}
											Request a Free Quote
									</Link>
									{/* <Link
										to="/trial-signup"
										className="cmn-btn btn-secondary"
									>
										Try it Free
									</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className="modal fade"
				id="trustedCRM"
				tabindex="-1"
				aria-labelledby="trustedCRMLabel"
				aria-hidden="true"
				style={{
					"--bs-modal-width": "625px",
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header align-items-start border-0">
							<h5 className="modal-title mb-4" id="trustedCRMLabel">
								The Trusted <br /> CRM For Coaches
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								style={{ filter: "invert(1)" }}
							></button>
						</div>
						<div className="modal-body pe-3 pe-sm-4">
							<img
								src={crmModalImg}
								className="rounded w-100 mb-4"
								alt=""
							/>
							<p>
								Lorem ipsum dolor sit amet consectetur. Consectetur urna
								in scelerisque amet ac dignissim. Hac pretium facilisis
								id vestibulum scelerisque eget eleifend lobortis. In sed
								dignissim pharetra integer. Vel quam vel amet diam. In
								accumsan commodo natoque netus pellentesque enim
								viverra. Leo purus gravida pharetra aliquet sed. Urna
								aliquet quam et sem tristique gravida nibh mollis. Sed
								neque nisi diam felis sagittis vestibulum volutpat felis
								velit. Amet nec vel mauris enim id. Neque nisl sit
								tellus cursus ornare. Quis pharetra diam amet ultricies
								erat neque nullam. Tristique ac platea nisl urna turpis
								sed. Sociis magna lorem volutpat blandit elementum
								libero lacus. Ut fringilla sit tempus mi molestie.
								Sagittis habitant habitant adipiscing est imperdiet
								bibendum. Faucibus scelerisque sagittis nisl faucibus.
								Dui nibh ipsum donec volutpat sit ullamcorper arcu. Eu
								nisi elementum imperdiet luctus aliquet mauris. Nisl.
							</p>
						</div>
						<div className="modal-footer border-0 pe-3 pe-sm-4">
							<div className="btn-grp w-100 d-flex gap-3">
								<button
									className="cmn-btn btn-white btn-standard flex-grow-1 w-0"
									data-bs-dismiss="modal"
									onClick={() =>
										setTimeout(() => {
											navigate("/trial-signup");
										}, 100)
									}
								>
									Start Free Trial
								</button>
								<button
									type="button"
									className="cmn-btn btn-shade btn-standard flex-grow-1 w-0 gap-2"
									onClick={() => setOpen(!open)}
								>
									<VideoIcon /> Watch a Demo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BannerVideo open={open} setOpen={setOpen} />
		</>
	);
};

const infodata = [
	{
		text: "100% free",
	},
	{
		text: "Takes 3 Minutes",
	},
	{
		text: "No Credit score impact",
	},
	{
		text: "Real pre-qualified rates",
	},
];

export default TrustedCrm;
