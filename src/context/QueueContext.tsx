import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Queue, UserToken } from '../types';
import { mockQueues } from '../data/mockData';

interface QueueContextType {
  queues: Queue[];
  myTokens: UserToken[];
  joinQueue: (queueId: string) => UserToken | null;
  leaveQueue: (tokenId: string) => void;
  nextToken: (queueId: string) => void;
  skipToken: (queueId: string) => void;
  addCounter: (queueId: string) => void;
  updateQueueTokens: () => void;
}

const QueueContext = createContext<QueueContextType | null>(null);

export const useQueue = () => {
  const ctx = useContext(QueueContext);
  if (!ctx) throw new Error('useQueue must be used within QueueProvider');
  return ctx;
};

export const QueueProvider = ({ children }: { children: ReactNode }) => {
  const [queues, setQueues] = useState<Queue[]>(mockQueues);
  const [myTokens, setMyTokens] = useState<UserToken[]>(() => {
    // initial demo tokens
    const now = new Date();
    return [
      {
        id: 't_demo_1',
        queueId: 'q1',
        queueName: 'Admissions Office',
        location: 'College Admin Block - Ground Floor',
        category: 'College',
        tokenNumber: 31,
        currentToken: 24,
        peopleAhead: 7,
        estimatedWait: 28,
        joinedAt: new Date(now.getTime() - 1000 * 60 * 12).toISOString(),
        status: 'waiting',
        counterNo: 2,
      },
    ];
  });

  // Simulate live queue movement every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQueues(prev =>
        prev.map(q => {
          if (!q.isOpen || Math.random() > 0.5) return q;
          if (q.currentToken < q.totalTokens) {
            return { ...q, currentToken: q.currentToken + 1 };
          }
          return q;
        })
      );

      setMyTokens(prev =>
        prev.map(t => {
          const q = queues.find(qq => qq.id === t.queueId);
          if (!q) return t;
          // sync current token
          const newCurrent = q.currentToken + (Math.random() > 0.6 ? 1 : 0);
          const peopleAhead = Math.max(0, t.tokenNumber - newCurrent);
          const estimatedWait = peopleAhead * q.avgWaitMinutes;
          let status: UserToken['status'] = t.status;
          if (newCurrent >= t.tokenNumber && t.status === 'waiting') status = 'serving';
          if (newCurrent > t.tokenNumber + 1) status = 'completed';
          return {
            ...t,
            currentToken: Math.min(newCurrent, t.tokenNumber + 2),
            peopleAhead,
            estimatedWait,
            status,
          };
        })
      );
    }, 8000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queues]);

  const joinQueue = (queueId: string): UserToken | null => {
    const queue = queues.find(q => q.id === queueId);
    if (!queue || !queue.isOpen) return null;

    // already in queue?
    if (myTokens.some(t => t.queueId === queueId && t.status !== 'completed' && t.status !== 'skipped')) {
      return null;
    }

    const newTokenNumber = queue.totalTokens + 1;
    const peopleAhead = newTokenNumber - queue.currentToken - 1;
    const estimatedWait = Math.max(0, peopleAhead * queue.avgWaitMinutes);

    const newToken: UserToken = {
      id: `t_${Date.now()}`,
      queueId,
      queueName: queue.name,
      location: queue.location,
      category: queue.category,
      tokenNumber: newTokenNumber,
      currentToken: queue.currentToken,
      peopleAhead: Math.max(0, peopleAhead),
      estimatedWait,
      joinedAt: new Date().toISOString(),
      status: 'waiting',
      counterNo: Math.floor(Math.random() * queue.counters) + 1,
    };

    setQueues(prev => prev.map(q => q.id === queueId ? { ...q, totalTokens: newTokenNumber } : q));
    setMyTokens(prev => [...prev, newToken]);
    return newToken;
  };

  const leaveQueue = (tokenId: string) => {
    setMyTokens(prev => prev.filter(t => t.id !== tokenId));
  };

  const nextToken = (queueId: string) => {
    setQueues(prev => prev.map(q => {
      if (q.id === queueId && q.currentToken < q.totalTokens) {
        return { ...q, currentToken: q.currentToken + 1 };
      }
      return q;
    }));
    setMyTokens(prev => prev.map(t => {
      if (t.queueId !== queueId) return t;
      const q = queues.find(qq => qq.id === queueId);
      if (!q) return t;
      const newCurrent = Math.min(q.currentToken + 1, q.totalTokens);
      const peopleAhead = Math.max(0, t.tokenNumber - newCurrent);
      return {
        ...t,
        currentToken: newCurrent,
        peopleAhead,
        estimatedWait: peopleAhead * q.avgWaitMinutes,
        status: newCurrent >= t.tokenNumber ? (newCurrent === t.tokenNumber ? 'serving' : 'completed') : t.status,
      };
    }));
  };

  const skipToken = (queueId: string) => {
    setQueues(prev => prev.map(q => {
      if (q.id === queueId && q.currentToken < q.totalTokens) {
        return { ...q, currentToken: q.currentToken + 1, totalTokens: q.totalTokens + 1 };
      }
      return q;
    }));
    setMyTokens(prev => prev.map(t => {
       if (t.queueId === queueId && t.tokenNumber === t.currentToken + 1) {
          return { ...t, status: 'skipped' as const };
       }
       return t;
    }));
  };

  const addCounter = (queueId: string) => {
    setQueues(prev => prev.map(q => q.id === queueId ? { ...q, counters: Math.min(8, q.counters + 1), avgWaitMinutes: Math.max(2, q.avgWaitMinutes - 0.5) } : q));
  };

  const updateQueueTokens = () => {};

  return (
    <QueueContext.Provider value={{ queues, myTokens, joinQueue, leaveQueue, nextToken, skipToken, addCounter, updateQueueTokens }}>
      {children}
    </QueueContext.Provider>
  );
};
