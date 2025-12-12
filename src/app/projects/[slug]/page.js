import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectDetail from '@/components/ProjectDetail'

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

