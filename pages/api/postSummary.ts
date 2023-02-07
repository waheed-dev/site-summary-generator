import { prisma } from '../../lib/prisma'

export default async function handle(req: any, res: any) {
    const { url, summary} = req.body;
  
    const result = await prisma.summary.create({
      data: {
        url: url,
        summary: summary
      },
    });
    res.json(result);
  }