import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Fort Greene Engineering" }];
};

export default function Index() {
  return (
    <div className="flex px-12 flex-col gap-24 h-screen items-center justify-center">
      ryan@fortgreene.engineering
      <iframe
        src="https://staging.untitled.stream/embed/3yI3g74lVoyF"
        width="100%"
        height="344"
        allow="picture-in-picture"
        title="[untitled]"
        className="sm:max-w-lg shadow-xl rounded-[24px]"
      ></iframe>
      <iframe
        src="https://staging.untitled.stream/embed/iUAGIrQVMMIr"
        width="100%"
        height="192"
        allow="picture-in-picture"
        title="[untitled]"
        className="sm:max-w-lg shadow-xl rounded-[24px]"
      ></iframe>
    </div>
  );
}
