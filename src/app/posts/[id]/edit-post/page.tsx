// import { getPost, updatePost } from "@/actions/post";
// import React from "react";

// const EditPost = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params;
//   const post = await getPost(id);
//   return (
//     <div className="text-center pt-32 px-5">
//       <h1 className="text-3xl font-bold text-gray-800">Edit Post</h1>
//       <form
//         action={async (formData) => {
//           "use server";
//           await updatePost(id, formData);
//         }}
//         className="mt-10"
//       >
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           defaultValue={post?.title}
//           className="w-full p-2 rounded-md border border-gray-300"
//         />
//         <textarea
//           name="content"
//           placeholder="Content"
//           defaultValue={post?.content || ""}
//           className="w-full p-2 rounded-md border border-gray-300"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Update Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditPost;

import { getPost } from "@/actions/post";
import PostForm from "@/modules/post-form";
import React from "react";
export const dynamic = "force-dynamic";

const EditPost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div className="text-center pt-32 px-5">
      <PostForm post={post || undefined} />
    </div>
  );
};

export default EditPost;
