import Image from "next/image";

import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponets = {
    types:{
        image:({value}) =>{
            return(
                <div>
                    <Image width={200} height={200} src={urlFor(value).url()}/>
                </div>
            )
        },
    },
    list:{
        bullet: ({children}) => (
            <ul>{children}</ul>
        ),
        number:({children}) => (
            <ol>{children}</ol>
        )
    },
    block: {
        h1: ({children}) => (
            <h1>{children}</h1>
        ),
        h2: ({children}) => (
            <h2>{children}</h2>
        ),
        h3: ({children}) => (
            <h3>{children}</h3>
        ),
        h4: ({children}) => (
            <h4>{children}</h4>
        ),

        blockquote: ({children}) => (
            <blockquote>{children}</blockquote>
        ),
    },
    marks: {
        link: ({children, value}) => {
            const rel = !value.href.startsWith('/') ? "noreferrer noopener" : undefined

            return (
                <Link href={value.href} rel={rel}>{children}</Link>
            )
        }
    }

}
