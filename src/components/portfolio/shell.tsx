import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Github, Linkedin, Menu, X, Pencil, Check, GraduationCap } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useProfile, type Profile } from './profile';

const navigation = [{ to: '/', label: 'Home' }, { to: '/about', label: 'About Me' }, { to: '/education', label: 'Education' }, { to: '/skills', label: 'Skills' }, { to: '/projects', label: 'Projects' }, { to: '/certifications', label: 'Achievements' }, { to: '/contact', label: 'Contact' }] as const;
export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const { profile } = useProfile();
  return <div className="social-links">{([{ key: 'github', label: 'GitHub', Icon: Github }, { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin }] as const).map(({ key, label, Icon }) => <Button key={key} asChild variant="ghost" className="social-link"><a href={profile[key] || '/contact'} target={profile[key] ? '_blank' : undefined} rel={profile[key] ? 'noopener noreferrer' : undefined} aria-label={label}><Icon size={18} />{!compact && <span>{label}</span>} {!compact && <ArrowUpRight size={14} />}</a></Button>)}</div>;
}
export function PortfolioShell({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const [editing, setEditing] = useState(false);
  const { profile, update } = useProfile();
  const [draft, setDraft] = useState<Profile>(profile);
  const pathname = useRouterState({ select: state => state.location.pathname });
  return <div className="portfolio-shell">
    <header className="site-header"><div className="header-inner"><Link to="/" className="wordmark" aria-label="Mubarik Khan home"><span className="monogram">mk<span>.</span></span><span className="wordmark-name">Mubarik Khan<span>PERSONAL PORTFOLIO</span></span></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} className={pathname === item.to ? 'nav-link active' : 'nav-link'}>{item.label}</Link>)}</nav><Button asChild variant="outline" className="header-cta"><Link to="/contact">Let’s connect <ArrowUpRight /></Link></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div>{menu && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setMenu(false)} className={pathname === item.to ? 'nav-link active' : 'nav-link'}>{item.label}</Link>)}</nav>}</header>
    <main>{children}</main>
    <footer className="site-footer"><div className="footer-top"><Link to="/" className="footer-name">Mubarik Khan<span>.</span></Link><p>Learning today. Building tomorrow.</p><SocialLinks compact /></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mubarik Khan</span><span><GraduationCap size={15} /> JECRC University · Jaipur, Rajasthan</span><Button variant="ghost" size="sm" onClick={() => { setDraft(profile); setEditing(true); }}><Pencil /> Edit profile</Button></div></footer>
    <Dialog open={editing} onOpenChange={setEditing}><DialogContent className="profile-dialog"><DialogHeader><DialogTitle>Edit your profile</DialogTitle><DialogDescription>Changes apply to this preview until you refresh. Your name and student title stay unchanged.</DialogDescription></DialogHeader><form onSubmit={event => { event.preventDefault(); update(draft); setEditing(false); }} className="profile-form">{([{ key: 'introduction', label: 'Introduction', multiline: true }, { key: 'about', label: 'About me', multiline: true }, { key: 'goals', label: 'Career goals', multiline: true }, { key: 'skills', label: 'Technical skills (comma-separated)' }, { key: 'email', label: 'Email address', type: 'email' }, { key: 'github', label: 'GitHub profile URL', type: 'url' }, { key: 'linkedin', label: 'LinkedIn profile URL', type: 'url' }] as const).map(field => <label key={field.key}>{field.label}{'multiline' in field ? <textarea value={draft[field.key]} onChange={event => setDraft({ ...draft, [field.key]: event.target.value })} rows={3} /> : <input type={'type' in field ? field.type : 'text'} value={draft[field.key]} onChange={event => setDraft({ ...draft, [field.key]: event.target.value })} placeholder={field.key === 'skills' ? 'Add only skills you are learning or know' : ''} />}</label>)}<Button type="submit"><Check /> Apply changes</Button></form></DialogContent></Dialog>
  </div>;
}
