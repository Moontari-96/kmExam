// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // 네비게이션 제외 경로
    const hideNavigation = ['/signin', '/signup'].includes(pathname)

    // 헤더로 전달
    const response = NextResponse.next()
    response.headers.set('x-hide-navigation', hideNavigation.toString())
    return response
}

// 특정 경로에만 middleware 적용
export const config = {
    matcher: ['/signin', '/signup', '/(.*)'],
}
