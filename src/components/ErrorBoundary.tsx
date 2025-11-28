import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError
} from 'react-router'

export function ErrorBoundary() {
  const error = useRouteError()
  const navigate = useNavigate()

  let errorMessage: string
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'An error occurred'
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else {
    errorMessage = 'Unknown error'
  }

  const handleReset = () => {
    navigate(0) // Reload the current route
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <p>
        <button onClick={handleReset}>Try Again</button>
      </p>
    </div>
  )
}

