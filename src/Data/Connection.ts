import pgPromise from 'pg-promise'
import pg from 'pg-promise/typescript/pg-subset';
import { connection } from '../resources/ConnectionString';
const pgp: pgPromise.IMain<{}, pg.IClient> = pgPromise();
export const db: pgPromise.IDatabase<{}, pg.IClient> = pgp(connection);

