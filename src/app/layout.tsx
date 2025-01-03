import { Metadata, Viewport } from "next"
import { Playfair_Display, Open_Sans, Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

// Font configurations
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const opensans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "CorpInsights Collective",
  description: "Empowering B2B companies with scalable, human-centric tech solutions",
  applicationName: 'CorpInsights Collective',
  manifest: '/manifest.json',
  keywords: ['B2B', 'Tech Solutions', 'Business Growth', 'Innovation'],
  authors: [{ name: 'CorpInsights Team' }],
  creator: 'CorpInsights Collective',
  formatDetection: {
    telephone: true,
    email: true,
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CorpInsights',
  },
};

// Separate viewport export (Next.js 15 requirement)
export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body 
        className={`${playfair.variable} ${opensans.variable} ${montserrat.variable} antialiased min-h-full flex flex-col bg-white text-gray-900`}
      >
        {/* Main content wrapper */}
        <div className="flex min-h-full flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}