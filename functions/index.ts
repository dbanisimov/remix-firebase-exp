import * as functions from "firebase-functions";
import { createRequestHandler } from "@remix-run/express";

export const remix = functions.https.onRequest(
  createRequestHandler({
  })
);
