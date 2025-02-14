import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 既存のデータをクリア
  await prisma.user.deleteMany()

  // シードデータの作成
  const users = [
    {
      email: 'alice@example.com',
      password: 'password123', // 注: 実際のアプリケーションではハッシュ化したパスワードを使用してください
    },
    {
      email: 'bob@example.com',
      password: 'password456',
    },
    {
      email: 'charlie@example.com',
      password: 'password789',
    },
  ]

  for (const user of users) {
    await prisma.user.create({
      data: user,
    })
  }

  console.log('Seed data has been inserted')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 