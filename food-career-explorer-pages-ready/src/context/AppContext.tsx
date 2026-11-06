import React, { createContext, useContext, useState, ReactNode } from 'react';
import { View, FilterState } from '../types';

interface AppContextType {
  currentView: View;
  setCurrentView: (view: View) => void;
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  savedJobs: string[];
  toggleSavedJob: (jobId: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedCategories: [],
    selectedMetrics: []
  });
  const [savedJobs, setSavedJobs] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('savedJobs') || '[]');
    } catch {
      return [];
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSavedJob = (jobId: string) => {
    setSavedJobs(prev => {
      const updated = prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId];
      localStorage.setItem('savedJobs', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        filters,
        setFilters,
        savedJobs,
        toggleSavedJob,
        menuOpen,
        setMenuOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
