import { currentSession, json, type ServerContext } from "../../_shared/server";

export async function onRequestGet({ request, env }: ServerContext): Promise<Response> {
  return json({ authenticated: Boolean(await currentSession(request, env)) });
}
