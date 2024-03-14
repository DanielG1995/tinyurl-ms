
import { Connection } from 'mongoose';
import { UrlSchema } from './schemas/url.entity';

export const urlProviders = [
    {
        provide: 'URL_MODEL',
        useFactory: (connection: Connection) => connection.model('Url', UrlSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];