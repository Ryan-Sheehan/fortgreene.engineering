import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Fort Greene Engineering" }];
};

export default function Index() {
  return (
    <div className="flex px-12 flex-col gap-24 h-screen items-center justify-center">
      ryan@fortgreene.engineering
      <iframe
        src="https://staging.untitled.stream/embed/TAwvoqbnkHSR"
        width="100%"
        height="344"
        allow="picture-in-picture"
        title="[untitled]"
        className="max-w-lg shadow-xl rounded-[24px]"
      ></iframe>
    </div>  
  );
}
