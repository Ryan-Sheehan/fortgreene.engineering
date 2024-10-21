import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Fort Greene Engineering" }];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      ryan@fortgreene.engineering
    </div>
  );
}
