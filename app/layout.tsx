import { Mission3AudioProvider } from './components/Mission3AudioProvider';

export default function Mission3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Mission3AudioProvider>{children}</Mission3AudioProvider>;
}