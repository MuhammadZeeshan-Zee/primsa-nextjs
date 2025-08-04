import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
    {
        title: "Post 1",
        content: "Content 1"
    },
    {
        title: "Post 2",
        content: "Content 2"
    },
    {
        title: "Post 3",
        content: "Content 3"
    },
    {
        title: "Post 4",
        content: "Content 4"
    },
    {
        title: "Post 5",
        content: "Content 5"
    }
];

export async function main() {
  for (const u of initialPosts) {
    await prisma.post.create({ data: u });
  }
}

main().then(() => {
    console.log("Data seeded successfully");
}).catch((error) => {
    console.error("Error seeding data:", error);
}).finally(() => {
    prisma.$disconnect();
});