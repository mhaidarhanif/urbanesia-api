// console.log(process.env);

import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
});
await client.connect();

type City = {
  id: number;
  slug: string;
  name: string;
  areaSize: number;
  description?: string | null; // ? optional field
};

try {
  const result = await client.query("SELECT * FROM cities");
  const cities: City[] = result.rows;
  console.log({ cities });
} catch (error) {
  console.error("Failed to connect to the database", error);
} finally {
  await client.end();
}
