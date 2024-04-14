"use client";
import { HeartPulse, Baby, Drumstick, Speech, Dna, CandyOff, Eye, PersonStanding } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { on } from "events";

const health = [
	{
		icon: <HeartPulse size={20} />,
		handle: "Cardiovascular",
	},
	{
		icon: <Baby size={20} />,
		handle: "Reprooductive Health",
	},
	{
		icon: <Drumstick size={20} />,
		handle: "Gastroenterology",
	},
	{
		icon: <Speech size={20} />,
		handle: "Lung",
	},
	{
		icon: <Dna size={20} />,
		handle: "Chronic Conditions",
	},
	{
		icon: <CandyOff size={20} />,
		handle: "Dental Heath",
	},
	{
		icon: <Eye size={20} />,
		handle: "Eye Health",
	},
		{
		icon: <PersonStanding size={20} />,
		handle: "Dermatology",
	},
	
];

export default function Example() {
	const handleCardClick = (topic) => {
		localStorage.setItem("currentTopic", topic); // Set the current topic in local storage
	};

	return (
		<div className="bg-pink-300 pb-10">
			<div className="pb-20">
				<Navigation />
			</div>

			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{health.map((s) => (
						<Card>
							<Link
								href={"llm"}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48  md:p-16 "
								onClick={() => handleCardClick(s.handle)}
							>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange ">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-100 group-hover:text-white font-display drop-shadow-lg">
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