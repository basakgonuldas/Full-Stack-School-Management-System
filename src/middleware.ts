import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { JwtPayload } from 'jsonwebtoken';

import { routeAccessMap } from './lib/settings';
import { NextResponse } from 'next/server';

// Route matcher'ları oluşturma
const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));
console.log(matchers);

export default clerkMiddleware(async (auth, req) => {
  // auth() fonksiyonu asenkron olduğu için await ile beklememiz gerekiyor
  const { sessionClaims} = await auth(); 

  const role=(sessionClaims?.metadata as {role?:string})?.role;

for (const {matcher,allowedRoles} of matchers){
    if(matcher(req) &&!allowedRoles.includes(role!)){
        return NextResponse.redirect(new URL(`/${role}`,req.url));
    }
}
});

// Middleware konfigürasyonu
export const config = {
    matcher: [
      // Next.js dahili dosyalarını ve statik dosyaları atla
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      '/(api|trpc)(.*)',  // API rotaları için her zaman çalıştır
    ],
  };