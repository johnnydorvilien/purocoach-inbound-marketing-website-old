import React from "react";

import { Link } from "react-router-dom";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img from "./img/about-shape.png";
import white from "./img/white.png";
import mobile from "./img/mobilemission.png";
import { useMediaQuery } from "react-responsive";

const AboutUsSection = () => {
	const shouldRenderButton = (title) => {
		return title === "Our Mission" || title === "Our Vision";
	  };
	  const isMobile = useMediaQuery({  maxWidth: 767 });
	return (
		<>
			<section className="about-section" >
			{window.innerWidth > 991 && (
			<div className="service-section-bg"></div>
			)}
				<div className="container">
					<div className="d-flex flex-column ">
						{data?.map((item, i) => (
							<div className="about-item" key={i}>
								<div className="about-item-img col-lg-6">
									<img src={item?.img} alt="" />
								</div>
								<div className="about-item-cont col-lg-6">
									<div className="cont"  >
										<h2 className="title">{item?.title}</h2>
										{/* <h4 className="txt">{item?.text}</h4> */}
										{Array.isArray(item?.text) ? (
                      item?.text?.map((txt, j) => (
                        <p key={j}>{txt}</p>
                      ))
                    ) : (
                      <p>{item?.text}</p>
                    )}
										{shouldRenderButton(item?.title) && (
                      <div className="d-flex">
                        <Link to="/services?goback" className="cmn-btn">
                          Explore Our Services
                        </Link>
                      </div>
                    )}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

const data = [
	{
		img: img1,
		title: "Our Team",
		text: [
			"Our marketing, sales and engineering team consists of strong and dedicated in-house experts who are passionate and eager to provide proven marketing consulting strategies, automation and sales development services to help coaches and consultants thrive in their businesses.",
			"We are skilled, knowledgeable, and client-focused, with years of experience in offering B2B marketing strategies and business sales development coaching and support. We help many business-driven coaches and consultants entrepreneurs achieve great business success. Whether they are focused on providing consulting services, life-coaching, business, self-development, fitness, health and wellness, finance, career development, relationship, or leadership coaching, we can get you great results as you scale and grow your business quickly, organically, and effectively.",
		],
	},
	{
		img: img3,
		title: "Our Mission",
		text: "At PUROCoach, our mission is to do the heavy lifting, running the engine that drives coaching and consulting businesses. We are dedicated to helping coaches and consultants boost their marketing and sales productivity, giving them more freedom, time, and money-saving strategies, so they can focus on the clients that matter the most.",
	},
	{
		img: img2,
		title: "Our Vision",
		text: "Our mission is to offer coaches innovative, tailored business and marketing solutions and equip them with the right software tools so they can increase productivity, save time as they pursue their business goals, and have more time for their clients. Our aim is to give coaches more freedom to operate in good conscience with their day-to-day business decision-making while inspiring and empowering them to pursue their passion along their entrepreneurial journey."
	},
];

export default AboutUsSection;
