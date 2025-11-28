import { Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Loading } from './components/Loading'
import { Layout } from './Layout'
import { AuthReturn } from './pages/AuthReturn'
import { BillingInformation } from './pages/BillingInformation'
import { CurrentPlan } from './pages/CurrentPlan'
import { ExportData } from './pages/ExportData'
import { Home } from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [
      {
        path: '/',
        ErrorBoundary: ErrorBoundary,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'current-plan',
            element: <CurrentPlan />,
          },
          {
            path: 'billing-information',
            element: <BillingInformation />,
          },
          {
            path: 'export-data',
            element: <ExportData />,
          },
        ],
      },
      {
        path: '/auth/return',
        element: <AuthReturn />,
      },
    ],
  },
])

