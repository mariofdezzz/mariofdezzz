export async function fetchStyles(urls: string[]) {
  const promises = urls.map((url) =>
    $fetch<string>('http://localhost:3000' + url, {
      headers: {
        Accept: 'text/css,*/*;q=0.1',
      },
    })
  );

  return await Promise.all(promises);
}
