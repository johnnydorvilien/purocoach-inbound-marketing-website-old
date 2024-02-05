import React from "react";
import { QuoteIcon } from "../../components/Icon";
import quoteImg from "./img/quote-img.png";
import mobile from "./img/mobilejohn.png";
import bg from "./img/johnnybg.png";
import { useMediaQuery } from "react-responsive";
const QuoteSection = () => {
	const isMobile = useMediaQuery({  maxWidth: 767 });
	return (
		<section className="quote-section" >
			<div className="container">
				<div className="row gy-4 align-items-center">
					<div className="col-md-6 text-center">
						<div className="quote-image">
							<img src={quoteImg} alt="" />
							<div className="name-area">
								<h6>JOHNNY DORVILIEN</h6>
								<span>Founder & CEO</span>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="ps-xl-4">
							<blockquote className="	">
								<div className="mb-3 pb-xxl-3">
									<QuoteIcon />
								</div>
								<div>
									<p >A seasoned IT field, software architect, sales and marketing director and business executive coach with a track record of helping Fortune 500 companies build secure and scalable software systems with innovative user experiences and marketing solutions that drive profits. Dorvilien’s most notable clients include Equifax, General Motors, HubSpot, UPS, Georgia Pacific, and The Home Depot.</p>
									<p >Dorvilien is also passionate about helping CEOs of small coaching businesses identify the problems they face in their businesses and provide solutions for long-term growth. He is deeply committed to providing leadership for all aspects of PUROCoach operations with an emphasis on long-term goals, growth, profit, and return on investment.</p>
								</div>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default QuoteSection;
