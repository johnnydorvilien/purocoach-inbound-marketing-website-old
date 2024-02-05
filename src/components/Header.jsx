import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useMobile from "../hooks/useMobile";
import useScroll from "../hooks/useScroll";
import Logo from "../pages/Logo";
import {
	AutomationIcon,
	BusinessIcon,
	CaretDown,
	CaretLeft,
	CaretRight,
	ClearIcon,
	CloseModal,
	CrmIcon,
	Hamburger,
	InboundMarketing,
	IntegrationIcon,
	LoginIcon,
	SalesDevelopmentIcon,
	SearchIcon,
	PieChartIcon
} from "./Icon";

const Header = ({ floating }) => {
	const mobileScreen = useMobile();
	const [submenuOpen, setSubmenuOpen] = useState(false);
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const [searchKey, setSearchKey] = useState("");
	const [errText, setErrText] = useState(false);

	const [subServiceIndex, setSubServiceIndex] = useState(0);

	const scroll = useScroll();

	const handleSearch = (e) => {
		e.preventDefault();
		if (searchKey) {
			setErrText(false);
		} else {
			setErrText(true);
		}
		setTimeout(() => {
			setErrText(false);
		}, 1200);
	};
	return (
		<>
			<header
				className={`${floating ? "floating-header " : ""} ${
					scroll > 0 ? "bg-active" : ""
				}`}
			>
				<div className="container hedercon">
					<div className="header-wrapper">
						<Logo />
						<div className={`menu-wrapper ${open ? "active" : ""}`}>
							<div className="d-lg-none d-flex justify-content-end">
								<div
									className="close-btn"
									onClick={() => {
										setOpen(!open);
									}}
								>
									<ClearIcon />
								</div>
							</div>
							{mobileScreen && submenuOpen ? (
								<div className="mobile-mega-menu d-lg-none">
									<div
										className="back"
										style={{ transform: "translateY(-40px)" }}
										onClick={() => setSubmenuOpen(false)}
									>
										<CaretLeft /> Back
									</div>
									<MegaMenu
										subServiceIndex={subServiceIndex}
										setSubServiceIndex={setSubServiceIndex}
									/>
								</div>
							) : (
								<>
									<ul className="menu me-xxl-5">
										<li>
											<NavLink className="menu-link" to="/about">
												About
											</NavLink>
										</li>
										{/* <li
											className="position-relative d-lg-none"
											onClick={() => {
												setSubmenuOpen(true);
												setSubServiceIndex(0);
											}}
										>
											<span className="menu-link">
											Services
												<CaretRight />
											</span>
											<span className="sub-txt">
												Products Build to power seamless lending.
											</span>
										</li> */}
										{/* <li
											className="position-relative d-lg-none"
											onClick={() => {
												setSubmenuOpen(true);
												setSubServiceIndex(1);
											}}
										>
											<span className="menu-link">
												Services
												<CaretRight />
											</span>
											<span className="sub-txt">
												Products Build to power seamless lending.
											</span>
										</li> */}
										{/* <li className="position-relative d-none d-lg-block">
											<div className="menu-link">
												{/* Products & Services{" "} */}
												{/* Services */}
												{/* <span className="caret">
													<CaretDown />
												</span> */}
											{/* </div> */}
											{/* <MegaMenu
												subServiceIndex={subServiceIndex}
												setSubServiceIndex={setSubServiceIndex}
											/>
										</li> */} 
										<li>
											<NavLink
												className="menu-link"
												to="/services"
											>
												{/* Pricing */}
												Services
											</NavLink>
										</li>
										<li>
											<NavLink
												className="menu-link"
												to="/pricing?inbound-marketing"
											>
												{/* Pricing */}
												Packages
											</NavLink>
										</li>
										<li>
											<NavLink className="menu-link" to="/contact">
												Contact
											</NavLink>
										</li>
									</ul>
									<div className="d-lg-none">
										<HeaderRight setShow={setShow} />
									</div>
								</>
							)}
						</div>
						<div
							className="header-bar d-lg-none"
							onClick={() => {
								setOpen(!open);
								setSubmenuOpen(false);
							}}
						>
							<Hamburger />
						</div>
						<div className="d-none d-lg-block">
							<HeaderRight setShow={setShow} />
						</div>
					</div>
				</div>
			</header>
			<div className={`search-form ${show ? "active" : ""}`}>
				<div className="backdrop" onClick={() => setShow(false)}></div>
				<div
					style={{
						cursor: "pointer",
						position: "absolute",
						right: "16px",
						top: "16px",
					}}
					onClick={() => setShow(false)}
				>
					<CloseModal />
				</div>
				<form onSubmit={handleSearch}>
					<div className="position-relative">
						<input
							className="form-control form--control"
							value={searchKey}
							onChange={(e) => setSearchKey(e.target.value)}
							type="text"
						/>
						<button
							className="eye border-0 outline-0 shadow-none bg-transparent"
							type="submit"
						>
							<SearchIcon />
						</button>
					</div>
					{errText ? (
						<div className="err-text">Please Enter Search Keywords</div>
					) : (
						""
					)}
				</form>
			</div>
		</>
	);
};
const MegaMenu = ({ subServiceIndex, setSubServiceIndex }) => {
	return (
		<div className="mega-menu">
			<div className="mega-menu-left">
				{data?.map((item, i) => (
					<div
						className={`item ${subServiceIndex === i ? "active" : ""}`}
						onMouseOver={() => setSubServiceIndex(i)}
						key={`i-${i}`}
					>
						{item?.left?.title && (
							<h5 className="subtitle">{item?.left?.title}</h5>
						)}
						{item?.left?.text && <p>{item?.left?.text}</p>}
					</div>
				))}
			</div>
			{data?.map((item, i) => (
				<React.Fragment key={i}>
					{subServiceIndex === i && (
						<div className="mega-menu-right">
							<div className="row g-4">
								{item?.right?.map((subitem, j) => (
									<div className="col-sm-6" key={i}>
										<HashLink to={subitem?.url} className="sub-item">
											<div className="icon">{subitem?.icon}</div>
											<div className="cont">
												{subitem?.title && (
													<h6 className="subtitle">
														{subitem?.title}
													</h6>
												)}
												{subitem?.text && (
													<p className="subtext">
														{subitem?.text}
													</p>
												)}
											</div>
										</HashLink>
									</div>
								))}
							</div>
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	);
};
const HeaderRight = ({ setShow }) => {
	return (
		<>
			<div className="header-right">
				{/* <Link to="/auth/login" className="login-btn">
					<LoginIcon />
					<span>Log in</span>
				</Link> */}
				<Link to="/trial-signup" className="cmn-btn">
				Get a Free Consultation
				</Link>
				{/* <button
					className="btn p-0 border-0 outline-0 login-btn"
					type="button"
					onClick={() => setShow(true)}
				>
					Login
					<SearchIcon />
				</button> */}
			</div>
		</>
	);
};

const data = [
	// {
	// 	left: {
	// 		title: "Products",
	// 		text: "Lorem ipsum dolor sit amet consectetur",
	// 	},
	// 	right: [
	// 		{
	// 			icon: <CrmIcon />,
	// 			title: "CRM Software",
	// 			text: "Lorem ipsum dolor sit amet consectetur",
	// 			url: "/products-crm",
	// 		},
	// 	],
	// },
	{
		left: {
			title: "Services",
			text: "Lorem ipsum dolor sit amet consectetur",
		},
		right: [
			// {
			// 	icon: <InboundMarketing />,
			// 	title: "Inbound Marketing",
			// 	text: "Lorem ipsum dolor sit amet consectetur",
			// 	url: "/services/#inbounding",
			// },
			{
				icon: <AutomationIcon />,
				title: "Sales Funnel ",
				text: "Lorem ipsum dolor sit amet consectetur",
				url: "/services/#automation",
			},
			{
				icon: <IntegrationIcon />,
				title: "Email Communication",
				text: "Lorem ipsum dolor sit amet consectetur",
				url: "/services/#integration",
			},
			{
				icon: <SalesDevelopmentIcon />,
				title: "Workflows & Sequences",
				text: "Lorem ipsum dolor sit amet consectetur",
				url: "/services/#sales-development",
			},
			{
				icon: <PieChartIcon />,
				title: "Reporting & KPI Performances",
				url: "/services/#business-coaching",
			},
		],
	},
];

export default Header;
