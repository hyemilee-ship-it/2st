
export type ProcessType = 'script' | 'storyboard' | 'background' | 'lineart' | 'color' | 'edit';

export interface ProcessSchedule {
  draftDate?: string;
  fixedDate?: string;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  processes: Record<ProcessType, ProcessSchedule>;
  targetReleaseDate?: string;
}

export const PROCESS_LABELS: Record<ProcessType, string> = {
  script: '글',
  storyboard: '연출',
  background: '배경',
  lineart: '작화',
  color: '컬러',
  edit: '편집'
};

export const PROCESS_ORDER: ProcessType[] = ['script', 'storyboard', 'background', 'lineart', 'color', 'edit'];
