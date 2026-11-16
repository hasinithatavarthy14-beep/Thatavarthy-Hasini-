import { useEffect } from 'react';
import { Printer, X } from 'lucide-react';
import {
  ABOUT_CONTENT,
  ACHIEVEMENTS,
  PORTFOLIO_PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from '../data/portfolioData';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-white/95 backdrop-blur-xs border-b border-zinc-200">
          <span className="text-xs font-medium text-zinc-500">
            Academic & Engineering Summary
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close academic summary"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-zinc-800">
          <div className="pb-4 border-b border-zinc-200">
            <h3
              id="resume-modal-title"
              className="text-2xl font-semibold tracking-tight text-zinc-900"
            >
              {PORTFOLIO_PROFILE.fullName}
            </h3>
            <p className="mt-1 text-sm text-zinc-600">
              {PORTFOLIO_PROFILE.academicStatus} · {PORTFOLIO_PROFILE.email}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-zinc-900">Education</h4>
            {ABOUT_CONTENT.education.map((edu) => (
              <div key={edu.degree} className="text-sm">
                <div className="flex flex-wrap justify-between gap-2 font-medium text-zinc-900">
                  <span>{edu.degree}</span>
                  <span className="text-zinc-500 tabular-nums">{edu.period}</span>
                </div>
                <p className="text-zinc-600">{edu.institution}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2 border-t border-zinc-200">
            <h4 className="text-sm font-semibold text-zinc-900">Core Skills</h4>
            <div className="space-y-1.5 text-sm text-zinc-600">
              {SKILL_GROUPS.map((group) => (
                <p key={group.id}>
                  <span className="font-medium text-zinc-900">{group.title}:</span>{' '}
                  {group.items.map((item) => item.name).join(' · ')}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-zinc-200">
            <h4 className="text-sm font-semibold text-zinc-900">Selected Projects</h4>
            {PROJECTS.map((project) => (
              <div key={project.id} className="text-sm">
                <div className="flex flex-wrap justify-between gap-2 font-medium text-zinc-900">
                  <span>{project.title}</span>
                  <span className="text-zinc-500 tabular-nums">{project.year}</span>
                </div>
                <p className="text-zinc-600">{project.summary}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2 border-t border-zinc-200">
            <h4 className="text-sm font-semibold text-zinc-900">
              Certifications & Honors
            </h4>
            <ul className="space-y-1 text-sm text-zinc-600">
              {ACHIEVEMENTS.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <span className="font-medium text-zinc-900">{item.title}</span> —{' '}
                  {item.issuer} ({item.year})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
