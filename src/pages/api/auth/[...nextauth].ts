import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'mysecret' // 환경변수로 비밀키 관리

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // 사용자 인증 로직 (예: DB 조회)
                const user = await authenticateUser(
                    credentials?.email,
                    credentials?.password
                )
                if (user) {
                    return user
                }
                return null
            },
        }),
    ],
    secret,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
            }
            return jwt.sign(token, secret, { expiresIn: '1h' }) // JWT 생성
        },
        async session({ session, token }) {
            session.user = token
            return session
        },
    },
})
