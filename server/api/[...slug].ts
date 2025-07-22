import { getSvg } from '../logic/get-svg';

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug;
  const pathname = slug ? '/' + slug : '/';

  const html = await $fetch<string>(pathname);

  const svg = await getSvg(html);

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      pragma: 'no-cache',
      expires: '0',
    },
  });
});
