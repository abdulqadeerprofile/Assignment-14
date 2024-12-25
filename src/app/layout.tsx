import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        </body>
    </html>
  )
}
