import { Link,  json,  useLoaderData } from "@remix-run/react";
import { getContent } from '~/utils/blog.server';
import { CacheControl } from "~/utils/cache-control.server";
import { getSeo } from "~/seo";

import { MarkdownView } from "~/components/Markdown";
import { parseMarkdown } from "~/utils/markdoc.server";
import { LoaderFunctionArgs } from "@remix-run/node";

export const meta = ({ data, matches }) => {
	if(!data) return [];

	const parentData = matches.flatMap((match) => match.data ?? [] );

	return [
		getSeo({
			title: 'Docs',
			description: 'Docs',
			url: `${parentData[0].requestInfo.url}`,
		}),  
	]
}

export let loader = async function({}: LoaderFunctionArgs) {
  const files = await getContent(`docs/index`);
  let post = files && parseMarkdown(files[0].content);

  return json({
    post
  }, {
    headers: {
      "Cache-Control": new CacheControl("swr").toString(),
    }
  });
}

export default function Index() {
	const {post} = useLoaderData<typeof loader>();

	return (
		<article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
			<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">{post.frontmatter.meta.title}</h1>
			<div className="w-full mt-4 prose dark:prose-dark max-w-none">
				{post.body && <MarkdownView content={post.body} />}
			</div>
		</article>
	)
}