import { fetchStyles } from './fetch-styles';

export async function parseStyles(styles: Element[]) {
  if (process.env.NODE_ENV === 'development') {
    const urls = styles
      .map((style) => style.getAttribute('href'))
      .filter((v): v is string => Boolean(v));

    const _styles = await fetchStyles(urls);

    return _styles.map((style) => `<style>${style}</style>`).join('\n');
  } else {
    return styles.map((style) => style.outerHTML).join('\n');
  }
}
