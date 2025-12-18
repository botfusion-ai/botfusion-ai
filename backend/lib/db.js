import sqlite3 from "sqlite3";
export const db = new sqlite3.Database("/tmp/botfusion.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS chats (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    role TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});
