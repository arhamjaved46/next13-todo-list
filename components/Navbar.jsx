import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 my-5 bg-blue-500 rounded-md">
        <Link className="text-lg font-medium text-white" href={"/"}>Arham Javed</Link>
        <Link className="px-2 py-1 text-base font-medium text-blue-500 bg-white rounded" href={"/add-post"}>New post</Link>
    </nav>
  );
};

