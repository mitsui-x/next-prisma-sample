'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewUserPage() {
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong')
      }

      router.push('/users')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'エラーが発生しました')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">新規ユーザー登録</h1>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            minLength={8}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     disabled:opacity-60"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                     transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? '登録中...' : '登録'}
          </button>
          <a
            href="/users"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            キャンセル
          </a>
        </div>
      </form>
    </div>
  )
} 