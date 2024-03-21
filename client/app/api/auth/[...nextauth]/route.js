import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              email: { label: "Email", type: "email"},
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // You need to provide your own logic here that takes the credentials
              // submitted and returns either a object representing a user or value
              // that is false/null if the credentials are invalid.
              // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
              // You can also use the `req` object to obtain additional parameters
              // (i.e., the request IP address)
              const res = await fetch("http://localhost:8000/login", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()

              if (res.ok && user) {
                console.log(user)
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
          })
    ]
}

export default NextAuth(authOptions)