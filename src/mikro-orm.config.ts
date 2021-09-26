import { MikroORM } from "@mikro-orm/core";
import dotenv from 'dotenv';
import path from 'path';
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

dotenv.config();

export default {
  dbName: 'reddit',
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  debug: !__prod__,
  type: 'postgresql',
  entities: [Post, User],
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  }
} as Parameters<typeof MikroORM.init>[0];
