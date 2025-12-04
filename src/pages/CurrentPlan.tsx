import { Suspense } from 'react';
import { AccountInfo } from '../components/AccountInfo';
import { Loading } from '../components/Loading';
import { PlansInfo } from '../components/PlanInfo';

export function CurrentPlan() {
  return (
    <div>
      <h1>Current Plan</h1>
      <p>Your current plan information will be displayed here.</p>
      <p>This content is shown before account is loaded.</p>
      <Suspense fallback={<Loading />}>
        <PlansInfo />
        <AccountInfo />
      </Suspense>
    </div>
  );
}
