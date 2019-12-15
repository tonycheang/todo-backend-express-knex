const { Pool } = require("pg");
const pool = new Pool();

module.exports = {
    query: async (text, params) => await pool.query(text, params),
    // Connect used to return a client for transactions.
    connect: async () => await pool.connect(),
}