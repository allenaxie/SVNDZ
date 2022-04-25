// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: any,
) {
  // Connect to mongoDB - NEVER run on client side - this file will not run on client side so it is secure
  const client = await MongoClient.connect(`mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER}:${process.env.NEXT_PUBLIC_MONGODB_PASS}@svndz.okep3.mongodb.net/Products?retryWrites=true&w=majority`);
  const db = client.db();
  const productsCollection = db.collection('Collections');

  const products = await productsCollection.find().toArray();
  client.close();
  const data = await res.json(products)
}

