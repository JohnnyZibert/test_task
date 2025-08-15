import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/manager/documents/[id]/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/manager/documents/[id]/page"!</div>
}
