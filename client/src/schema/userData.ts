export interface UserData {
  username: string;
  realName: string;
  totalSolved: number;
  totalSubmissions: TotalSubmission[];
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  contributionPoint: number;
  reputation: number;
  submissionCalendar: SubmissionCalendar;
  recentSubmissions: RecentSubmission[];
  matchedUserStats: MatchedUserStats;
  avatarUrl: string;
}

export interface TotalSubmission {
  difficulty: string;
  count: number;
  submissions: number;
}

export interface SubmissionCalendar {
  [key: string]: number;
}

export interface RecentSubmission {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
  __typename: string;
}

export interface MatchedUserStats {
  acSubmissionNum: AcSubmissionNum[];
  totalSubmissionNum: TotalSubmissionNum[];
}

export interface AcSubmissionNum {
  difficulty: string;
  count: number;
  submissions: number;
}

export interface TotalSubmissionNum {
  difficulty: string;
  count: number;
  submissions: number;
}
