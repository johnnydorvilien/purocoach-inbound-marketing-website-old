import React, { useState } from "react";
import Title from "../../components/Title";
import shape from "./img/feature-shape.png";

import { Link, useNavigate } from "react-router-dom";
import {
	Autoplay,
	Mousewheel,
	Navigation,
	Pagination,
	Scrollbar,
	Thumbs,
} from "swiper";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import useScreen from "../../hooks/useScreen";
import img1 from "./img/feature/1.png";
import img2 from "./img/feature/2.png";
import img3 from "./img/feature/3.png";
import img4 from "./img/feature/4.png";
import img5 from "./img/feature/5.png";
import mobile from "./img/mobileinbound.png";
const Feature = () => {
	const [imagesNavSlider, setImagesNavSlider] = useState(null);

	const screen = useScreen();
	const navigate = useNavigate();
	const isMobile = window.innerWidth <= 767;
	return (
		<>
			<section className="feature-section" >
			{/* {window.innerWidth > 767 && (
				<div className="feature-bg"></div>
				)}
				{window.innerWidth > 767 && (
				<img src={shape} className="top-right-shape" alt="" />
			)} */}
				<div className="overflow-hidden">
					<div className="container">
						<Title
							title="Your Inbound Marketing is at Our Care"
							className="text-white text-start text-md-center"
						/>
					
							<div className="slider">
								<div className="slider__flex">
									<div className="slider__images">
										<div className="slider__image">
											<img src={img1} alt="" />
										</div>
									</div>
									
									<div className="slider__col">
										<div className="slider__thumbs">
										{isMobile
  ? slides?.slice(0, 2).map((slide, index) => (
              									<div key={index} className="feature-content-card">
                									<h3 className="title">{slide?.title}</h3>
                									<p>{slide?.text}</p>
                									<Link
                  										to={`#${slide?.modalId}`}
                  										data-bs-toggle={slide?.modalId ? "modal" : ""}
                  										className="cmn-btn btn-white"
                									>
                  										{slide?.btnTxt}
                									</Link>
              									</div>
            								))
          									: (
												<Swiper
													onSwiper={(swiper) =>
														setImagesNavSlider(swiper)
													}
													mousewheel={true}
													direction="vertical"
													spaceBetween={24}
													slidesPerView={2}
													className="swiper-container1"
													breakpoints={{
														0: {
															direction: "horizontal",
														},
														768: {
															direction: "vertical",
														},
														1200: {
															spaceBetween: 42,
														},
														1420: {
															spaceBetween: 52,
														},
													}}
													modules={[
														Navigation,
														Thumbs,
														Mousewheel,
														Scrollbar,
													]}
													scrollbar={{ draggable: true }}
												>
													{slides?.map((slide, index) => (
                										<SwiperSlide key={index}>
                  											<div className="feature-content-card">
                    											<h3 className="title">{slide?.title}</h3>
                    											<p>{slide?.text}</p>
                    											<Link
                      												to={`#${slide?.modalId}`}
                      												data-bs-toggle={slide?.modalId ? "modal" : ""}
                      												className="cmn-btn btn-white"
                    											>
                      												{slide?.btnTxt}
                    											</Link>
                  											</div>
                										</SwiperSlide>
              										))}
											</Swiper>
											)}
										</div>
									</div>
								</div>
							</div>
					
					</div>
				</div>
			</section>
			{/* Who we are */}
			<div
				className="modal fade"
				id="workingWithUs"
				tabindex="-1"
				aria-labelledby="workingWithUsLabel"
				aria-hidden="true"
				style={{
					"--bs-modal-width": "625px",
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header align-items-start border-0">
							<h5 className="modal-title mb-4" id="workingWithUsLabel">
								Work with Us
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
			{/* Req Quote  */}
			<div
				className="modal fade"
				id="freeQuote"
				tabindex="-1"
				aria-labelledby="freeQuoteLabel"
				aria-hidden="true"
				style={{
					"--bs-modal-width": "625px",
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header align-items-start border-0">
							<h5 className="modal-title mb-4" id="freeQuoteLabel">
								Get a Free Quote
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
							<div className="item">
								<h6 className="subtitle">1 Step</h6>
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
								<h6 className="subtitle">2 Step</h6>
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

const slides = [
	{
		// img: img1,
		title: "We Know Marketing Strategies That Work",
		text: `We know that coaching your clients is your main concern; let us handle the marketing, while offering you consulting and business support...`,
		btnTxt: "Work with Us",
		modalId: "workingWithUs",
	},

	{
		// img: img2,
		title: "Business Planning",
		text: "PUROCoac is dedicated to helping you with all facets of launching your business and reaching success. To achieve your goals, we offer services in three areas: marketing, business coaching, and business consulting...",
		btnTxt: "Get a Free Quote",
		modalId: "freeQuote",
	},

	{
		// img: img3,
		title: "Who We Work With",
		text: "We support and serve coaches of all types. Whether your business is financial coaching, career coaching, or relationship coaching, one thing remains the same: attracting and maintaining loyal customers is at the heart of your business strategy.",
		btnTxt: "Learn More",
		modalId: "workingWithUs",
	},

	{
		// img: img4,
		title: "What You’ll Gain",
		text: "We care about building strong relationships with our clients to serve as partners in the business-growth process. As more than just consultants, we are here to truly understand the heart of your business and develop a plan to help you realize your full potential.",
		btnTxt: "Learn More About Us",
		modalId: "freeQuote",
	},
	{
		// img: img5,
		title: "Strategic Planning",
		text: "We don’t take a one-size-fits-all approach when it comes to developing business plans and marketing strategies. Diving deep into the numbers, data, and analysis of your business performance, we identify areas for improvement, key value points, and solid pillars that can serve as the center of your business strategy moving forward.",
		btnTxt: "Explore Our Services",
		modalId: "workingWithUs",
	},
];

export default Feature;
