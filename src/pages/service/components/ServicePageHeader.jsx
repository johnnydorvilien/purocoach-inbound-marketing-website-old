import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaqItems } from "../../../components/FaqItems";
import {
	AutomationIcon2,
	BackButton,
	CrmIcon,
	InboundMarketingIcon,
	IntegrationIcon,
	Rocket,
	SalesDevelopmentIcon,
} from "../../../components/Icon";
import Title from "../../../components/Title";
import img from "../img/hero-top.png";
import mobile from "../img/mobilehero.png";
const ServicePageHeader = ({ title, sectionContent }) => {
	const location = useLocation();
	const isMobile = useMediaQuery({ maxWidth: 767 });
	// location?.search;
	const navigate = useNavigate();
	return (
		<>
			<section className="service-page-header">
				{location?.search == "?goback" && (
					<span
						style={{
							position: "absolute",
							left: "0",
							top: "-80px",
							zIndex: "3",
						}}
						type="button"
						onClick={() => navigate(-1)}
						className="prev-btn-payment"
					>
						<BackButton />
					</span>
				)}
				<div className="container">
					<Title
						title={title || "Our Services"}
						className="text-base text-start"
					/>
					{sectionContent && (
						<div className="row g-4" >
							<div className="col-lg-6">
								<FaqItems  data={data} id="service-1" />
							</div>
							<div className="col-lg-6">
								<FaqItems data={data2} firstClose id="service-2" />
							</div>
						</div>
					)}
				</div>
				<img
					src={img}
					className="w-50 back"
					alt=""
				/>
			</section>

			{/* Who we are */}
			<div
				className="modal fade"
				id="read-more"
				tabindex="-1"
				aria-labelledby="read-more"
				aria-hidden="true"
				style={{
					"--bs-modal-width": "625px",
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header align-items-start border-0">
							<h5 className="modal-title mb-4">Who we are</h5>
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
									Get a Free Demo
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
		icon: <InboundMarketingIcon />,
		title: "Inbound Marketing",
		text: "Streamline and connect data through integration for Better Client Experience.",
		// readMoreUrl: "#read-more",
		// buttonType: "modal",
	},
	{
		icon: <AutomationIcon2 />,
		title: "Automation",
		text: "Streamline and connect data through integration for Better Client Experience.",
		// readMoreUrl: "#read-more",
		// buttonType: "modal",
	},
	{
		icon: <IntegrationIcon />,
		title: "System Integration",
		text: "Streamline and connect data through integration for Better Client Experience.",
		// readMoreUrl: "#read-more",
		// buttonType: "modal",
	},
];
const data2 = [
	{
		icon: <SalesDevelopmentIcon />,
		title: "Sales Development",
		text: "Streamline and connect data through integration for Better Client Experience.",
		// readMoreUrl: "#read-more",
		// buttonType: "modal",
	},
	{
		icon: <CrmIcon />,
		title: "Client Relational Management",
		text: "Streamline and connect data through integration for Better Client Experience.",
		// readMoreUrl: "#read-more",
		// buttonType: "modal",
	},
	{
		icon: <Rocket />,
		title: "Business Coaching & Startups",
		text: "Streamline and connect data through integration for Better Client Experience.",
		// readMoreUrl: "#read-more",
		// buttonType: "modal",
	},
];
export default ServicePageHeader;
