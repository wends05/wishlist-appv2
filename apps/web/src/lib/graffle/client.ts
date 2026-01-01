import { createServerOnlyFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { Graffle } from "./generated/_";

async function createClientHandler(headers: Record<string, string>) {
  const url = process.env.GRAFFLE_URL;
  if (!url) {
    console.log("Cannot find GRAFFLE_URL env variable");
    throw new Error("GRAFFLE_URL not defined.");
  }

  const graffle = Graffle.create().transport({
    url: url,
    headers
  });

  return graffle;
}

const createClient = createServerOnlyFn(async () => {
  const headers = getRequestHeaders();
  
  const client = await createClientHandler(headers);

  return client;
});

export default createClient;
