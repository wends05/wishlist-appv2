import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_home/profile/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/profile/$id"!</div>
}
