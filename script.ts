import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const summary = await prisma.summary.create({
        data: { url: "adafruit.com", summary: "This website is about Adafruit Industries, which is a company that provides electronics and other products related to technology. They have a blog which includes news about the company, and they offer products like Arduino, Raspberry Pi, LEDs, and Circuit Playground. They also have a gift ideas section for people who are looking for tech-related gifts. They have a 'Learn' section where you can learn more about their products and how to use them. They also provide support and shipping services.", createdAt: "2023-02-06T01:06:55.346Z", updatedAt: "2023-02-06T01:06:55.346Z" }
    })
    console.log(summary)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })