import { linkedinLinkCreator } from '~/container/application/link/linkedin-link-creator.ts'
import { Controller } from '~/controllers/controller.ts'

export const LinkedinLinkGetController: Controller<'/link/linkedin'> = () => {
  const link = linkedinLinkCreator.create()

  return new Response(link, {
    headers: {
      'content-type': 'image/svg+xml',
      'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      pragma: 'no-cache',
      expires: '0',
    },
  })
}
