import { ErrorComponentProps } from '@tanstack/react-router'

export default function ErrorComponent({ error }: ErrorComponentProps) {
  return (
    <div className='h-screen p-10'>
      <h1>Error!</h1>
      <pre className='h-full'>
        {error.message}
      </pre>
      <div>
        {JSON.stringify(error)}
      </div>
    </div>
  )
}
