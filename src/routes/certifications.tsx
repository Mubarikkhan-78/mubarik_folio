import { createFileRoute } from '@tanstack/react-router';
import { DetailPage } from '@/components/portfolio/pages';
export const Route = createFileRoute('/certifications')({
  head: () => ({ meta: [
    { title: 'Certifications & Achievements | Mubarik Khan' },
    { name: 'description', content: 'Verified milestones and future certifications in Mubarik Khan’s engineering journey.' },
    { property: 'og:title', content: 'Certifications & Achievements | Mubarik Khan' },
    { property: 'og:description', content: 'Verified milestones and future certifications in Mubarik Khan’s engineering journey.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Page,
});
function Page() { return <DetailPage kind="certifications" />; }
