import { ReactNode, use } from "react";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function SomeData({ delay }: { delay: number }) {
  await wait(delay);
  return <p>The data was: {Math.random()}</p>;
}

export function SpinDelay({
  delay,
  spinner,
}: {
  delay: number;
  spinner: ReactNode;
}) {
  use(wait(delay));

  return spinner;
}
