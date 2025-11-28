import { Link } from 'react-router'

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

