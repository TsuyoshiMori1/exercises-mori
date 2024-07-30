type UrlParts = {
  base: string;
  addQuery?: [string, string][];
  path?: string;
};

export function modifyUrl({ base, addQuery, path }: UrlParts): string {
  let url: URL;

  try {
    url = new URL(base);
  } catch {
    throw new Error("Invalid URL format");
  }

  if (path) {
    url.pathname = new URL(path, url).pathname;
  }

  if (addQuery) {
    addQuery.forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  return url.toString();
}
