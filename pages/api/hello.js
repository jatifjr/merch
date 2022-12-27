import { client } from "../../lib/client";

export default async function handler(req, res) {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  res.status(200).json(products);
}
