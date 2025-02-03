import {NextRequest, NextResponse} from 'next/server';
import {createClient} from "@/lib/supabaseServer";

export async function middleware(req:NextRequest) {
    const res = NextResponse.next();
    const supabase=await createClient();
    const { data } = await supabase.auth.getSession();
    const publicRoutes = ["/login",
        "/register",
        "/forgot-password",
       /* "/quote/.*!/anotherDocuments/PunchOutOf15",
        "/quote/.*!/anotherDocuments/PunchOutOf60"*/
    ];
    const isPublicRoute = publicRoutes.some((route) =>
        new RegExp(`^${route}$`).test(req.nextUrl.pathname)
    );    if (!data.session && !isPublicRoute) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return res;
}
export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
