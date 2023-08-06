import pg from 'pg'

export default async () => {
    try {
        const pool = new pg.Pool({
            user: process.env.PGUSER,
            host: 'localhost',
            database: 'postgres',
            password: process.env.PGPASSWORD,
            port: 5432
        })

        return pool
    } catch (err) {
        console.log(err)
    }
}