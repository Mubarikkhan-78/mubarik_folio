import { createContext, useContext, useState, type ReactNode } from 'react';

export const initialProfile = {
  introduction: 'A curious mind, a new chapter. I’m starting my engineering journey, exploring technology, and learning how to turn ideas into something meaningful.',
  about: 'I’m Mubarik Khan, a first-year B.Tech student at JECRC University in Jaipur, Rajasthan. I’m at the beginning of my engineering journey, with a focus on learning, exploring, and growing one step at a time.',
  goals: 'Build a strong foundation in engineering, explore different areas of technology, and develop practical skills through hands-on learning.',
  email: '', github: '', linkedin: '', skills: '',
};
export type Profile = typeof initialProfile;
const ProfileContext = createContext<{ profile: Profile; update: (profile: Profile) => void }>({ profile: initialProfile, update: () => {} });
export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, update] = useState(initialProfile);
  return <ProfileContext.Provider value={{ profile, update }}>{children}</ProfileContext.Provider>;
}
export const useProfile = () => useContext(ProfileContext);
