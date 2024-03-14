import { Document } from "mongoose";

export interface URLInterface extends Document {
    longUrl: string,
    tinyUrl: string,
    key?: string
    user?: string
}