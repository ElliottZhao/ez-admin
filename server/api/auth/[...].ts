import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from "~/lib/prisma";

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  providers: [
    //@ts-ignore
    CredentialsProvider.default({
      async authorize (credentials: any, request: any) {
        const user = await prisma.user.findUnique({
          where: { username: credentials.username }
        })
        if (credentials?.password === user?.password) {
          return user
        } else {
          console.error('Warning: Malicious login attempt registered, bad credentials provided')
          return null
        }
      }
    })
  ]
})
