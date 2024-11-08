import { Router } from 'toruk'
import { logger } from 'toruk/middlewares'
import { AssetsGetController } from '~/controllers/assets-get-controller.ts'
import { CraftGetController } from '~/controllers/craft-get-controller.ts'
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
    {
      path: '/craft',
      handler: CraftGetController,
    },
    {
      path: '/assets/*',
      handler: AssetsGetController,
    },
  ],
  use: [
    logger(),
  ],
})
