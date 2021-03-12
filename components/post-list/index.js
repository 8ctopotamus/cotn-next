import Link from 'next/link'
import Button from '../atoms/button'

const PostList = ({ posts }) => {
  return posts.map(({ name, content }) => {
    const { featuredImage } = content
    const slug = `/careers/${name.replace('.json', '')}`
    return (
      <div className="grid grid-cols-3 gap-10 mb-6" key={slug}>
        <div>
          <img src={featuredImage} className="w-full" alt={name}/>
        </div>
        <div className="col-span-2">
          <Link href={slug}>
            <h2 className="text-2xl cursor-pointer mb-3">{name}</h2>  
          </Link> 
          <p className="mb-3">{content.excerpt}</p>
          <Button url={slug} title="READ ON" className="mb-3" />
        </div>
      </div>
    )
  })
}

export default PostList