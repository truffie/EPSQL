const pool = require('../db');

async function createSkillDB(label, category, priority) {
  const client = await pool.connect();

  const sql = `INSERT INTO environment (id,label,category, priority) VALUES ($1, $2, $3, $4)`;
  const { rows } = await client.query(sql, [label.toLowerCase(), label, category, priority]);

  return rows;
}

async function getUsersDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM users';
  const data = await client.query(sql)
  return data.rows;
}
async function getAllSkillsDB() {
  const client = await pool.connect();

  const sql = "SELECT * FROM environment";
  const { rows } = await client.query(sql);
  return rows;
}
async function getSkillsByIdDB(id) {
  const client = await pool.connect();
  const sql = 'SELECT * FROM environment where id $1';
  const { rows } = await client.query(sql);
  return rows;
};
async function updateSkillsByIdDB(id, label, category, priority) {
  const client = await pool.connect();
  const sql = 'UPDATE environment set label = $1, category = $2, priority = $3 where id = $4 returning * ';
  const { rows } = await client.query(sql, [label, category, priority, id]);
  return rows;
};
async function deleteSkillsByIdDB(id) {
  const client = await pool.connect();
  const sql = 'DELETE FROM environment where id = $1 returning *';
  const { rows } = await client.query(sql, [id]);
  return rows;
}

async function PatchByidDB(id, body) {
  const client = await pool.connect();
  const sql = 'SELECT * FROM environment where id = $1';
  const { rows } = await client.query(sql, [id]);
  const patchedObj = { ...rows[0], ...body };
  const sqlUpdate = 'UPDATE environment set label = $1, category = $2, priority = $3 where id = $4 returning * ';
  const { rows: rowsUpdate } = await client.query(sqlUpdate, [patchedObj.label, patchedObj.category, patchedObj.priority, id]);
  return rowsUpdate;
};

module.exports = {
  createSkillDB, getUsersDB, getAllSkillsDB,
  getSkillsByIdDB, updateSkillsByIdDB,
  deleteSkillsByIdDB,
  PatchByidDB
}