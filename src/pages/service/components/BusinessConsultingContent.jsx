import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NextIcon, PrevIcon } from "../../../components/Icon";
import BlackDivider from "../../about/BlackDivider";
import img from "../img/consulting-content.png";
import { useMediaQuery } from "react-responsive";

const BusinessConsultingContent = () => {
	const ref = useRef();
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return (
		<section className="business-consulting-content" style={{marginTop:isMobile ? "-30px" : ""}}>
			<div className="container">
				<div className="position-relative">
					<div className="business-consulting-content-wrapper">
						<div className="row g-0">
							<div className="col-lg-6">
								<img
									src={img}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										borderRadius: "15px",
									}}
									alt=""
								/>
							</div>
							<div className="col-lg-6 align-self-center">
								<div className="cont">
									<h2 className="title">Sales Development</h2>
										<p className="txt">If your sales have hit a plateau 
											or are diminishing, and nothing seems to be 
											working to turn them around, it’s time to call 
											in someone with a fresh perspective. 
											If you are looking to
										</p>
										<ul>
											<li style={{listStyle:"inside",}}>Increase new appointments with decision makers</li>
											<li style={{listStyle:"inside",}}>Improve the closing rate of leads</li>
											<li style={{listStyle:"inside",}}>Create a repeatable, measurable sales process that is ready for expansion</li>
										</ul>
										<p style={{marginTop:"10px"}}>
											Your Sales Development Consultant 
											at PUROCoach can help with all of it
										</p>
										<Link
											className="cmn-btn btn-white btn-standard"
											to="/trial-signup"
										>
											Get a Quote
										</Link>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
			<BlackDivider margin="80px 0 0" />
		</section>
	);
};

{/* const data = [
	{
		title: "Sales Development",
		text: `If your sales have hit a plateau or are diminishing, and nothing seems to be working to turn them around, it’s time to call in someone with a fresh perspective. If you are looking to`,
	},
	// {
	// 	title: "Sales Development",
	// 	text: `Connecting Marketing and Sales Experience with a Business Development Plan to set your business to success. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.`,
	// },
	// {
	// 	title: "System Integration",
	// 	text: `Connecting Marketing and Sales Experience with a Business Development Plan to set your business to success. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.`,
	// },
]; */}

export default BusinessConsultingContent;
