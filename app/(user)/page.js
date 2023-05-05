import {previewData} from 'next/headers'
import {groq} from 'next-sanity'
import {client} from '../../lib/sanity.client'
import BlogList from '@/components/BlogList'

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`
export default async function Home() {
  if(previewData()){
    return <>Preview mode</>
  }

  const posts = await client.fetch(query)

 return (
  <div className='mainContent_container'>
    <BlogList posts={posts}/>
  
  </div>
  )
}

export const revalidate = 60