import { createFileRoute } from '@tanstack/react-router';
import { DetailPage } from '@/components/portfolio/pages';
export const Route = createFileRoute('/education')({
  head: () => ({ meta: [
    { title: 'Education | Mubarik Khan' },
    { name: 'description', content: 'Mubarik Khan’s first-year B.Tech studies at JECRC University, Jaipur, Rajasthan.' },
    { property: 'og:title', content: 'Education | Mubarik Khan' },
    { property: 'og:description', content: 'Mubarik Khan’s first-year B.Tech studies at JECRC University, Jaipur, Rajasthan.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Page,
});
function Page() { return <DetailPage kind="education" />; }
