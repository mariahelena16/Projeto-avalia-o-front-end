import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const logged = request.cookies.get("logged")?.value;

    //Se não estiver logado, redireciona para a página de login
    if (!logged && request.nextUrl.pathname.startsWith('dashboard')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    //Se estiver logado, redireciona para a página de dashboard
    if (logged && request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/', '/dashboard/:path*'],
}