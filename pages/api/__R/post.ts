import { Resolvers } from "generates/graphql";
import { prisma } from "lib/prisma";

const post: Resolvers = {
    Mutation: {
        createPost: async (parent, args, ctx): Promise<any> => {
            try {
                const title: any = args.input?.title;
                return await prisma.post.create({
                    data: {
                        title: title,
                    },
                });
            } catch (error) {
                throw error;
            }
        },
        removePost: async (parent, args, ctx): Promise<any> => {
            try {
                return await prisma.post.delete({
                    where: {
                        id: args.input?.id,
                    },
                });
            } catch (error) {
                throw error;
            }
        },
        updatePost: async (parent, args, ctx): Promise<any> => {
            try {
                return await prisma.post.update({
                    where: {
                        id: args.input?.id,
                    },
                    data: {
                        title: args.input?.title,
                    },
                });
            } catch (error) {
                throw error;
            }
        },
    },

    Query: {
        posts: async (parent, args, ctx): Promise<any> => {
            try {
                return await prisma.post.findMany();
            } catch (error) {
                throw error;
            }
        },
    },
};

export default post;
