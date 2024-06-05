"use client";

import reactLogo from "../assets/logos/react.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import bootstrapLogo from "../assets/logos/bootstrap.svg";
import nextLogo from "../assets/logos/next.svg";
import reduxLogo from "../assets/logos/redux.svg";
import tailwindcssLogo from "../assets/logos/tailwindcss.svg";

import project1 from "../assets/projects/project1.jpg";
import billManager from "../assets/projects/weatherapp.png";

import brain from "../assets/soft/brain.svg";
import bulb from "../assets/soft/bulb.svg";
import hammer from "../assets/soft/hammer.svg";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import myPhoto from "../assets/myPhoto.jpg";
import Dual_blob from "../assets/Regular_blob.svg";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
	gsap.registerPlugin(useGSAP, ScrollTrigger);
	const container = useRef();
	const newContainer = useRef();
	const logoTransition = useRef();

	const handleScroll = (Id) => {
		const element = document.getElementById(Id);

		element.scrollIntoView({ behavior: "smooth" });
	};

	useGSAP(
		() => {
			gsap.to(".box", {
				scrollTrigger: {
					trigger: ".box",
					scrub: 2,
				},
				opacity: +1,
				duration: 1,
				x: 150,
			}),
				gsap.to(".text", {
					scrollTrigger: {
						trigger: ".text",
						scrub: 2,
					},
					opacity: +1,
					duration: 2,
					x: -270,
				});
		},
		{ scope: container }
	);

	useGSAP(
		() => {
			gsap.to(".leftSoft", {
				scrollTrigger: {
					trigger: ".leftSoft",
					scrub: 2,
				},
				opacity: +1,
				duration: 1,
				x: 150,
			}),
				gsap.to(".rightSoft", {
					scrollTrigger: {
						trigger: ".rightSoft",
						scrub: 1,
					},
					opacity: 1,
					duration: 1,
					x: -150,
				}),
				gsap.to(".middleSoft", {
					scrollTrigger: {
						trigger: "middleSoft",
						scrub: 2,
					},
					opacity: 2,
					duration: 1,
					y: -100,
				});
		},
		{ scope: newContainer }
	);

	return (
		<>
			<nav className="flex justify-between p-8 mx-8">
				<div>
					<h1 className="text-gray-300 text-3xl">Portfolio</h1>
				</div>
				<div className="flex">
					<button
						onClick={() => handleScroll("intro")}
						className="mx-4 text-gray-300 text-3xl hover:text-gray-500">
						Intro
					</button>
					<button
						onClick={() => handleScroll("projects")}
						className="mx-4 text-gray-300 text-3xl hover:text-gray-500">
						Projects
					</button>
					<button
						onClick={() => handleScroll("contact")}
						className="mx-4 text-gray-300 text-3xl hover:text-gray-500">
						Contact
					</button>
				</div>
			</nav>

			<div
				style={{
					height: "90vh",
				}}
				className=" flex justify-center items-center">
				<div className="grid grid-cols-2 h-full  px-24">
					<div className="flex justify-center items-center">
						<ReactTyped
							typeSpeed={80}
							strings={["Mohammad Mahdi Damirchi"]}
							className=" text-8xl font-bold text-gray-300  "
						/>
					</div>
					<div
						ref={logoTransition}
						className=" flex justify-center  items-center -z-40 p-16">
						<Image
							style={{
								mask: `url(${Dual_blob.src})`,
								maskRepeat: "no-repeat",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
							}}
							loading="lazy"
							width={800}
							height={800}
							src={myPhoto}
							className="shadow-2xl mt-10"
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center  mb-20">
				<div className=" w-4/6  rounded-lg ">
					<div class="logos">
						<div class="logos-slide">
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={reactLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={javascriptLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={htmlLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={cssLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={bootstrapLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={nextLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={tailwindcssLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={reduxLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={reactLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={javascriptLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={htmlLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={cssLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={bootstrapLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={nextLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={tailwindcssLogo.src}
							/>
							<Image
								width={100}
								height={100}
								loading="lazy"
								src={reduxLogo.src}
							/>
						</div>
					</div>
				</div>
			</div>

			<div id="intro" className="flex justify-center w-full ">
				<div className="w-3/5 p-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500">
					<div className="bg-slate-900 w-full h-full p-6">
						<h1 className="text-center text-4xl text-gray-200">Introduction</h1>
						<h1 className="text-gray-200 text-lg px-20 mt-10">
							Hello!! i'm Mohammad. I'm a junior front-end developer with 2
							years of programming experience with React js library and Next js
							framework.
						</h1>
						<h1 className="text-gray-200 text-lg px-20 mt-3">
							If you want to know more about my skills download my resume down
							below 👇. Or you can check out my latest projects on this
							website.Thanks for putting the time to see my portfolio😉.
						</h1>
						<div className="flex justify-center mt-10">
							<a
								target="_blank"
								href="https://uupload.ir/view/myresume-525[www.cvbuilder.me]611_esxs.pdf/"
								className="p-5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 shadow-lg rounded-full text-gray-200 border hover:border-pink-500 text-xl">
								Download resume
							</a>
						</div>
					</div>
				</div>
			</div>

			<div ref={newContainer} className="flex justify-between mt-60">
				<div className="h-48 w-1/4 leftSoft opacity-10 p-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
					<div className="w-full h-full bg-slate-900  rounded-lg p-6">
						<Image
							src={brain}
							width={80}
							height={80}
							className="absolute -top-10 right-10 "
						/>
						<h1 className="text-gray-200 text-2xl">Critical-thinker</h1>
						<h1 className="text-lg text-gray-200 mt-3">
							one of the most essential parts of progamming is thinking
							critically.
						</h1>
					</div>
				</div>
				<div className=" middleSoft opacity-0 h-48 w-1/4  p-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
					<div className="w-full h-full bg-slate-900  rounded-lg p-6">
						<Image
							src={hammer}
							width={80}
							height={80}
							className="absolute -top-10 right-10"
						/>
						<h1 className="text-gray-200 text-2xl">Hard-worker</h1>
						<h1 className="text-lg text-gray-200 mt-3">
							when it comes to working hard i'm your guy!!
						</h1>
					</div>
				</div>
				<div className=" h-48 w-1/4 rightSoft opacity-10 p-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
					<div className="w-full h-full bg-slate-900  rounded-lg p-6">
						<Image
							src={bulb}
							width={80}
							height={80}
							className="absolute -top-10 right-10"
						/>
						<h1 className="text-gray-200 text-2xl">Problem-solver</h1>
						<h1 className="text-lg text-gray-200 mt-3">
							Problem solving is my energy drink no matter how long it takes.
						</h1>
					</div>
				</div>
			</div>

			<div id="projects" className="flex justify-center mt-60">
				<div className="w-full bg-slate-900 px-20 pt-10">
					<div className="flex justify-center items-center">
						<div className="border-double border-t-4 w-1/3 border-gray-400 inline-flex mx-20"></div>

						<h1 className="text-gray-300 text-center text-4xl opacity-100 projectTitle">
							My projects
						</h1>
						<div className="border-double border-t-4 w-1/3 border-gray-400 inline-flex mx-20"></div>
					</div>

					<div ref={container} className="  ">
						<div className="flex mt-40">
							<div className="w-full flex justify-start text-end items-center">
								<div className="box w-2/5 opacity-0  ">
									<h1 className="text-6xl text-gray-200">Weather-app</h1>
									<h1 className="text-4xl text-gray-200 mt-1">
										Search and get current weather status of your location
									</h1>
								</div>
							</div>
							<div className="text opacity-0 w-4/6 ">
								<Link
									target="_blank"
									href="https://mahdi-dmr1.github.io/weathereact/">
									<Image
										loading="lazy"
										width={600}
										height={400}
										src={billManager}
										className="rounded-lg shadow-lg hover:scale-105 duration-500"
									/>
								</Link>
							</div>
						</div>

						<div className="flex my-40">
							<div className="box opacity-0 w-4/6 ">
								<Link target="_blank" href="https://shop.mahdisportfolio.ir/">
									<Image
										loading="lazy"
										width={600}
										height={400}
										src={project1}
										className="rounded-lg shadow-lg hover:scale-105 duration-500"
									/>
								</Link>
							</div>
							<div className="w-full flex justify-end items-center">
								<div className="text w-2/5 opacity-0  ">
									<h1 className="text-6xl text-gray-200">E-commerce</h1>
									<h1 className="text-4xl text-gray-200 mt-1">
										This project is a replica of the popular computer hardware
										store called meghdadIT
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="contact" className="mt-32">
				<div className="flex items-center justify-center">
					<div className="border-double border-t-4 w-1/3 border-gray-400 inline-flex mx-20"></div>
					<h1 className="text-gray-200 text-4xl text-center">Contact me</h1>
					<div className="border-double border-t-4 w-1/3 border-gray-400 inline-flex mx-20"></div>
				</div>
				<div className="grid grid-cols-2 mx-32 p-20 gap-12">
					<div>
						<label className="text-gray-200 text-lg px-2">First name:</label>
						<input
							placeholder="Example: John"
							type="text"
							className="mt-2 w-full bg-gray-700 border border-gray-600 text-gray-300 shadow-lg text-lg rounded-lg focus:ring-0 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2.5"
						/>
					</div>
					<div>
						<label className="text-gray-200 text-lg px-2">Last name:</label>
						<input
							placeholder="Example: Davidson"
							type="text"
							className="mt-2 w-full bg-gray-700 border border-gray-600 text-gray-300 shadow-lg text-lg rounded-lg focus:ring-0 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2.5"
						/>
					</div>
					<div className="col-span-2">
						<label className="text-gray-200 text-lg px-2">Email address:</label>
						<input
							placeholder="Example@emailprovider.com"
							type="email"
							className="mt-2 w-full bg-gray-700 border border-gray-600 text-gray-300 shadow-lg text-lg rounded-lg focus:ring-0 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2.5"
						/>
					</div>

					<div className="col-span-2">
						<label className="text-gray-200 text-lg px-2">Message:</label>
						<textarea
							placeholder="Example: I'm emailing you regarding the project..."
							type="text"
							className="mt-2 w-full bg-gray-700 border border-gray-600 text-gray-300 shadow-lg text-lg rounded-lg focus:ring-0 focus:outline-none focus:ring-blue-500 focus:border-blue-500 p-2.5"
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<button className="py-5 px-8 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 shadow-lg rounded-full text-gray-200 border hover:border-pink-500 text-xl">
						Submit
					</button>
				</div>
			</div>

			<Image
				src={reactLogo}
				width={600}
				height={600}
				className="absolute -z-50 top-10 -left-40 opacity-20 "
			/>
			<Image
				src={reduxLogo}
				width={300}
				height={300}
				className="absolute -z-50 top-full left-40 opacity-10 rotate-45 "
			/>
			<Image
				src={nextLogo}
				width={200}
				height={200}
				className="absolute -z-50 top-40 left-96 opacity-10 rounded-lg "
			/>

			<div className=" bottom-5 flex sticky ">
				<Link
					target="_blank"
					href="https://github.com/Mahdi-dmr1"
					className="transparent rounded-full p-2 hover:bg-black border border-gray-700 mx-2 hover:scale-125 duration-200">
					<FaGithub className="text-4xl text-gray-800 hover:text-white" />
				</Link>
				<Link
					target="_blank"
					href="https://www.linkedin.com/in/mohammad-damirchi"
					className="transparent rounded-full p-2 hover:bg-blue-800 border border-gray-700 mx-2 hover:scale-125 duration-200">
					<FaLinkedinIn className="text-4xl text-gray-800 hover:text-white" />
				</Link>
				<Link
					target="_blank"
					href="https://t.me/mahdi_dmr"
					className="transparent rounded-full p-2 hover:bg-blue-600 border border-gray-700 mx-2 hover:scale-125 duration-200">
					<FaTelegramPlane className="text-4xl text-gray-800 hover:text-white" />
				</Link>
				<Link
					target="_blank"
					href="https://wa.me/+989122713600"
					className="transparent rounded-full p-2 hover:bg-green-600 border border-gray-700 mx-2 hover:scale-125 duration-200">
					<IoLogoWhatsapp className="text-4xl text-gray-800 hover:text-white" />
				</Link>
			</div>
		</>
	);
}
