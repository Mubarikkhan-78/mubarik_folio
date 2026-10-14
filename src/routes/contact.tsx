import { createFileRoute } from '@tanstack/react-router';
import { DetailPage } from '@/components/portfolio/pages';
export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [
    { title: 'Contact | Mubarik Khan' },
    { name: 'description', content: 'Connect with Mubarik Khan, a B.Tech student at JECRC University in Jaipur.' },
    { property: 'og:title', content: 'Contact | Mubarik Khan' },
    { property: 'og:description', content: 'Connect with Mubarik Khan, a B.Tech student at JECRC University in Jaipur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Page,
});
function Page() { return <DetailPage kind="contact" />; }
