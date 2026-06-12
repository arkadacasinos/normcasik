import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin', 'cyrillic'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'cyrillic'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://norm-casino.ru'

export const metadata: Metadata = {
  title: 'Norm Casino - онлайн казино с кешбэком и лучшими слотами',
  description: 'Norm Casino - надежное онлайн казино с кешбэком до 15%, лучшими слотами, live казино и азартными играми. Играй сейчас!',
  keywords: ['норм казино', 'norm casino', 'онлайн казино', 'казино слоты', 'live казино', 'азартные игры'],
  authors: [{ name: 'Norm Casino' }],
  creator: 'Norm Casino',
  publisher: 'Norm Casino',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    title: 'Norm Casino - онлайн казино с кешбэком и лучшими слотами',
    description: 'Norm Casino - надежное онлайн казино с кешбэком до 15%, лучшими слотами, live казино и азартными играми.',
    siteName: 'Norm Casino',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Norm Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norm Casino',
    description: 'Онлайн казино с кешбэком до 15% и лучшими слотами',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#ff0000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} bg-[#0e0f14]`}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href={siteUrl} />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className="font-sans antialiased bg-[#0e0f14] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
