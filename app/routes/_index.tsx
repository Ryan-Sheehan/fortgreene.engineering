import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Fort Greene Engineering" }];
};

export default function Index() {
  return (
    <div className="flex px-12 flex-col gap-24 h-screen items-center justify-center ">
    <iframe 
    title="Untitled"
    style={{borderRadius: 24}}
    src="https://untitled.stream/embed/5gLmeUT1i7Uj" 
    width="100%" 
    height="344" 
    allowFullScreen={true} 
    allow="picture-in-picture" 
    frameBorder={0} 
    loading="lazy"
    className="max-w-[600px] mx-auto"
    ></iframe>
    </div>
  );
}
