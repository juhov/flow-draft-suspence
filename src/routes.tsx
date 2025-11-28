import { createBrowserRouter } from 'react-router'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Loading } from './components/Loading'
import { Layout } from './Layout'
import { AuthReturn } from './pages/AuthReturn'
import { BillingInformation } from './pages/BillingInformation'
import { CurrentPlan } from './pages/CurrentPlan'
import { ExportData } from './pages/ExportData'
import { Home } from './pages/Home'
import { rootLoader, rootRouteId } from './root'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        id: rootRouteId,
        loader: rootLoader,
        HydrateFallback: Loading,
        ErrorBoundary: ErrorBoundary,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: 'current-plan',
            Component: CurrentPlan,
          },
          {
            path: 'billing-information',
            Component: BillingInformation,
          },
          {
            path: 'export-data',
            Component: ExportData,
          },
        ],
      },
      {
        path: '/auth/return',
        Component: AuthReturn,
      },
    ],
  },
])

