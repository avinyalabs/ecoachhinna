import { cn } from '@/lib/utils'
import Link from 'next/link'

const pagePaths = [
  '/for-school-kids',
  '/for-business-owners',
  '/for-speaking-partner',
  '/for-working-professionals',
  '/other-services',
]

export type PageRoutes =
  | '/for-school-kids'
  | '/for-business-owners'
  | '/for-speaking-partner'
  | '/for-working-professionals'
  | '/other-services'
export const PageRouter = ({ currPage }: { currPage: PageRoutes }) => {
  return (
    <div className="py-16 text-[0.65rem] md:text-base px-2 gap-2 lg:gap-4 md:px-20 lg:px-36 grid   grid-cols-5 text-center font-medium border-b">
      {pagePaths.map((page, i) => {
        let pageName = page.replace('/for-', '').replace('-', ' ').toUpperCase()
        const pageNameCheck = page.charAt(1) == 'o'
        if (pageNameCheck) {
          pageName = 'Other Services'
        }
        return (
          <Link
            key={i}
            href={page}
            className={cn(
              ' border-t hover:border-accent  hover:text-accent duration-200 px-2 py-1 uppercase',
              currPage === page
                ? 'border-accent font-semibold text-accent'
                : 'border-white'
            )}
          >
            {pageName}
          </Link>
        )
      })}
    </div>
  )
}
