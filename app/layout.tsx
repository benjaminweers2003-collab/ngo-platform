import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deep Light Fountain - Student Sponsorship',
  description: 'Support a student through Deep Light Fountain sponsorship program',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
