import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-white/95 backdrop-blur-xs border-b border-zinc-200">
          <div className="flex items-center gap-2 text-xs text-zinc-500 tabular-nums">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              {project.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 aspect-[4/3]">
            <ResilientImage
              src={project.image}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-zinc-200">
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-zinc-900">
                Architecture & Implementation
              </h4>
              <ul className="space-y-2.5 text-sm leading-relaxed text-zinc-600">
                {project.architecture.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-mono text-xs text-zinc-400 pt-0.5 tabular-nums shrink-0">
                      0{index + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">Outcome</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {project.outcome}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">Technologies</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {project.stack.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-200">
            <span className="text-xs text-zinc-500">
              Focus: {project.demoFocus}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Close
              </button>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>View Source</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
