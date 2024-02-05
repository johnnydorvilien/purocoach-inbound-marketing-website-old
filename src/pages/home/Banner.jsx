import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import img from "../../assets/img/banner/banner-shape.png";
import bannerImage from "../../assets/img/banner/banner-thumb.png";
import { VideoIcon } from "../../components/Icon";
import useScreen from "../../hooks/useScreen";
import BannerVideo from "./BannerVideo";
import bannerMan from "./img/banner-man.png";
import bg from "./img/bg1.png";
import mobile from "./img/mobile.png";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
	const [open, setOpen] = useState(false);
	const screen = useScreen();
	const isMobile = useMediaQuery({  maxWidth: 767 });
	const istablet = useMediaQuery({ maxWidth: 991 });
	return (
		<>
			<section className="banner-section home" style={{
						background: `url(${window.innerWidth > 767 ? bg : mobile}) no-repeat top right / cover`,display:"block",backgroundSize:"100% 100%",
					
						}}>
							
				<div>
							<div className="container" >
								<div className="banner-wrapper">
									<div className="banner-content">
										<h1 className="title" style={{fontSize: isMobile ? "32px" : " ", textAlign: isMobile ? "center" : ""}}>Inbound Marketing</h1>
										<h2 className="subtitle">
											 for{" "}
											<span style={{ color: "#FF9D2A" , fontStyle:"italic"}}>Coaches</span>{" "}
											 &{" "}
                                            <span style={{ color: "#FF9D2A" , fontStyle:"italic"}}>Consltants</span>
										</h2>
										{/* <div className="txt">{item?.txt}</div> */}
										<div className="txt" style={{fontSize: isMobile ? "20px " : " ",  textAlign: isMobile ? "center" : "", maxWidth: isMobile ? "74%" : " "}}>
										{screen > 767 ? "Get  Noticed - Generate Leads - Win Customers" : "Get  Noticed  Generate Leads  Win Customers"}
											{/* {screen > 767
												? item?.txt
												: item?.txt.replace(/-/g, "")} */}
										</div>
										<BtnGrp open={open} setOpen={setOpen} screenWidth={screen}/>
									</div>
									{screen >767 && (
										<div className="banner-thumb">
										<img
											src={bannerImage}
											alt=""
											style={{ marginLeft:istablet ?  " ": "-110px", paddingTop:istablet ? "0" : "70px",paddingBottom:istablet ? "0" : "30px",}}
										/>
										</div>
                 			 		)}
								</div>
							</div>
				</div>
				
			</section>
			<BannerVideo open={open} setOpen={setOpen} />
		</>
	);
};
export const BtnGrp = ({ open, setOpen, screenWidth}) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return (
		<>
			<div className="btn-grp">
			<Link className="cmn-btn btn-white" to="/trial-signup" style={{marginTop:isMobile ? "40px" : ""}}>
          		{screenWidth > 767 ? "Get Started" : "Schedule a Free Consultation"}
        	</Link>

			</div>
		</>
	);
};

const data = [
	{
		// txt: "We run the engine that drives your coaching business",
		txt: "Get  Noticed - Generate Leads - Win Customers",
	},
	{
		txt: "lorem ipsum dolor ",
	},
];

export default Banner;
