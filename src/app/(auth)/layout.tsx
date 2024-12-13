import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Auth',
}

export default function BoardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>{children}</div>
}
