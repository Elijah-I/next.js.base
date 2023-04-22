import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { Contact } from "../contacts";

export interface Params extends NextParsedUrlQuery {
  contact: number;
}

export interface ContactProps {
  contact: Contact;
}
