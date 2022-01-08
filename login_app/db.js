import pg from 'pg';
const { Pool } = pg;

const localPoolConfig = {
    user: 'postgres',
    password: 'password' ,
    host: 'localhost',
    port: '5432',
    database: 'Jwt_Tutorial'
};

const poolConfig = process.env.DATABASE_URL ? {connectionString:process.env.DATABASE_URL,ssl:{rejectUnauthorixed:false}} : localPoolConfig

const pool = new Pool(poolConfig);

export default pool;