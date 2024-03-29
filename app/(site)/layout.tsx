import { getPages } from "@/sanity/sanity-util";
import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "My Projects!",
	description:
		"This site contains the details and links to the projects and coding base",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const Pages = await getPages();

	return (
		<html lang="en">
			<body className="max-w-3xl mx-auto py-10">
				<header className="flex items-center justify-between">
					<Link
						href="/"
						className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
					>
						Home
					</Link>
					<div className="flex items-center gap-5 text-sm text-gray-600">
						{Pages.map((page) => (
							<Link
								href={`/${page.slug}`}
								key={page._id}
								className="hover:underline"
							>
								{page.title}
							</Link>
						))}
					</div>
				</header>
				<main className="py-20">{children}</main>
			</body>
		</html>
	);
}
