import { getDocs } from '~/utils/blog.server';
import {getDomainUrl} from '~/utils'
import { LoaderFunctionArgs, json } from "@remix-run/node";

export let loader = async ({ request }: LoaderFunctionArgs) => {
  const blogUrl = `${getDomainUrl(request)}`
  
  let url = new URL(request.url);
  let term = url.searchParams.get("term");

  let [docs] = await Promise.all([
    getDocs(),
  ]);    

  const postUrls = [ ...docs].map( post => {
    let url = post.url.replace("//", "/");
    return {
        url: `${blogUrl}${url}`,
        title: post.attributes.meta.title,
        body: post.body,
        type: url.includes('docs/') ? 'Docs' : 'Blog',
    } 
  }) || []
  
  // this function should query the DB or fetch an API to get the users
  const results = term ? postUrls.filter(
    post => post.title.toLowerCase().includes( String(term) ) || 
    post.body.toLowerCase().includes( String(term) ) 
  ) : []
  
  return json({ results });
};