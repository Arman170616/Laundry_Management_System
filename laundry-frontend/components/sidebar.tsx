import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/admin/dashboard" className="block p-2 hover:bg-gray-200 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/orders" className="block p-2 hover:bg-gray-200 rounded">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className="block p-2 hover:bg-gray-200 rounded">
              Users
            </Link>
          </li>
          <li>
            <Link href="/admin/services" className="block p-2 hover:bg-gray-200 rounded">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

