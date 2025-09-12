export type LessonState = {
  covered: 'covered',
  upcoming: 'upcoming',
  draft: 'draft',
};

export interface Lesson {
  title: string;
  description?: string;
  state: keyof LessonState;
  order: number;
  tags?: string[];
  links?: Record<string, string>;
  hasSlides?: boolean;
};
