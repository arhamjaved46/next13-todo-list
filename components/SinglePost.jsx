import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";


export default async function SinglePost() {
  
  const getTopics = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });
  
      if (!data.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return data.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };
  const {response} = await getTopics();

  return (
    <>
      {response.map((t) => (
        <div
          key={t._id}
          className="flex items-start justify-between gap-5 p-4 my-3 border border-slate-300"
        >
          <div>
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/update-post/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}