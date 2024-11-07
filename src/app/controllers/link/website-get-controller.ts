import { websiteLinkCreator } from '~/container/application/link/website-link-creator.ts'
import { Controller } from '~/controllers/controller.ts'

export const WebsiteLinkGetController: Controller<'/link/website'> = () => {
  const link = websiteLinkCreator.create()

  return new Response(link, {
    headers: {
      'content-type': 'image/svg+xml',
      'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      pragma: 'no-cache',
      expires: '0',
    },
  })
}
