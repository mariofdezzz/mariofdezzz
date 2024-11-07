import { Controller } from '~/controllers/controller.ts'

// GET /status
export const StatusGetController: Controller<'/status'> = () => {
  return new Response('ok')
}
