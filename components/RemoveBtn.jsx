"use client";

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {

  const router = useRouter();

  const removePost = async () => {
    
    const confirmed = confirm("Are you sure you want to remove this post");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if(res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <button onClick={removePost} className="text-red-500">
      <HiOutlineTrash size={22} />
    </button>
  )
}

export default RemoveBtn;
