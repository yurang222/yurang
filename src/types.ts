export interface PersonalInfo {
  name: string;
  englishName: string;
  role: string;
  grade: string;
  school: string;
  districtOffice: string;
  cityOffice: string;
  position: string;
  payGrade: string;
  appointmentDate: string;
  totalExperience: string;
  email: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  major: string;
  period: string;
  graduationDate: string;
  credits?: string;
  gpa?: string;
  details?: string[];
}

export interface LicenseItem {
  title: string;
  issuer: string;
  issueDate: string;
  licenseNumber?: string;
  type: string;
}

export interface ExperienceItem {
  organization: string;
  period: string;
  role: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
}

export interface CompetencyItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  iconName: string;
  points: string[];
  actionItems: string[];
  tags: string[];
}

export type TrainingCategory = 'all' | 'ai-edtech' | 'sel-pbs' | 'curriculum-mgmt';

export interface TrainingItem {
  id: string;
  title: string;
  hours: number;
  institution: string;
  category: 'ai-edtech' | 'sel-pbs' | 'curriculum-mgmt';
  year?: string;
  description?: string;
}
