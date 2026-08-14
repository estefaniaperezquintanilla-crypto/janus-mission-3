import './globals.css';

export const metadata = {
  title: 'JANUS Mission 3',
  description: 'Operation White Velvet',
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