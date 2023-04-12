import { SomeData, SpinDelay } from "@/components";
import { Suspense } from "react";

export default function Page({ params }: { params: { delay: string } }) {
  return (
    <Suspense fallback={<SpinDelay delay={2500} spinner={<p>Loading...</p>} />}>
      {/* @ts-expect-error async component */}
      <SomeData delay={Number(params.delay)} />
    </Suspense>
  );
}
