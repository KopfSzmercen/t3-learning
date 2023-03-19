import { USER_ROLE } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import {
  TRPC_ERROR_CODES_BY_KEY,
  TRPC_ERROR_CODES_BY_NUMBER,
} from "@trpc/server/rpc";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const signUp = createTRPCRouter({
  signUp: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;

      const count = await ctx.prisma.user.count({
        where: { email: input.email },
      });

      if (count > 0)
        throw new TRPCError({
          code: TRPC_ERROR_CODES_BY_NUMBER[TRPC_ERROR_CODES_BY_KEY.NOT_FOUND],
          message: "User already exists",
        });

      const result = await ctx.prisma.user.create({
        data: {
          email,
          password,
          role: USER_ROLE.TEACHER,
          accounts: {
            create: {
              provider: "credentials",
              type: "credentials",
            },
          },
        },
        select: {
          id: true,
        },
      });

      return result;
    }),
});