import { JSDOM } from 'jsdom';
import { parseStyles } from './parse-styles';

export async function getSvg(html: string) {
  const dom = new JSDOM(html);

  const { $, $$ } = getQueryFunctions(dom);

  const root = $('#__nuxt');
  const styles =
    process.env.NODE_ENV === 'development'
      ? $$('head link[rel="stylesheet"]')
      : $$('head style');
  const _root = root?.innerHTML ?? '';
  const _styles = await parseStyles([...styles]);

  return `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="100%">
      <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${[_styles, _root].join('\n')}
          </div>
      </foreignObject>
    </svg>
    `;
}

function getQueryFunctions(dom: JSDOM) {
  const document = dom.window.document;
  const $ = document.querySelector.bind(document);
  const $$ = dom.window.document.querySelectorAll.bind(document);

  return {
    $,
    $$,
    document,
  };
}
