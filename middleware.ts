import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host'); // 'subdomain.domain.com'
  const subdomain = host?.split('.')[0]; // 'subdomain'

  if (subdomain === 'club') {
    return NextResponse.rewrite(new URL('/club', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
