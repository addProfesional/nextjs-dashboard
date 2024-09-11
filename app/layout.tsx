import { montserrat } from './ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
        <footer className="flex justify-center items-center h-20 bg-gray-800 text-white">
          Hecho con ❤️ por Vercel
        </footer>
      </body>
    </html>
  );
}
