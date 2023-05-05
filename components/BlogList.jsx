'use client'
import Image from 'next/image'
import classes from './BlogList.module.css'
import urlFor from '@/lib/urlFor'
import ClampLines from 'react-clamp-lines'
import ClientSideRoute from './ClientSideRoute'

const BlogList = ({posts}) => {
    const readMoreHandler = () =>{}
    
  return (
    <div className={classes.blogListMainCont}>

        <div className={classes.gridCont}>



            {posts.map((post, i)=>(
                <ClientSideRoute  key={post._id} route={`/post/${post.slug.current}`}>
                    <div className={classes.postCont}>
                        <div>
                            <Image src={urlFor(post.mainImage).url()} className={classes.postImage} width={100} height={170}/>
                        </div>
                        <div className={classes.infoCont}>
                                <div className={classes.titleCont}>
                                    <p className={classes.postTitle}>{post.title}</p>
                                    <p className={classes.date}>
                                        {
                                            new Date(post._createdAt).toLocaleDateString("en-US",{
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            })
                                        }
                                    </p>
                                </div>
                    
                                <ClampLines buttons={false} text={post.description} lines={4} ellipsis="..." innerElement='p' className={classes.description}/>
                    
                    
                                <button onClick={()=>{}} className={classes.readMoreBtn}>
                                        Read More
                                </button>
                    
                        </div>
                    </div>
                </ClientSideRoute>
            ))}
        </div>
    </div>
  )
}

export default BlogList