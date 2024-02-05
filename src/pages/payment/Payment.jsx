import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { InfoIcon } from "../../components/Icon";
import Input from "../../components/Input";
import RangeItem from "../../components/RangeItem";
import Select from "../../components/Select";
import PaymentLayout from "./PaymentLayout";
import payment from "./img/credit-card.png";
import paypal from "./img/paypal.png";
const Payment = () => {
	const [service, setService] = useState("Premium");
	const [yearly, setYearly] = useState(true);
	const [cardNumber, setCardNumber] = useState("");
	const [expDate, setExpDate] = useState("");
	const [cvv, setCVV] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [postCode, setPostCode] = useState("");
	const [country, setCountry] = useState("");
	const [phone, setPhone] = useState("");
	const [state, setState] = useState("");
	const [company, setCompany] = useState("");
	const navigate = useNavigate();

	const [cardValue, setCardValue] = useState("credit-card");

	const [submit, setSubmit] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();

		setSubmit(true);
		if (address && city && postCode && country && phone && state) {
			if (cardValue == "credit-card") {
				setSubmit(true);
				if (cardNumber && expDate && cvv && firstName && lastName) {
					setSubmit(false);
					navigate("/payment/complete");
				}
			} else {
				setSubmit(false);
				navigate("/payment/complete");
			}
		}

		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<>
			<PaymentLayout>
				<div className="pricing-spacing">
					<div className="section-title">
						<h2 className="title title-xl-title pb-0 text-base">
							Complete Payment
						</h2>
						{/* <br /> */}
						<p className="txt mx-auto" style={{ maxWidth: "1170px" }}>
							Lorem ipsum dolor sit amet consectetur. Turpis sit iaculis
							tristique aliquam eu adipiscing.
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="row g-4">
							<div className="col-lg-7 col-xl-8">
								<div className="row g-4">
									<div className="col-12">
										<div className="payment-card">
											<div className="row g-4 align-items-end ">
												<div className="col-md-6">
													<div className="font-xl">
														<Select
															value={service}
															setValue={setService}
															data={data}
															label="Select service"
														/>
													</div>
												</div>
												<div className="col-md-6">
													<div className="tab-btn-grp style-2">
														<Link
															to="#"
															className={yearly ? "" : "active"}
															onClick={() => setYearly(false)}
														>
															Monthly
														</Link>
														<Link
															to="#"
															className={yearly ? "active" : ""}
															onClick={() => setYearly(true)}
														>
															Yearly
														</Link>
														<span className="badge">-25%</span>
													</div>
												</div>
											</div>
											<div className="payment-range mb-4 mt-5">
												<RangeItem />
											</div>
											<div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-between gap-2">
												<label className="form-check form--radio">
													<input
														className="form-check-input"
														type="radio"
														name="gateway-name"
														checked={
															cardValue == "credit-card"
																? true
																: false
														}
														onChange={(e) =>
															setCardValue("credit-card")
														}
													/>
													<span className="form-check-label">
														Credit card
													</span>
												</label>
												<div
													className="w-sm-0 flex-grow-1"
													style={{ maxWidth: "400px" }}
												>
													<img src={payment} alt="" />
												</div>
											</div>
											<br />
											<div className="row g-4">
												<div className="col-12">
													<Input
														placeholder="Card number"
														value={cardNumber}
														setValue={setCardNumber}
														infoText="Credit Card Number"
														submit={submit}
														errText={
															cardValue == "credit-card"
																? "Credit Card Number is required"
																: ""
														}
													/>
												</div>
												<div className="col-sm-6">
													<Input
														placeholder="Expiration date"
														value={expDate}
														setValue={setExpDate}
														infoText="Expiry Date"
														submit={submit}
														errText={
															cardValue == "credit-card"
																? "Expiry Date Number is required"
																: ""
														}
													/>
												</div>
												<div className="col-sm-6">
													<Input
														placeholder="CVV"
														value={cvv}
														setValue={setCVV}
														infoText="CVV"
														submit={submit}
														errText={
															cardValue == "credit-card"
																? "CVV Number is required"
																: ""
														}
													/>
												</div>
												<div className="col-sm-6">
													<Input
														placeholder="First Name"
														value={firstName}
														setValue={setFirstName}
														submit={submit}
														errText={
															cardValue == "credit-card"
																? "First Name is required"
																: ""
														}
													/>
												</div>
												<div className="col-sm-6">
													<Input
														placeholder="Last Name"
														value={lastName}
														setValue={setLastName}
														submit={submit}
														errText={
															cardValue == "credit-card"
																? "Last Name is required"
																: ""
														}
													/>
												</div>
											</div>
											<hr style={{ marginBlock: "20px" }} />
											<div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-between">
												<label className="form-check form--radio">
													<input
														className="form-check-input"
														type="radio"
														name="gateway-name"
														checked={
															cardValue == "paypal"
																? true
																: false
														}
														onChange={(e) =>
															setCardValue("paypal")
														}
													/>
													<span className="form-check-label">
														Paypal
													</span>
												</label>
												<div
													className="w-sm-0 flex-grow-1"
													style={{ maxWidth: "400px" }}
												>
													<img src={paypal} alt="" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-12">
										<div className="payment-card">
											<h5 className="title">Invoice details</h5>
											<div className="row g-4">
												<div className="col-12">
													<Input
														placeholder="Address"
														value={address}
														setValue={setAddress}
														infoText="Invoice Address"
														submit={submit}
														errText="Invoice Address is required"
													/>
												</div>
												<div className="col-sm-6">
													<Input
														placeholder="City"
														value={city}
														setValue={setCity}
														submit={submit}
														errText="City is required"
													/>
												</div>
												<div className="col-sm-6">
													<Input
														placeholder="Postal Code"
														value={postCode}
														setValue={setPostCode}
														submit={submit}
														errText="Post Code is required"
													/>
												</div>
												<div className="col-sm-6">
													<Select
														data={countries}
														value={country}
														setValue={setCountry}
														submit={submit}
														errText="Country is required"
													/>
												</div>
												<div className="col-sm-6">
													<Select
														data={states}
														value={state}
														setValue={setState}
														submit={submit}
														errText="States is required"
													/>
												</div>
												<div className="col-sm-6">
													<Input
														placeholder="Phone"
														value={phone}
														setValue={setPhone}
														submit={submit}
														errText="Phone Number is required"
													/>
												</div>
												<div className="col-sm-6">
													<Input
														placeholder="Company Name (Optional)"
														value={company}
														setValue={setCompany}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-5 col-xl-4">
								<div className="payment-info-card">
									<h6>Summary</h6>
									<hr />
									<div className="subtxt">Start-ups</div>
									<div className="d-flex justify-content-between start-ups mb-3">
										<div>
											<span
												style={{
													opacity: "0.3",
													color: "var(--base)",
												}}
											>
												$99.00
											</span>{" "}
											$79.00 X 12 month
										</div>
										<strong>$948.00</strong>
									</div>
									<div>
										<span className="badge badge-soft-success">
											YOU SAVE $240.00
										</span>
										<div className="mt-4 d-flex justify-content-between align-items-center pb-2">
											<span>How is this calculated?</span>

											<OverlayTrigger
												placement="top"
												overlay={
													<Tooltip>
														The calculation details texts
													</Tooltip>
												}
											>
												<span>
													<InfoIcon />
												</span>
											</OverlayTrigger>
										</div>
									</div>
									<hr />
									<h5>
										<span>Total</span>
										<span>$948.00</span>
									</h5>
									<hr />
									<button
										className="cmn-btn btn-standard w-100 mt-3"
										type="submit"
									>
										Submit Payment
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</PaymentLayout>
		</>
	);
};
const data = [
	{
		title: "Premium",
		value: "Premium",
	},
	{
		title: "Free",
		value: "Free",
	},
	{
		title: "Basic",
		value: "Basic",
	},
	{
		title: "Professional",
		value: "Professional",
	},
];
const countries = [
	{
		title: "countries",
		value: "",
	},
	{
		title: "Bangladesh",
		value: "Bangladesh",
	},
	{
		title: "Hong Kong",
		value: "Hong Kong",
	},
	{
		title: "USA",
		value: "USA",
	},
];

const states = [
	{
		title: "State",
		value: "",
	},
	{
		title: "Bangladesh",
		value: "Bangladesh",
	},
	{
		title: "Hong Kong",
		value: "Hong Kong",
	},
	{
		title: "USA",
		value: "USA",
	},
];

export default Payment;
