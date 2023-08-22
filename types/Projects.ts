import { PortableTextBlock } from "sanity";

export type Project = {
	_id: string;
	_ceatedAt: Date;
	name: string;
	slug: string;
	url: string;
	image: string;
	content: PortableTextBlock[];
	alt: string;
};
