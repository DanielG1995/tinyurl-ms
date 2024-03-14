import * as mongoose from 'mongoose';

export const UrlSchema = new mongoose.Schema({
    longUrl: String,
    tinyUrl: String,
    user: String,
    key: String
});