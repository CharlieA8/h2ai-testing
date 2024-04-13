"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const health = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/chronark_",
		handle: "Cardiovascular",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		handle: "Reprooductive Health",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		handle: "Gastrointestinal Health",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		handle: "Gastrointestinal Health",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		handle: "Chronic Conditions",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		handle: "Dental Heath",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		handle: "Eye Health",
	},
		{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		handle: "Eye Health",
	},
	
];

export default function Example() {
	return (
		<div className=" bg-pink-300">
			<div className="pb-20">
				<Navigation />
			</div>

			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{health.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
