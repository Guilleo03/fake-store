import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getAllUsers } from "../../../utils/api";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/index",
    signOut: "/index",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: { username: { label: "username", placeholder: "username" } },
      async authorize(credentials) {
        console.log(credentials);

        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const allUsers = await getAllUsers().then((data) => data);
        const user = allUsers.find(
          (u) => u.username == username && u.password == password
        );

        if (!user) {
          return null;
        }

        return user as any;
      },
    }),
  ],
};
export default NextAuth(authOptions);
