import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/','/shop-all','/tees','/sweatshirts','/outerwear','bottoms','accessories','/products(.*)'])

export default clerkMiddleware( async (auth, req) => {
  if (!((await auth()).userId) && !isPublicRoute(req)) {
    auth.protect()
    return (await auth()).redirectToSignIn();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};