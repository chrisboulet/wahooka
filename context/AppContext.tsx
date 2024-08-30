'use client';

import React, { createContext, useState, useContext } from 'react';

interface AppContextType {
  topic: string;
  setTopic: (topic: string) => void;
  timeFrame: string;
  setTimeFrame: (timeFrame: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  analysisComplete: boolean;
  setAnalysisComplete: (complete: boolean) => void;
  analysisResult: string | null;
  setAnalysisResult: (result: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topic, setTopic] = useState('');
  const [timeFrame, setTimeFrame] = useState('last24h');
  const [activeTab, setActiveTab] = useState('topic');
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ 
      topic, 
      setTopic, 
      timeFrame, 
      setTimeFrame, 
      activeTab, 
      setActiveTab, 
      analysisComplete, 
      setAnalysisComplete, 
      analysisResult, 
      setAnalysisResult 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
