import { Lusitana } from 'next/font/google';
import { Inter } from 'next/font/google';

// Export a named `lusitana` font instance used across the UI components.
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const inter = Inter({ subsets: ['latin'] });
