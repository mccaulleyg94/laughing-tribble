import pgPromise from 'pg-promise'
import pg from 'pg-promise/typescript/pg-subset';
import { connection } from '../resources/ConnectionString';
const pgp: pgPromise.IMain<{}, pg.IClient> = pgPromise();
export const db: pgPromise.IDatabase<{}, pg.IClient> = pgp(connection);
export const truncate = async (table: string) => { db.query(`truncate ${table}`); }
export const select_all = async <T extends unknown>(table: string): Promise<T[]> => { return await db.any(`select * from ${table}`); }
