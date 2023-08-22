import { getProject } from "@/sanity/sanity-util";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
type Props = { params: { project: string } };
export default async function Project({
	params,
}: Props) {
	const slug = params.project;
	const project = await getProject(slug);
	return (
		<div>
			<header className="flex justify-between items-center">
				<h1 className="bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold">
					{project.name}
				</h1>
				<a
					href={project.url}
					target="_blank"
					title="View Project"
					rel="noopener noreferrer"
					className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hober:text-pink-100 transistion"
				>
					View Project
				</a>
			</header>
			<div className="text-lg text-gray-700 mt-5">
				<PortableText value={project.content} />
			</div>
			<Image
				src={project.image}
				alt={project.alt}
				width={1920}
				height={1080}
				className="mt-10 border-2 border-gray-700  object-cover rounded-xl"
			/>
		</div>
	);
}
