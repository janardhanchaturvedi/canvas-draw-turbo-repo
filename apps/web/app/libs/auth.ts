import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
export const authOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
          try {
           
  
            // Return null if user data could not be retrieved
            return null;
          } catch (e) {
            console.error(e);
          }
          return null;
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET || 'secr3t',
   
    pages: {
      signIn: '/signin',
    },
  } satisfies NextAuthOptions;