import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Filter, Info, Message, Speaker } from "../../components/Icon";
import partner2 from "./img/how-we-work.png";
import partner from "./img/partner.png";
import shape from "./img/shape.png";
import mobile from "./img/mobilepartner.png";
import { useMediaQuery } from "react-responsive";
const PartnerWithUs = () => {
	const isMobile = useMediaQuery({ maxWidth:767 });
	return (
		<>
			<section className="partner-with-us growyour" >
			{/* {window.innerWidth > 991 && (
				<div className="feature-bg"></div>
				)} */}
				{/* <img
					src={shape}
					className="top-right-shape d-none d-sm-block"
					alt=""
				/> */}
				<div className="container">
					<div className="row align-items-center partner">
                                <div className="col-lg-6">
                                    <div className="partner-content text-white">
                                        <h2 className="title text-white" style={{ maxWidth: "525px" }}>
                                            Partner With Us to Grow Your Business
                                        </h2>
                                        <p className="text" style={{ maxWidth: "625px" }}>
                                            Our model is that we put our clients first and at the core of our business in order to provide a positive experience and build long-term relationships. That model is simple: we connect, we serve, and we support.
                                        </p>
                                        <div className="d-flex">
                                            <Link
                                                to="#partnerWithUs"
                                                data-bs-toggle="modal"
                                                className="cmn-btn btn-white"
                                            >
                                                Connect with Us Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
								<div className="col-lg-6">
                                    <img src={partner} className="w-100 rounded-15" alt="" />
                                </div>
					</div>
					<div className="divider-white"></div>
					<div className="row align-items-center ">
						<div className="col-lg-6 pe-xm-5">
							<img
								src={partner2}
								className="w-100 rounded-15 pe-4"
								alt=""
							/>
						</div>
						<div className="col-lg-6">
							<div className="partner-content text-white">
								<h2
									className="title text-white mb-25"
									style={{ maxWidth: "525px" }}
								>
									Our Solutions
								</h2>
								<p className="text" style={{ maxWidth: "625px" }}>
								Help attract, engage and convert prospects to paying customers for the growth of your coaching and consulting businesses through remarkable inbound marketing.
								</p>
								<ul className="info">
									{data?.map((item, i) => (
										<li key={i}>
											<span className="icon">{item?.icon}</span>
											<span>{item?.title}</span>
										</li>
									))}
								</ul>
								<div className="d-flex" style={{marginTop:"30px",}}>
									<Link
										to="#partnerWithUs"
										data-bs-toggle="modal"
										className="cmn-btn btn-white"
									>
										Connect with Us Now
									</Link>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</section>

			{/* Who we are */}
			<div
				className="modal fade"
				id="partnerWithUs"
				tabindex="-1"
				aria-labelledby="partnerWithUs"
				aria-hidden="true"
				style={{
					"--bs-modal-width": "625px",
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header align-items-start border-0">
							<h5 className="modal-title mb-4">Who We Are</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								style={{ filter: "invert(1)" }}
							></button>
						</div>
						<div className="modal-body pe-3 pe-sm-4">
							<div className="item">
								<h6 className="subtitle">1 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra.
								</p>
							</div>
							<div className="item">
								<h6 className="subtitle">2 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra. Lorem ipsum dolor sit amet
									consectetur. Consectetur urna in scelerisque amet ac
									dignissim. Hac pretium facilisis id vestibulum
									scelerisque eget eleifend lobortis. In sed dignissim
									pharetra integer. Vel quam vel amet diam. In accumsan
									commodo natoque netus pellentesque enim viverra.
								</p>
							</div>
							<div className="item">
								<h6 className="subtitle">3 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra.
								</p>
							</div>
							<div className="item">
								<h6 className="subtitle">4 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra.
								</p>
							</div>
							<div className="item">
								<h6 className="subtitle">5 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra.
								</p>
							</div>
						</div>
						<div className="modal-footer border-0 pe-3 pe-sm-4">
							<div
								className="btn-grp w-100 d-flex gap-3"
								data-bs-dismiss="modal"
							>
								<HashLink
									to="/trial-signup"
									className="cmn-btn btn-white btn-standard flex-grow-1 w-0"
								>
									Connect with Us Now
								</HashLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const data = [
	// {
	// 	icon: <Message />,
	// 	title: "We are humanitarians, motivators, and entrepreneurs",
	// },
	{
		icon: <Speaker />,
		title: "Savings on cost, greater efficiency on productivity, and higher sales conversion for greater return on investment.",
	},
	{
		icon: <Filter />,
		title: "More time and freedom so you can focus on what matters the most—your valuable clients.",
	},
	{
		icon: <Info />,
		title: "Allow you the ability to define your target audience, carve out a unique brand identity, and create a roadmap for your brand’s growth.",
	},
];

export default PartnerWithUs;
