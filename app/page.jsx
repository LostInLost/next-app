import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex flex-col gap-5 m-auto ">
        <div className="mx-auto">
          <h1 className="font-bold text-[48px]">Welcome to My Blog</h1>
        </div>
        <div className="flex gap-3">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href={"/posts/first-posts"}>
              <h2 className={`mb-3 text-2xl font-semibold`}>First Post</h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt iste quam eum conse...
              </p>
            </Link>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href={"/posts/second-posts"}>
              <h2 className={`mb-3 text-2xl font-semibold`}>Second Post</h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt iste quam eum conse...
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
