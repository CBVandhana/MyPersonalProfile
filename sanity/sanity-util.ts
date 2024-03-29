import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Pages";

export async function getProjects(): Promise<
	Project[]
> {
	return createClient(clientConfig)
		.fetch(groq`*[_type=="project"]{
    _id,
    _creartedAt,
    name,
    "slug": slug.current, 
    "image": image.asset->url,
    url,
    content,
    alt
  }`);
}

export async function getProject(
	slug: string
): Promise<Project> {
	return createClient(clientConfig).fetch(
		groq`*[_type=="project" && slug.current==$slug][0]{
    _id,
    _creartedAt,
    name,
    "slug": slug.current, 
    "image": image.asset->url,
    url,
    content,
    alt
  }`,
		{ slug }
	);
}

export async function getPages(): Promise<
	Page[]
> {
	return createClient(clientConfig)
		.fetch(groq`*[_type=="page"]{
    _id,
    _creartedAt,
    title,
    "slug": slug.current, 
  }`);
}

export async function getPage(
	slug: string
): Promise<Page> {
	return createClient(clientConfig).fetch(
		groq`*[_type=="page" && slug.current==$slug][0]{
    _id,
    _creartedAt,
    title,
    "slug": slug.current, 
    content, 
  }`,
		{ slug }
	);
}
