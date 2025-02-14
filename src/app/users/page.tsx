import { prisma } from '@/lib/prisma'

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
    },
  })

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ユーザー一覧</h1>
        <a
          href="/users/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                   transition-colors"
        >
          新規作成
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">ID</th>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">メールアドレス</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{user.id}</td>
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 