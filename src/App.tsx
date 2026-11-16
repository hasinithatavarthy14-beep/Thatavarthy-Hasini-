import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Mail,
  Send,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import { ResilientImage } from './components/ResilientImage';
import { ResumeModal } from './components/ResumeModal';
import {
  ABOUT_CONTENT,
  ACHIEVEMENTS,
  HERO_METRICS,
  PORTFOLIO_PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  type AchievementCategory,
  type ProjectCategory,
  type ProjectItem,
} from './data/portfolioData';

type SkillFilter = 'all' | 'languages' | 'technical' | 'other';

const PROJECT_FILTERS: ProjectCategory[] = [
  'All',
  'Web Systems',
  'AI & Data',
  'Academic',
];

const ACHIEVEMENT_FILTERS: AchievementCategory[] = [
  'All',
  'Certifications',
  'Awards',
  'Participation',
];

const SKILL_FILTERS: { id: SkillFilter; label: string }[] = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'languages', label: 'Languages' },
  { id: 'technical', label: 'Technical' },
  { id: 'other', label: 'Other Skills' },
];

export default function App() {
  const [skillFilter, setSkillFilter] = useState<SkillFilter>('all');
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>('All');
  const [achievementFilter, setAchievementFilter] =
    useState<AchievementCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [resumeOpen, setResumeOpen] = useState(false);

  const [emailCopied, setEmailCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredSkillGroups =
    skillFilter === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.id === skillFilter);

  const filteredProjects =
    projectFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === projectFilter);

  const filteredAchievements =
    achievementFilter === 'All'
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((item) => item.category === achievementFilter);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2400);
    } catch {
      setEmailCopied(false);
    }
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = formState.name.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError('');
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormState({ name: '', email: '', subject: '', message: '' });
    setFormError('');
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
      <Navbar brandName={PORTFOLIO_PROFILE.fullName} />

      <main className="flex-1">
        {/* 1. HOME / HERO SECTION */}
        <section
          id="home"
          className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between py-1">
              <div className="space-y-6">
                <p className="text-sm font-medium text-blue-600">
                  {PORTFOLIO_PROFILE.academicStatus}
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.08] text-zinc-900">
                  {PORTFOLIO_PROFILE.fullName}
                </h1>

                <p className="font-serif italic text-xl sm:text-2xl text-zinc-700 leading-snug max-w-xl">
                  {PORTFOLIO_PROFILE.roleTitle} crafting clear web applications
                  and applied data systems.
                </p>

                <p className="text-base leading-relaxed text-zinc-600 max-w-2xl">
                  {PORTFOLIO_PROFILE.intro}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-zinc-800 bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <FileText className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                  <span>Academic Summary</span>
                </button>

                <a
                  href="#contact"
                  className="px-3 py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors whitespace-nowrap shrink-0"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100">
                <ResilientImage
                  src={PORTFOLIO_PROFILE.heroImage}
                  alt={PORTFOLIO_PROFILE.heroImageAlt}
                  fallbackTitle={PORTFOLIO_PROFILE.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Full-width academic snapshot strip below hero split */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 border border-zinc-200 rounded-2xl bg-white divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
            {HERO_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className={`p-5 sm:p-6 ${
                  idx % 2 === 1 ? 'border-l border-zinc-200 lg:border-l-0' : ''
                }`}
              >
                <div className="font-mono text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 tabular-nums">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm font-medium text-zinc-900">
                  {metric.label}
                </div>
                <div className="mt-0.5 text-xs text-zinc-500">{metric.context}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. ABOUT ME SECTION */}
        <section
          id="about"
          className="border-t border-zinc-200 bg-white py-16 sm:py-20"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-4 space-y-5">
                <div>
                  <p className="font-mono text-xs text-zinc-500 tabular-nums">
                    01 · Background & Direction
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                    About Me
                  </h2>
                </div>

                <p className="font-serif text-lg leading-relaxed text-zinc-700">
                  “Good engineering combines sound algorithmic reasoning with
                  interfaces that respect the person using them.”
                </p>

                <dl className="pt-4 border-t border-zinc-200 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-500">Program</dt>
                    <dd className="font-medium text-zinc-900 text-right">
                      B.Tech CSE
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-500">Academic Track</dt>
                    <dd className="font-medium text-zinc-900 text-right tabular-nums">
                      2023 — 2027
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-500">Primary Focus</dt>
                    <dd className="font-medium text-zinc-900 text-right">
                      Web Systems & Applied ML
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-8 space-y-10">
                <div className="space-y-4 text-base leading-relaxed text-zinc-600 max-w-3xl">
                  {ABOUT_CONTENT.narrative.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Educational Background */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                    Educational Background
                  </h3>
                  <div className="border-t border-zinc-200 divide-y divide-zinc-200">
                    {ABOUT_CONTENT.education.map((edu) => (
                      <div key={edu.degree} className="py-5 space-y-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h4 className="text-base font-semibold text-zinc-900">
                            {edu.degree}
                          </h4>
                          <span className="font-mono text-xs text-zinc-500 tabular-nums">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-zinc-700">
                          {edu.institution}
                        </p>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {edu.details}
                        </p>
                        {edu.coursework && (
                          <p className="pt-1 text-xs leading-relaxed text-zinc-500">
                            <span className="font-medium text-zinc-700">
                              Relevant Coursework:
                            </span>{' '}
                            {edu.coursework.join(' · ')}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interests & Career Aspirations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-200">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                      Technical & Personal Interests
                    </h3>
                    <ul className="space-y-4">
                      {ABOUT_CONTENT.interests.map((interest) => (
                        <li key={interest.title} className="space-y-1">
                          <div className="text-sm font-semibold text-zinc-900">
                            {interest.title}
                          </div>
                          <p className="text-sm leading-relaxed text-zinc-600">
                            {interest.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                      Learning Goals & Career Aspirations
                    </h3>
                    <div className="space-y-4">
                      {ABOUT_CONTENT.careerGoals.map((goal) => (
                        <div
                          key={goal.horizon}
                          className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5"
                        >
                          <div className="text-xs font-semibold text-blue-600">
                            {goal.horizon}
                          </div>
                          <p className="text-sm leading-relaxed text-zinc-600">
                            {goal.statement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section
          id="skills"
          className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-zinc-500 tabular-nums">
                  02 · Capabilities Matrix
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                  Skills & Technical Stack
                </h2>
                <p className="mt-2 text-base text-zinc-600 max-w-2xl">
                  Programming languages, engineering frameworks, and analytical
                  skills practiced across academic labs and personal builds.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Filter skills by category"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-zinc-200/70 rounded-lg self-start"
              >
                {SKILL_FILTERS.map((filter) => {
                  const active = skillFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSkillFilter(filter.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600 ${
                        active
                          ? 'bg-white text-zinc-900 shadow-xs'
                          : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={`grid grid-cols-1 gap-6 ${
                filteredSkillGroups.length === 1
                  ? 'lg:grid-cols-1'
                  : 'lg:grid-cols-3'
              }`}
            >
              {filteredSkillGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-zinc-200">
                      <h3 className="text-lg font-semibold text-zinc-900">
                        {group.index}. {group.title}
                      </h3>
                      <span className="font-mono text-xs text-zinc-500 tabular-nums shrink-0">
                        {group.items.length} items
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                      {group.subtitle}
                    </p>

                    <ul className="mt-5 divide-y divide-zinc-100">
                      {group.items.map((skill) => (
                        <li key={skill.name} className="py-3 first:pt-0 last:pb-0">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-sm font-semibold text-zinc-900">
                              {skill.name}
                            </span>
                            <span className="text-xs font-medium text-blue-600 shrink-0">
                              {skill.level}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                            {skill.context}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section
          id="projects"
          className="border-t border-zinc-200 bg-white py-16 sm:py-20"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-zinc-500 tabular-nums">
                  03 · Selected Work
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                  Projects
                </h2>
                <p className="mt-2 text-base text-zinc-600 max-w-2xl">
                  Academic and personal builds exploring graph algorithms,
                  full-stack web systems, and applied computer vision.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Filter projects by category"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-zinc-100 rounded-lg self-start"
              >
                {PROJECT_FILTERS.map((category) => {
                  const active = projectFilter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setProjectFilter(category)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600 ${
                        active
                          ? 'bg-white text-zinc-900 shadow-xs'
                          : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden flex flex-col transition-colors duration-150 hover:border-zinc-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-100 border-b border-zinc-200">
                    <ResilientImage
                      src={project.image}
                      alt={project.imageAlt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-zinc-500 tabular-nums">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.role}</span>
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                        {project.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-zinc-600">
                        {project.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 space-y-3">
                      <p className="text-xs text-zinc-500">
                        {project.stack.join(' · ')}
                      </p>

                      <div className="flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </button>

                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>Source</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ACHIEVEMENTS SECTION */}
        <section
          id="achievements"
          className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-zinc-500 tabular-nums">
                  04 · Recognition & Credentials
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                  Achievements
                </h2>
                <p className="mt-2 text-base text-zinc-600 max-w-2xl">
                  Verified technical certifications, academic honors, hackathon
                  awards, and campus community leadership.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Filter achievements by type"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-zinc-200/70 rounded-lg self-start"
              >
                {ACHIEVEMENT_FILTERS.map((category) => {
                  const active = achievementFilter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setAchievementFilter(category)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600 ${
                        active
                          ? 'bg-white text-zinc-900 shadow-xs'
                          : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl divide-y divide-zinc-200">
              {filteredAchievements.map((item) => (
                <div
                  key={item.id}
                  className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
                >
                  <div className="md:col-span-3 space-y-1">
                    <div className="font-mono text-xs text-zinc-500 tabular-nums">
                      {item.year}
                    </div>
                    <div className="text-xs font-semibold text-blue-600">
                      {item.category}
                    </div>
                  </div>

                  <div className="md:col-span-9 space-y-1.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-zinc-900">
                        {item.title}
                      </h3>
                      <span className="text-xs text-zinc-500">
                        {item.credentialNote}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-zinc-700">
                      {item.issuer}
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section
          id="contact"
          className="border-t border-zinc-200 bg-white py-16 sm:py-20"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <p className="font-mono text-xs text-zinc-500 tabular-nums">
                    05 · Direct Inquiry
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                    Contact
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-zinc-600">
                    Open to software engineering internships, collaborative
                    academic projects, and technical mentorship conversations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                  <div className="text-xs font-medium text-zinc-500">
                    Professional Email
                  </div>
                  <a
                    href={`mailto:${PORTFOLIO_PROFILE.email}`}
                    className="block text-base font-semibold text-zinc-900 hover:text-blue-600 transition-colors break-all"
                  >
                    {PORTFOLIO_PROFILE.email}
                  </a>
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-zinc-800 bg-white border border-zinc-200 hover:bg-zinc-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      {emailCopied ? (
                        <>
                          <Check
                            className="w-3.5 h-3.5 text-blue-600"
                            aria-hidden="true"
                          />
                          <span>Copied Email</span>
                        </>
                      ) : (
                        <>
                          <Copy
                            className="w-3.5 h-3.5 text-zinc-500"
                            aria-hidden="true"
                          />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PORTFOLIO_PROFILE.email}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Open Mail App</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-zinc-200">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    Professional Links
                  </h3>
                  <ul className="divide-y divide-zinc-200 text-sm">
                    <li>
                      <a
                        href={PORTFOLIO_PROFILE.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 flex items-center justify-between text-zinc-700 hover:text-zinc-900 transition-colors"
                      >
                        <span>GitHub — Code & Repositories</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={PORTFOLIO_PROFILE.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 flex items-center justify-between text-zinc-700 hover:text-zinc-900 transition-colors"
                      >
                        <span>LinkedIn — Academic & Career Profile</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={PORTFOLIO_PROFILE.links.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 flex items-center justify-between text-zinc-700 hover:text-zinc-900 transition-colors"
                      >
                        <span>LeetCode — Problem Solving Practice</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setResumeOpen(true)}
                        className="w-full py-2.5 flex items-center justify-between text-left text-zinc-700 hover:text-zinc-900 transition-colors"
                      >
                        <span>Printable Academic Summary / CV</span>
                        <FileText className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
                  {formSubmitted ? (
                    <div className="py-10 space-y-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white">
                        <Check className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold text-zinc-900">
                        Message Ready for {PORTFOLIO_PROFILE.firstName}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-600 max-w-md">
                        Thank you, {formState.name}. Your inquiry has been
                        validated. For direct replies, you can also reach{' '}
                        <a
                          href={`mailto:${PORTFOLIO_PROFILE.email}?subject=${encodeURIComponent(
                            formState.subject || 'Portfolio Inquiry'
                          )}&body=${encodeURIComponent(formState.message)}`}
                          className="font-medium text-blue-600 hover:underline"
                        >
                          {PORTFOLIO_PROFILE.email}
                        </a>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-4 py-2 text-sm font-medium text-zinc-800 bg-white border border-zinc-200 hover:bg-zinc-100 rounded-lg transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-5" noValidate>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900">
                          Send a Message
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          Reach out regarding internships, projects, or academic
                          collaborations.
                        </p>
                      </div>

                      {formError && (
                        <div
                          role="alert"
                          className="px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg"
                        >
                          {formError}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-xs font-semibold text-zinc-700 mb-1.5"
                          >
                            Your Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            placeholder="Ananya Rao"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-xs font-semibold text-zinc-700 mb-1.5"
                          >
                            Email Address
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            placeholder="name@example.com"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-subject"
                          className="block text-xs font-semibold text-zinc-700 mb-1.5"
                        >
                          Subject
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              subject: e.target.value,
                            }))
                          }
                          placeholder="Internship Opportunity / Project Collaboration"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-semibold text-zinc-700 mb-1.5"
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          required
                          value={formState.message}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          placeholder="Share a brief note about your inquiry..."
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-y"
                        />
                      </div>

                      <div className="flex items-center justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          <Send className="w-4 h-4" aria-hidden="true" />
                          <span>Send Message</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 {PORTFOLIO_PROFILE.fullName} · {PORTFOLIO_PROFILE.academicStatus}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#home" className="hover:text-zinc-900 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">
              Projects
            </a>
            <a
              href="#achievements"
              className="hover:text-zinc-900 transition-colors"
            >
              Achievements
            </a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
