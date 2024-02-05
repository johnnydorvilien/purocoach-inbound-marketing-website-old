import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import VerificationInput from "react-verification-input";
import CheckGroup from "../../components/CheckGroup";
import Copyright from "../../components/Copyright";
import { SuccessIcon } from "../../components/Icon";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Logo from "../Logo";
import FaqsSection from "./FaqsSection";
import Steps from "./Steps";
import TrialBanner from "./TrialBanner";
import Header from '../../components/Header'
import { coachingIndustry, company, countries } from "./data";

const TrialPage = () => {
	const [step, setStep] = useState(1);
	return (
		<>
			<Header />
			<TrialBanner>
				{step === 1 && <Step1 step={step} setStep={setStep} />}
				{step === 2 && <Step2 step={step} setStep={setStep} />}
				{step === 3 && <Step3 step={step} setStep={setStep} />}
				{step === 4 && <Step4 step={step} setStep={setStep} />}
				{step === 5 && <Step5 step={step} setStep={setStep} />}
			</TrialBanner>
			{/* <FaqsSection /> */}
			<Copyright />
		</>
	);
};

const Step1 = ({ step, setStep }) => {
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [jobTitle, setJobTitle] = useState("");

	const [submit, setSubmit] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!fname) {
			// toast.error("First Name is Required", { id: "trial" });
		} else if (!lname) {
			// toast.error("Last Name is Required", { id: "trial" });
		} else if (!jobTitle) {
			// toast.error("Job Title is Required", { id: "trial" });
		} else {
			toast.success("First step successful", { id: "trial" });
			setSubmit(false);
			setStep(2);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};
	return (
		<>
			<h3 className="title">
				Answer a few questions and we’ll get you into your free trial
			</h3>
			<Steps step={step} />
			<p className="txt">
				Complete the form to start your free trial. Our team will be in
				touch to help you make the most of your trial.
			</p>
			<form onSubmit={handleSubmit}>
				<div className="d-flex flex-column gap-25px">
					<Input
						value={fname}
						setValue={setFName}
						placeholder="First Name"
						submit={submit}
						errText="First Name is Required"
					/>
					<Input
						value={lname}
						setValue={setLName}
						placeholder="Last Name"
						submit={submit}
						errText="Last Name is Required"
					/>
					<Input
						value={jobTitle}
						setValue={setJobTitle}
						placeholder="Job Title"
						submit={submit}
						errText="Job Title is Required"
					/>
					<button type="submit" className="cmn-btn w-100 mt-20">
						Next
					</button>
				</div>
			</form>
		</>
	);
};
const Step2 = ({ step, setStep }) => {
	const [coaching, setCoaching] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [country, setCountry] = useState("");
	const [website, setWebsite] = useState("");

	const [submit, setSubmit] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!coaching) {
			// toast.error("Coaching is Required", { id: "trial" });
		} else if (!companyName) {
			// toast.error("Company Name is Required", { id: "trial" });
		} else if (!country) {
			// toast.error("Country is Required", { id: "trial" });
		} else {
			toast.success("Second step successful", { id: "trial" });
			setStep(3);
			setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};
	return (
		<>
			<h3 className="title">
				Answer 5 more questions and we’ll get you into your free trial
			</h3>
			<Steps step={step} />
			<p className="txt">
				Complete the form to start your free trial. Our team will be in
				touch to help you make the most of your trial.
			</p>
			<form onSubmit={handleSubmit}>
				<div className="d-flex flex-column gap-25px">
					<Select
						data={coachingIndustry}
						value={coaching}
						setValue={setCoaching}
						submit={submit}
						errText="Coaching is required"
					/>
					<Input
						data={company}
						value={companyName}
						setValue={setCompanyName}
						placeholder="Company Name"
						submit={submit}
						errText="Company name is required"
					/>
					<Input
						value={website}
						setValue={setWebsite}
						placeholder="Company's Website (if any)"
					/>
					<Select
						data={countries}
						value={country}
						setValue={setCountry}
						submit={submit}
						errText="Country is required"
					/>
					<div className="d-flex gap-15px w-100 mt-20">
						<button
							type="button"
							className="cmn-btn btn-outline"
							onClick={() => setStep(step - 1)}
						>
							Back
						</button>
						<button type="submit" className="cmn-btn">
							Next
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
const Step3 = ({ step, setStep }) => {
	const [phone, setPhone] = useState("");
	const [phoneFormated, setPhoneFormated] = useState(
		`(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
	);
	const [email, setEmail] = useState("");
	const [agree, setAgree] = useState(true);
	const [marketing, setMarketing] = useState(false);
	const [submit, setSubmit] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!phone) {
			// toast.error("Phone is Required", { id: "trial" });
		} else if (!email) {
			// toast.error("Email is Required", { id: "trial" });
		} else if (!agree) {
			// toast.error("Please Agree to the Service Agreement", { id: "trial" });
		} else {
			toast.success(
				"Successful registration. Please Verify your email address",
				{ id: "trial" }
			);
			setStep(4);
			setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	useEffect(() => {
		setPhoneFormated(
			`(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
		);
	}, [phone]);

	return (
		<>
			<h3 className="title">
				Answer 2 more questions and we’ll get you into your free trial.
			</h3>
			<Steps step={step} />
			<p className="txt">
				Complete the form to start your free trial. Our team will be in
				touch to help you make the most of your trial.
			</p>
			<form onSubmit={handleSubmit}>
				<div className="d-flex flex-column gap-25px">
					<Input
						name="phone"
						type="number"
						value={phone}
						setValue={setPhone}
						placeholder="Phone"
						secondaryValue={phoneFormated}
						submit={submit}
						errText="Phone is Required"
					/>
					<Input
						value={email}
						setValue={setEmail}
						placeholder="Company Email"
						submit={submit}
						errText="Company Email is Required"
					/>
					<CheckGroup value={agree} setValue={setAgree}>
						<p style={{fontSize:"14px"}}>I agree to the <Link to="#">Main Services Agreement.</Link></p>
					</CheckGroup>
					<div className="register-txt">
						By registering, you agree to the processing of your personal
						data by PuroCoach as described in the Privacy Statement.
					</div>
					<CheckGroup value={marketing} setValue={setMarketing}>
						<p style={{fontSize:"14px", lineHeight:"normal"}}>Yes, I would like to receive marketing communications
						regarding PuroCoach products, services, and events. I can
						unsubscribe at any time.</p>
					</CheckGroup>
					<div className="d-flex gap-15px w-100 mt-20">
						<button
							type="button"
							className="cmn-btn btn-outline"
							onClick={() => setStep(step - 1)}
						>
							Back
						</button>
						<button type="submit" className="cmn-btn">
							Next
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
const Step4 = ({ step, setStep }) => {
	const [code, setCode] = useState("");
	const [error, setError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setError(true);
		if (code?.toString().length < 6) {
			toast.error("Please enter verification code", { id: "auth" });
		} else {
			toast.success("Trial sign up successful", {
				id: "auth",
			});
			setStep(5);
			setError(false);
		}

		setTimeout(() => {
			setError(false);
		}, 1200);
	};
	const handleSubmit2 = () => {
		setError(true);
		if (code?.toString().length >= 5) {
			toast.success("Trial sign up successful", {
				id: "auth",
			});
			setStep(5);
			setError(false);
		}

		setTimeout(() => {
			setError(false);
		}, 1200);
	};
	return (
		<>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="verify-content text-center"
			>
				<h3 className="title">Email Verification</h3>
				<div className="d-flex flex-column gap-20px">
					<div className="text">
						We sent a 6 digit security code to the email provided. Please
						double check spam folders
					</div>
					<VerificationInput
						value={code}
						onChange={(value) => setCode(value)}
						placeholder=""
						onComplete={handleSubmit2}
					/>
					{error && (
						<span className="err-text">
							Please Enter your verification code
						</span>
					)}
					<div className="text-start">
						<span className="resend-code text-base">Resend code</span>
					</div>
					<button type="submit" className="cmn-btn w-100">
						Verify
					</button>
				</div>
			</form>
		</>
	);
};
const Step5 = ({ step, setStep }) => {
	return (
		<>
			<div className="verify-content text-center">
				<SuccessIcon />
				<h3 className="title">You're successfully signed-up</h3>
				<div className="d-flex flex-column gap-20px">
					<div className="text">
						Start my onboarding or take me to the CRM
					</div>
					<div className="w-100">
						<Link
							to="/"
							className="cmn-btn w-100 mx-auto"
							style={{ maxWidth: "254px" }}
						>
							Get started
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrialPage;
