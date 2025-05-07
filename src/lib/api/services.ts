import { apiClient } from './client';
import { API_ENDPOINTS } from './endpoints';

// Types
import type { ProjectType } from '@/types/grid/ProjectType';
import type { ActivityType } from '@/types/grid/ActivityType';
import type { AwardType } from '@/types/grid/AwardType';
import type { CertificateType } from '@/types/grid/CertificateType';
import type { AboutType } from '@/types/info/AboutType';
import type { SkillType } from '@/types/info/SkillType';

// Response types
interface ApiResponse<T> {
  results: T[];
}

// Grid services
export const getProjects = async (): Promise<ProjectType[]> => {
  const response = await apiClient.get<ApiResponse<ProjectType>>(API_ENDPOINTS.GRID.PROJECTS);
  return response.results;
};

export const getActivities = async (): Promise<ActivityType[]> => {
  const response = await apiClient.get<ApiResponse<ActivityType>>(API_ENDPOINTS.GRID.ACTIVITIES);
  return response.results;
};

export const getAwards = async (): Promise<AwardType[]> => {
  const response = await apiClient.get<ApiResponse<AwardType>>(API_ENDPOINTS.GRID.AWARDS);
  return response.results;
};

export const getCertificates = async (): Promise<CertificateType[]> => {
  const response = await apiClient.get<ApiResponse<CertificateType>>(API_ENDPOINTS.GRID.CERTIFICATES);
  return response.results;
};

// Info services
export const getAbout = async (): Promise<AboutType[]> => {
  const response = await apiClient.get<ApiResponse<AboutType>>(API_ENDPOINTS.INFO.ABOUT);
  return response.results;
};

export const getSkills = async (): Promise<SkillType[]> => {
  const response = await apiClient.get<ApiResponse<SkillType>>(API_ENDPOINTS.INFO.SKILLS);
  return response.results;
}; 