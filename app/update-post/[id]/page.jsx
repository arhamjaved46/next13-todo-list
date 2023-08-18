import EditPost from "@/components/EditPost"

const updateSinglePost = async (id) => {

  try {

    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Error occurred while fetching");
    }

    return res.json();

  } catch (error) {
    console.log("Error occurred while fetching", error.message);
  }
}

const Page = async ({ params }) => {

  const { id } = params;

  const { data } = await updateSinglePost(id);
  const { title, description } = data;

  return (
    <EditPost id={id} title={title} description={description} />
  )
}

export default Page;
