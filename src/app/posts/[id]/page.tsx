import { getPost } from "@/actions/post";
import React from "react";

const PostDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div className="text-center pt-32 px-5">
      <h1 className="text-3xl font-bold text-gray-800">{post?.title}</h1>
      <p className="text-gray-600">{post?.content}</p>
    </div>
  );
};

export default PostDetail;
