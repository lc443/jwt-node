import express from 'express';
import pool from '../db.js'
import bcrypt from 'bcrypt';
import authenticateToken from '../middleware/authorization.js';

const router = express.Router();

router.get('/', authenticateToken, async(req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users');
        res.json({users: users.rows});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.post('/', async(req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
         const newUSer = await pool.query('INSERT INTO users (username, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
          [req.body.name, req.body.email, hashPassword]);
          res.json({users: newUSer.rows[0]});
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

export default router;