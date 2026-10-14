import { createFileRoute } from '@tanstack/react-router';
import { DetailPage } from '@/components/portfolio/pages';
export const Route = createFileRoute('/skills')({
  head: () => ({ meta: [
    { title: 'Skills | Mubarik Khan' },
    { name: 'description', content: 'Follow Mubarik Khan’s technical learning journey as a first-year engineering student.' },
    { property: 'og:title', content: 'Skills | Mubarik Khan' },
    { property: 'og:description', content: 'Follow Mubarik Khan’s technical learning journey as a first-year engineering student.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Page,
});
function Page() { return <DetailPage kind="skills" />; }
