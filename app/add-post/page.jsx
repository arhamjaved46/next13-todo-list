"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required!")
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description })
      });

      if(response.ok) {
        router.push("/");
      } else {
        throw new Error("An error occurred");
      }

    } catch (error) {
      console.log("An error occurred", error.message);
    }

  }

  return (
    <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold">Create a new blog post</h3>
      <input
        className="px-4 py-2 border rounded border-slate-500"
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="px-4 py-2 border rounded border-slate-500"
        rows={6}
        placeholder="Post Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" className="py-3 font-bold text-white rounded bg-slate-600">Create Post</button>
    </form>
  )
}

export default Page;
