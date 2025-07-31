import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Welcome to my blog
      </h1>
      <Link href="/posts" className="underline">Posts</Link><br />
      <Link href="/users" className="underline">Users</Link>
    </main>
  );
}
