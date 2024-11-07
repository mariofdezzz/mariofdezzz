import { headerCreator } from '~/container/application/header/header-creator.ts'
import { Controller } from '~/controllers/controller.ts'

// GET /header
export const HeaderGetController: Controller<'/header'> = ({ request }) => {
  const params = new URL(request.url).searchParams
  const theme = params.get('theme') ?? 'light'

  const header = headerCreator.create()

  return new Response(
    header,
    {
      headers: {
        'content-type': 'image/svg+xml',
        'cache-control':
          'no-store, no-cache, must-revalidate, proxy-revalidate',
        pragma: 'no-cache',
        expires: '0',
      },
    },
  )
}
