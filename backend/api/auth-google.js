import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../lib/db.js";

export default function handler(req, res) {
  const { email, password } = req.body;

  const hash = bcrypt.hashSync(password, 8);
  db.run(`INSERT INTO users(email,password) VALUES(?,?)`,
    [email, hash]);

  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  res.json({ token });
}
