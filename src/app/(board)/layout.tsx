import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Board',
}

export default function BoardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>{children}</div>
}
