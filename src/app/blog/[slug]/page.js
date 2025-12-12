import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import BlogPost from '@/components/BlogPost'

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}

