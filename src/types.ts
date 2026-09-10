export type QueueCategory = 'College' | 'Hospital' | 'Bank';

export interface Queue {
  id: string;
  name: string;
  location: string;
  category: QueueCategory;
  currentToken: number;
  totalTokens: number;
  avgWaitMinutes: number;
  counters: number;
  isOpen: boolean;
  icon: string;
  color: string;
}

export interface UserToken {
  id: string;
  queueId: string;
  queueName: string;
  location: string;
  category: QueueCategory;
  tokenNumber: number;
  currentToken: number;
  peopleAhead: number;
  estimatedWait: number; // minutes
  joinedAt: string;
  status: 'waiting' | 'serving' | 'completed' | 'skipped';
  counterNo?: number;
}

export interface AdminQueue extends Queue {
  waitingList: number[];
  history: number[];
}
