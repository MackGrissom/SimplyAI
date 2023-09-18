import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { title, description, category } = req.body;

      const featureRequest = await prisma.featureRequest.create({
        data: {
          title,
          description,
          category,
        },
      });

      res.status(201).json(featureRequest);
    } catch (error) {
      console.error('Error submitting feature request:', error);
      res.status(500).json({ error: 'Unable to submit feature request.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
