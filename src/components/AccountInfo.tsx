import { useAccount } from '../root';

export function AccountInfo() {
  const account = useAccount();

  return (
    <p style={{ padding: '0.5em', background: 'silver' }}>
      Account: {account.email} - Timestamp: {account.timestamp}
    </p>
  );
}
