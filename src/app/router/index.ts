import { Router } from 'toruk'
import { logger } from 'toruk/middlewares'
import { HeaderGetController } from '~/controllers/header-get-controller.ts'
import { LinkedinLinkGetController } from '~/controllers/link/linkedin-get-controller.ts'
import { WebsiteLinkGetController } from '~/controllers/link/website-get-controller.ts'
import { StatusGetController } from '~/controllers/status-get-controller.ts'

export const router = new Router({
  routes: [
    {
      path: '/status',
      handler: StatusGetController,
    },
    {
      path: '/header',
      handler: HeaderGetController,
    },
    {
      path: '/link',
      children: [
        {
          path: '/website',
          handler: WebsiteLinkGetController,
        },
        {
          path: '/linkedin',
          handler: LinkedinLinkGetController,
        },
      ],
    },
  ],
  use: [
    logger(),
  ],
})
