import { useSuspenseQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { fetchAccount } from './lib/api';
import type { Account } from './lib/types';

const accountSchema: z.ZodType<Account> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  timestamp: z.string(),
});

export function useAccountQuery() {
  return useSuspenseQuery<Account>({
    queryKey: ['account'],
    queryFn: fetchAccount,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    retry: false,
  })
}

export function useAccount() {
  const { data } = useAccountQuery();
  return accountSchema.parse(data);
}