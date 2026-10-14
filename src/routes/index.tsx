import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/portfolio/pages';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Mubarik Khan | First-Year B.Tech Student' },
    { name: 'description', content: 'Meet Mubarik Khan, a first-year B.Tech student at JECRC University, Jaipur. Explore my education, learning journey, and career goals.' },
    { property: 'og:title', content: 'Mubarik Khan | Personal Portfolio' },
    { property: 'og:description', content: 'First-Year B.Tech Student at JECRC University, Jaipur. Learning today. Building tomorrow.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: HomePage,
});
