/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "@/components/ui/button";

export default function Hero() {
	return (
		<div className="min-h-screen w-full max-w-7xl mx-auto my-12">
			<div className="flex items-center gap-4 flex-col md:flex-row">
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-medium display leading-relaxed flex-1">
					Turning Visionary <span className="text-primary">Ideas</span> into
					Powerful <span className="text-accent">Software</span>
				</h1>
				<div className="flex flex-col gap-2 flex-[0.4]">
					<p className="text-lg text-muted">
						Empowering startups and companies with cutting-edge software
						solutions. Whether you're a budding entrepreneur with a
						groundbreaking idea or an established business seeking innovative
						apps, we've got you covered.
					</p>
					<Button className="max-w-xs">Get in Touch</Button>
				</div>
			</div>
		</div>
	);
}
