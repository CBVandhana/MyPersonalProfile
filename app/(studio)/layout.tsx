import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
	title: "My Projects!",
	description:
		"This site contains the details and links to the projects and coding base",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
