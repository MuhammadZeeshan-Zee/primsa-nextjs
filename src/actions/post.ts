"use server"

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const getPosts = async () => {
    const posts = await prisma.post.findMany();
    return posts;
}

export const createPost = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    await prisma.post.create({
        data: {
            title,
            content
        }
    })
    redirect("/posts");
}

export const getPost = async (id: string) => {
    const post = await prisma.post.findUnique({
        where: {
            id
        }
    })
    return post;
}
export const updatePost = async (id: string, formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    await prisma.post.update({
        where: { id },
        data: { title, content }
    })
    redirect("/posts");
}