"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditPost = ({ id, title, description }) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newTitle, newDescription })
            });
            
            if(!res.ok) {
                throw new Error("Failed to update post!");
            }

            router.refresh();
            router.push('/');

        } catch (error) {
            console.log("Error updating post", error.message);
        }
    };

    return (
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold">Update blog post</h3>
            <input
                className="px-4 py-2 border rounded border-slate-500"
                type="text"
                placeholder="Post Title"
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
            />

            <textarea
                className="px-4 py-2 border rounded border-slate-500"
                rows={6}
                placeholder="Post Description..."
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
            />

            <button type="submit" className="py-3 font-bold text-white rounded bg-slate-600">Update Post</button>
        </form>
    )
}

export default EditPost;
