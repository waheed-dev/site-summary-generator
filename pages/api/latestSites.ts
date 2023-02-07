import { Summary } from '@prisma/client'
import { prisma } from '../../lib/prisma'

export default async function latestSites(req: any, res: { json: (arg0: Summary[]) => void }) {
  const sites = await prisma.summary.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  res.json(sites)
}