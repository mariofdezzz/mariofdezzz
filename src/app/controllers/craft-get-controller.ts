import { craftCreator } from '~/container/application/craft/craft-creator.ts'
import { Controller } from '~/controllers/controller.ts'

export const CraftGetController: Controller<'/craft'> = ({ request }) => {
  const params = new URL(request.url).searchParams

  const craft = craftCreator.create()

  return new Response(
    craft,
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
