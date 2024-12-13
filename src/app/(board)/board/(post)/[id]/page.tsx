'use client' // 클라이언트 컴포넌트 선언
import Link from 'next/link'

export default async function BoardDetail({
    params,
}: {
    params: { id: string }
}) {
    const { id } = await params // 비동기로 처리

    // 더미 데이터
    const dummyData = [
        {
            id: 1,
            title: '첫 번째 게시글',
            author: '김철수',
            content:
                '첫 번째 게시글의 내용입니다. 여기에 게시글의 자세한 내용을 추가하세요.',
            date: '2024-12-01',
        },
        {
            id: 2,
            title: '두 번째 게시글',
            author: '박재명',
            content:
                '두 번째 게시글의 내용입니다. 이 게시글은 테스트 데이터를 기반으로 작성되었습니다.',
            date: '2024-12-02',
        },
        {
            id: 3,
            title: '세 번째 게시글',
            author: '이석열',
            content:
                '세 번째 게시글의 내용입니다. 자세한 내용은 예제로 작성된 데이터입니다.',
            date: '2024-12-03',
        },
        {
            id: 4,
            title: '네 번째 게시글',
            author: '최미진',
            content:
                '네 번째 게시글입니다. 이 글은 더미 데이터를 테스트하기 위해 작성되었습니다.',
            date: '2024-12-04',
        },
        {
            id: 5,
            title: '다섯 번째 게시글',
            author: '홍길동',
            content:
                '다섯 번째 게시글의 상세 내용입니다. Next.js를 활용한 게시판 예제입니다.',
            date: '2024-12-05',
        },
    ]

    // 현재 게시글 가져오기
    const post = dummyData.find(item => item.id === parseInt(id))

    // 이전/다음 게시글 ID 계산
    const prevPost = post && post.id > 1 ? dummyData[post.id - 2] : null
    const nextPost =
        post && post.id < dummyData.length ? dummyData[post.id] : null

    // 경고 메시지 핸들러
    const handleNoPostAlert = (direction: string) => {
        alert(`${direction} 글이 없습니다.`)
    }

    // id에 해당하는 게시글이 없는 경우 처리
    if (!post) {
        return (
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    게시글을 찾을 수 없습니다.
                </h1>
                <Link href="/board/list">
                    <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                        목록으로
                    </button>
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">
                {post.title}
            </h1>
            <p className="text-gray-600 text-sm mb-2">
                작성자: {post.author} | 작성일: {post.date}
            </p>
            <div className="text-gray-800 leading-relaxed">
                <p>{post.content}</p>
            </div>

            {/* 이전/다음 글 */}
            <div className="border-t border-gray-300 py-4">
                {/* 이전 글 */}
                {prevPost ? (
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-gray-500">이전</p>
                        <Link
                            href={`/board/${prevPost.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            {prevPost.title}
                        </Link>
                    </div>
                ) : (
                    <div
                        className="flex justify-between items-center mb-2 cursor-pointer"
                        onClick={() => handleNoPostAlert('이전')}
                    >
                        <p className="text-sm text-gray-500">이전</p>
                        <p className="text-gray-400">이전 글 없음</p>
                    </div>
                )}
                {/* 다음 글 */}
                {nextPost ? (
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">다음</p>
                        <Link
                            href={`/board/${nextPost.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            {nextPost.title}
                        </Link>
                    </div>
                ) : (
                    <div
                        className="flex justify-between items-center mb-2 cursor-pointer"
                        onClick={() => handleNoPostAlert('다음')}
                    >
                        <p className="text-sm text-gray-500">다음</p>
                        <p className="text-gray-400">다음 글 없음</p>
                    </div>
                )}
            </div>

            {/* 목록 버튼 */}
            <div className="text-center mt-6">
                <Link href="/board/list">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                        목록
                    </button>
                </Link>
            </div>
        </div>
    )
}
