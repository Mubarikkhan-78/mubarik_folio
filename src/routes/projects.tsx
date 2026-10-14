import { createFileRoute } from '@tanstack/react-router';
import { DetailPage } from '@/components/portfolio/pages';
export const Route = createFileRoute('/projects')({
  head: () => ({ meta: [
    { title: 'Projects | Mubarik Khan' },
    { name: 'description', content: 'A space for Mubarik Khan’s future engineering projects and hands-on learning.' },
    { property: 'og:title', content: 'Projects | Mubarik Khan' },
    { property: 'og:description', content: 'A space for Mubarik Khan’s future engineering projects and hands-on learning.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Page,
});
function Page() { return <DetailPage kind="projects" />; }
