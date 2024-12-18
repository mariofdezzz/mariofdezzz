import { substackLinkCreator } from '~/container/application/link/substack-link-creator.ts'
import { Controller } from '~/controllers/controller.ts'

export const SubstackLinkGetController: Controller<'/link/linkedin'> = () => {
	const link = substackLinkCreator.create()

	return new Response(link, {
		headers: {
			'content-type': 'image/svg+xml',
			'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
			pragma: 'no-cache',
			expires: '0',
		},
	})
}
