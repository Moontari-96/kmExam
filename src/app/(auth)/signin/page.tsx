'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

// 타입 선언
interface SignInFormValues {
    email: string
    password: string
}

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormValues>() // 타입 지정
    const router = useRouter()

    const onSubmit: SubmitHandler<SignInFormValues> = async data => {
        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        })

        if (res?.ok) {
            router.push('/') // 성공 시 메인 페이지 이동
        } else {
            alert('로그인 실패: 이메일과 비밀번호를 확인하세요.')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 w-dvw">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded shadow-md w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold mb-4 text-center">로그인</h1>
                {/* 이메일 */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">이메일</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: '이메일을 입력하세요.',
                        })}
                        className={`w-full px-3 py-2 border rounded ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* 비밀번호 */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        {...register('password', {
                            required: '비밀번호를 입력하세요.',
                        })}
                        className={`w-full px-3 py-2 border rounded ${
                            errors.password
                                ? 'border-red-500'
                                : 'border-gray-300'
                        }`}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* 로그인 버튼 */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    로그인
                </button>

                {/* 회원가입 및 비밀번호 찾기 링크 */}
                <div className="mt-4 text-center text-sm">
                    <a href="/signup" className="text-blue-500 hover:underline">
                        회원가입
                    </a>{' '}
                    |{' '}
                    <a
                        href="/find-account"
                        className="text-blue-500 hover:underline"
                    >
                        비밀번호 찾기
                    </a>
                </div>
            </form>
        </div>
    )
}
