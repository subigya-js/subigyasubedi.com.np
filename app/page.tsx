import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-center px-4">
        Website is updating with new technologies, till then visit{" "}
        <span className="text-blue-500 underline">
          <Link href={"https://subigya.netlify.app/"} target="__blank">
            Old Website
          </Link>
        </span>
      </h1>
    </div>
  );
}
