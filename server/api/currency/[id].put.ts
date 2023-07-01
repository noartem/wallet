import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const { params } = event.context
  if (!params) {
    throw createError({ statusCode: 403 })
  }

  const id = params.id
  const body = await readBody(event)
  const data = {
    id,
    ...body
  }
  return prisma.currency.upsert({ where: { id }, create: data, update: data })
})
