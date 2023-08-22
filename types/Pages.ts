import { PortableTextBlock } from "sanity";

export type Page = {
	_id: string;
	_ceatedAt: Date;
	title: string;
	slug: string;
	content: PortableTextBlock[];
};
