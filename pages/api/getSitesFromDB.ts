// import { Summary } from '@prisma/client'
// import { prisma } from '../../lib/prisma'

// export default async function(req: any, res: { statusCode: number; setHeader: (arg0: string, arg1: string) => void; end: (arg0: string) => void; }): Promise<void> {
//   return new Promise((resolve, reject) => {
//     const handler = async (): Promise<Summary | null> => {
//       const site = await prisma.summary.findUnique({
//         where: {
//             id: "clds6hazp0000v1ls4z7ptqt8"
//         }
//         });
//         if (site) {
//         return site;
//         }
//         return null;
//         };

//     handler()
//       .then(site => {
//         if (site) {
//           res.statusCode = 200
//           res.setHeader('Content-Type', 'application/json');
//           res.end(JSON.stringify(site));
//         } else {
//           res.statusCode = 200
//           res.setHeader('Content-Type', 'text/plain');
//           res.end("This site isn't in the db");
//         }
//         resolve();
//       })
//       .catch(error => {
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('An error occurred');
//         reject(error);
//       });
//   });
// };



// import { Summary } from '@prisma/client';
// // import { resolveObjectURL } from 'buffer';
// // import type { NextApiRequest, NextApiResponse } from 'next'
// import { prisma } from '../../lib/prisma'


// export default async function handle(req: NextApiRequest, res: NextApiResponse) {
//     const { url } = req.body;

//     const site = await prisma.summary.findUnique({
//         where: {
//             id: "clds6hazp0000v1ls4z7ptqt8"
//         }
//     });
//     res.json(site)
// }


// export default async function latestSites(req: any, res: { json: (arg0: Summary[]) => void }) {
//   const sites = await prisma.summary.findMany({
//     orderBy: { createdAt: 'desc' },
//     take: 5,
//   })

//   res.json(sites)
// }

// import { Summary } from '@prisma/client'
import { prisma } from '../../lib/prisma'

export default async function latestSites(req: any, res: any) {
  const url = req.body;
  try {
  const site = await prisma.summary.findFirst({
    where: {
        url: url.site
      },
  })
  if (site) {
    res.json(site)
  } else {res.status(404).end()
  }
} catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured." });
  }
}