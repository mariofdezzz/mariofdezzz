import { Controller } from '~/controllers/controller.ts'

export const AssetsGetController: Controller<'/assets/*'> = async (
  { request },
) => {
  if (request.method === 'OPTIONS') return new Response()

  const url = new URL(request.url)
  const path = url.pathname.substring(1)

  try {
    const fileInfo = await Deno.stat(path)
    const file = await Deno.open(path, { read: true })

    return new Response(file.readable, {
      headers: {
        'content-type': 'video/mov',
        'Content-Length': fileInfo.size.toString(),
      },
    })
  } catch (error) {
    console.log(error)

    return new Response('Not found', {
      status: 404,
      headers: {
        'content-type': 'text/plain',
        'cache-control':
          'no-store, no-cache, must-revalidate, proxy-revalidate',
        pragma: 'no-cache',
        expires: '0',
      },
    })
  }
}
