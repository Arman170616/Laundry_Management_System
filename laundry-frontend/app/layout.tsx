import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/components/auth-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
// import '@/styles/globals.css'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">


      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}

