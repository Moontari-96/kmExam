import Link from 'next/link'

export default function BoardList() {
    const dummyData = [
        {
            id: 1,
            title: '첫 번째 게시글',
            author: '김철수',
            date: '2024-12-01',
        },
        {
            id: 2,
            title: '두 번째 게시글',
            author: '박재명',
            date: '2024-12-02',
        },
        {
            id: 3,
            title: '세 번째 게시글',
            author: '이석열',
            date: '2024-12-03',
        },
        {
            id: 4,
            title: '네 번째 게시글',
            author: '최미진',
            date: '2024-12-04',
        },
        {
            id: 5,
            title: '다섯 번째 게시글',
            author: '홍길동',
            date: '2024-12-05',
        },
    ]

    return (
        <div className="w-dvw mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">게시판 영역</h1>
            <ul className="bg-white shadow-md rounded-lg">
                {dummyData.map(list => (
                    <li
                        key={list.id}
                        className="border-b last:border-none flex justify-between items-center hover:bg-gray-100"
                    >
                        <Link href={`/board/${list.id}`} className="w-full p-4">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {list.title}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    작성자: {list.author} | {list.date}{' '}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
