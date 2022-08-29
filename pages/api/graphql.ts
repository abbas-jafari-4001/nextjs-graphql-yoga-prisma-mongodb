import { createServer } from "@graphql-yoga/node";
import { readFileSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import resolvers from "./__R/index";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default createServer<{
    req: NextApiRequest;
    res: NextApiResponse;
}>({
    endpoint: "/api/graphql",
    logging: true,
    schema: {
        typeDefs: readFileSync(join(process.cwd(), "schema.graphql"), "utf-8"),
        resolvers,
    },
});
