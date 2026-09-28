// Stand-in for "next/headers" in the static SPA build (STATIC_EXPORT=1).
// A static export renders every page once at build time with no request,
// so cookies and headers are always empty.

const emptyCookies = {
  get: (_name: string): { name: string; value: string } | undefined => undefined,
  getAll: (): { name: string; value: string }[] => [],
  has: (_name: string): boolean => false,
};

export async function cookies() {
  return emptyCookies;
}

export async function headers() {
  return new Headers();
}

export async function draftMode() {
  return { isEnabled: false, enable() {}, disable() {} };
}
