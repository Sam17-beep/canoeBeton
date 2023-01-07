// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import { resolve } from 'path';

type Data = {
  name: string
}

export default async function fetch(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fileName = req.query.name;
  const fileContents = fs.readFile("json/"+fileName+".json", 'utf8', (err, data) => {

    if (err)
      res.status(500);
    res.status(200).json(JSON.parse(data));
  });
  resolve();
}
