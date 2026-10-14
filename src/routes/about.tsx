import { createFileRoute } from '@tanstack/react-router';
import { DetailPage } from '@/components/portfolio/pages';
export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: 'About Me | Mubarik Khan' },
    { name: 'description', content: 'Get to know Mubarik Khan and his engineering career goals.' },
    { property: 'og:title', content: 'About Me | Mubarik Khan' },
    { property: 'og:description', content: 'Get to know Mubarik Khan and his engineering career goals.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Page,
});
function Page() { return <DetailPage kind="about" />; }
