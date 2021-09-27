import { HelloResolver } from "./hello";
import { PostResolver } from "./post";
import { UserResolver } from "./user";

export const resolvers = [HelloResolver, PostResolver, UserResolver] as const;
