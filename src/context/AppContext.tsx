import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isNavOpen: boolean;
  toggleNav: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppContext.Provider value={{
      isDarkMode,
      toggleTheme,
      isNavOpen,
      toggleNav,
      activeSection,
      setActiveSection
    }}>
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