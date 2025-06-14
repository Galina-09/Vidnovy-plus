export interface DamageReport {
  id: string;
  title: string;
  description: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  category: 'infrastructure' | 'residential' | 'commercial' | 'industrial' | 'transport';
  severity: 'low' | 'medium' | 'high' | 'critical';
  photos: string[];
  estimatedCost: number;
  actualCost?: number;
  status: 'reported' | 'verified' | 'in_progress' | 'completed' | 'cancelled';
  reportedBy: string;
  reportedAt: Date;
  verifiedBy?: string;
  verifiedAt?: Date;
  votes: {
    support: number;
    priority: number;
  };
  comments: Comment[];
  prozorroLink?: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
  verified: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'ngo' | 'government' | 'admin';
  organization?: string;
  verified: boolean;
}

export interface ProjectStats {
  totalReports: number;
  verifiedReports: number;
  completedProjects: number;
  totalEstimatedCost: number;
  totalActualCost: number;
}