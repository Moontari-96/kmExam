'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navigation() {
    const path = usePathname()
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md w-dvw">
            {/* 로고 */}
            <div className="flex items-center gap-2">
                <img
                    src="/logo.png" // 로고 이미지 경로
                    alt="로고"
                    className="h-12 w-12"
                />
                <span className="text-xl font-bold">My Website</span>
            </div>

            {/* 왼쪽 메뉴 */}
            <div className="flex gap-6 items-center">
                <Link
                    href="/"
                    className={`hover:underline ${
                        path === '/' ? 'font-bold text-blue-400 underline ' : ''
                    }`}
                >
                    홈
                </Link>
                <Link
                    href="/board/list"
                    className={`hover:underline ${
                        path === '/board/list'
                            ? 'font-bold text-blue-400 underline'
                            : ''
                    }`}
                >
                    게시판
                </Link>
                <Link
                    href="/mypage"
                    className={`hover:underline ${
                        path === '/mypage'
                            ? 'font-bold text-blue-400 underline'
                            : ''
                    }`}
                >
                    마이페이지
                </Link>
            </div>

            {/* 오른쪽 메뉴 (로그인) */}
            <div>
                <Link
                    href="/signin"
                    className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
                >
                    로그인
                </Link>
            </div>
        </nav>
    )
}
