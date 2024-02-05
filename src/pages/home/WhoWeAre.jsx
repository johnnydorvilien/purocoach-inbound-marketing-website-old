import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import { AngleRight } from "../../components/Icon";
import Title from "../../components/Title";
import img from "./img/shape1.png";
import mobile from "./img/mobileframe.png";
const WhoWeAre = () => {
	const navigate = useNavigate();
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return (
		<>
			<section className="service-section position-relative who-we-are">
			{window.innerWidth >= 768 && <div className="service-section-bg"></div>}
			{/* {window.innerWidth > 991 && <img src={img} alt="" className="service-bottom-shape" />} */}
				<div className="container">
				<div style={{background: `url(${window.innerWidth > 767 ? " ": mobile}) no-repeat top right / cover`,display:"block",backgroundSize:"100% 100%",padding:isMobile ? "50px 10px 30px" : "30px 10px", marginTop: isMobile ? "-48px" : "0"}}>
					<div className="boost-title">
						<Title
							className="text-base text-start text-md-center"
							title="Our Framework"
						/>
					</div>
					<div className="row gy-5">
						{data?.map((item, i) => (
							<div className="col-md-4" key={i}>
								<div className="who-we-are-item">
									<h4 className="subtitle">{item?.title}</h4>
									{item?.text?.map((txt, j) => (
										<p key={j}>{txt}</p>
									))}
									<Link
										to="#whoWeAre"
										data-bs-toggle="modal"
										className="text-base read-more"
									>
										View More <AngleRight />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			</section>

			{/* Who we are */}
			<div
				className="modal fade"
				id="whoWeAre"
				tabindex="-1"
				aria-labelledby="whoWeAre"
				aria-hidden="true"
				style={{
					"--bs-modal-width": "625px",
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header align-items-start border-0">
							<h5 className="modal-title mb-4">Connect with Us</h5>
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
									Request a Free Demo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const data = [
	{
		title: "Attract",
		text: [
			"Define your target audience and ideal client prospects. Instead of chasing prospect client, we attract them directly to your business on a consistent basis.",
			"Attract draws in the right people with valuable content and conversations that set you up a trusted coach or consultant.",
		],
	},
	{
		title: "Engage",
		text: [
			"Increased engagement and a stronger relationship with your clients prior to purchase. By providing trustworthy content, engaging prospect client helps to build a relationship of trust with the customer.",
			"Engaging presents insights and solutions that align with your prospect’s pain points and goals so they are more likely to buy from you.",
		],
	},
	{
		title: "Delight",
		text: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
		],
	},
];

export default WhoWeAre;
