import type { H3Event } from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const { params } = event.context
  if (!params) {
    throw createError({ statusCode: 403 })
  }

  const example = await prisma.currency.findFirst({ where: { id: params.id } })
  if (!example) {
    throw createError({ statusCode: 404, statusMessage: `Failed to find example with id ${params.id}` })
  }

  return example
})
