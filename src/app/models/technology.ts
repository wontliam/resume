export interface Technology {
  name: string;
  category: 'FE' | 'BE' | 'DB' | 'DevOps' | 'Productivity' | 'Design' | 'Analytics' | 'Other';
  icon: string | null;
}