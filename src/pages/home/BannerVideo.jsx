import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CloseModal, PlayAgain } from "../../components/Icon";

const BannerVideo = ({ open, setOpen, contactButton }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [end, setIsEnd] = useState(false);
	return (
		<>
			<div className={`custom-modal ${open ? "open" : ""}`}>
				<div
					className="overlay"
					onClick={() => {
						setOpen(false);
						setIsPlaying(false);
					}}
				>
					<div style={{ cursor: "pointer" }}>
						<CloseModal />
					</div>
				</div>
				<div
					className="custom-modal-body"
					onClick={() => setIsPlaying(!isPlaying)}
				>
					{!isPlaying && (
						<div className="top-title">
							<h5>The #1 CRM Platform for Coaches</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur. Auctor tortor
								gravida
							</p>
						</div>
					)}
					{end && !isPlaying && (
						<div className="center-btn-grp">
							<button type="button" className="cmn-btn btn-white">
								<PlayAgain /> Play Again
							</button>
							{contactButton ? (
								<HashLink
									to="/trial-signup"
									className="cmn-btn px-xl-5"
									onClick={() => {
										setTimeout(() => {
											setIsPlaying(false);
											setOpen(false);
										}, 100);
									}}
								>
									Get in Touch
								</HashLink>
							) : (
								<Link
									to="/trial-signup"
									className="cmn-btn px-xl-5"
									onClick={() => setIsPlaying(false)}
								>
									Try it Free
								</Link>
							)}
						</div>
					)}
					<div className="video-inner">
						<ReactPlayer
							height={540}
							width={960}
							playing={isPlaying}
							url="https://www.youtube.com/watch?v=gFicda3xgKc"
							controls
							onPlay={() => setIsPlaying(true)}
							onPause={() => setIsPlaying(false)}
							onEnded={() => {
								setIsEnd(true);
								setIsPlaying(false);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default BannerVideo;
