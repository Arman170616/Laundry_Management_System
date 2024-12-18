// Breadcrumbs.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Breadcrumbs({ crumbs }: { crumbs: { label: string, href: string }[] }) {
  const router = useRouter()

  return (
    <nav className="bg-gray-100 py-2 px-4 rounded-md">
      <ol className="list-none flex space-x-2">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <Link
              href={crumb.href}
              className={`text-blue-500 hover:text-blue-700 ${
                router.pathname === crumb.href ? 'font-semibold' : ''
              }`}
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
