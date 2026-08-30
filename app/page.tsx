import Hero from "@/components/home/hero";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-4">
			<DotPattern
				width={30}
				height={30}
				cx={1}
				cy={1}
				cr={0.7}
				className={cn(
					"[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
				)}
			/>
			<Hero />
		</div>
	);
}
