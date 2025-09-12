import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
import { log } from "node:console";

export const { POST, GET } = toNextJsHandler(auth);

