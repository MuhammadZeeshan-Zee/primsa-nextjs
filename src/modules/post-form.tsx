// import { createPost } from "@/actions/post";
// import React from "react";

// const PostForm = () => {
//   return (
//     <div>
//       <form
//         action={createPost}
//         className="flex flex-col gap-2 max-w-md mx-auto pt-16 px-5"
//       >
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           className="p-2 rounded-md border border-gray-300 bg-white"
//         />
//         <input
//           type="text"
//           name="content"
//           placeholder="Content"
//           className="p-2 rounded-md border border-gray-300 bg-white"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PostForm;
import { createPost, updatePost } from "@/actions/post";
import React from "react";

const PostForm = ({ post }: { post?: { id: string; title: string; content?: string | null } }) => {
  const isEdit = !!post;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        {isEdit ? "Edit Post" : "Create Post"}
      </h1>
      <form
        action={isEdit ? async (formData) => {
          "use server";
          await updatePost(post.id, formData);
        } : createPost}
        className="flex flex-col gap-2 max-w-md mx-auto pt-16 px-5"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={post?.title}
          className="p-2 rounded-md border border-gray-300 bg-white"
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          defaultValue={post?.content || ""}
          className="p-2 rounded-md border border-gray-300 bg-white"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {isEdit ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
