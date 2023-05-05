import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import {PortableText} from "@portabletext/react"
import { RichTextComponets } from "@/components/RichTextComponents"
import './post.css'


const Post = async ({params}) => {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
    }
    `
    const slug = params.slug

    const post = await client.fetch(query, {slug})
  return (
    <article className='mainPostCont'>
        
        <div className='headerCont'>
            <h1>{post.title}</h1>
            <p className="dateCont">{
                new Date(post._createdAt).toLocaleDateString('en-US',{
                    day:"numeric",
                    month: "long",
                    year: "numeric"

                })
                }
            </p>
        </div>
        
        <div className='contentCont'>
            <PortableText value={post.body} components={RichTextComponets} />    
        </div>
    </article>
  )
}

export default Post

export const revalidate = 60 

export async function generateStaticParams(){ 
    const query = groq`
    *[_type=='post']
    {
        slug
    }
    `
    const slugs =await client.fetch(query)
    const slugRoutes = slugs.map(slug => slug.slug.current)

    return slugRoutes.map(slug =>({
        slug,

    }))
}