import { useRouteLoaderData } from "react-router";
import { fetchAccount } from "./lib/api";

export const rootRouteId = "root"

export async function rootLoader() {
  return fetchAccount()
}

export function useRootLoaderData() {
  const data = useRouteLoaderData<typeof rootLoader>(rootRouteId)
  if (!data) {
    throw new Error('No data found')
  }
  return data
}