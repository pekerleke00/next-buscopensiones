import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/api/items/')) {
        const id = request.nextUrl.pathname.replace('/api/items/', '')
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

        if (!checkMongoIDRegExp.test(id)) {
            const url = request.nextUrl.clone();
            url.pathname = '/api/bad-request';
            url.search = `?message=${id} is not a valid id`
            return NextResponse.rewrite(url);
        }
    }


    return NextResponse.next()
}

// // See "Matching Paths" below to learn more
export const config = {
    matcher: ['/api/items/:path*'],
}