import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileNavigation } from './components/MobileNavigation';
import { ShortcutModal } from './components/ShortcutModal';
import { CommandPalette } from './components/CommandPalette';
import { ToastContainer } from './components/ToastContainer';
import { ErrorBoundary } from './components/ErrorBoundary';

// Views
import { HomeView } from './views/HomeView';
import { ShortcutsView } from './views/ShortcutsView';
import { PracticeView } from './views/PracticeView';
import { QuizView } from './views/QuizView';
import { GamesView } from './views/GamesView';
import { FavoritesView } from './views/FavoritesView';
import { ProgressView } from './views/ProgressView';
import { SettingsView } from './views/SettingsView';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'shortcuts':
        return <ShortcutsView />;
      case 'practice':
        return <PracticeView />;
      case 'quiz':
        return <QuizView />;
      case 'games':
        return <GamesView />;
      case 'favorites':
        return <FavoritesView />;
      case 'progress':
        return <ProgressView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white transition-colors">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {renderView()}
      </main>

      <Footer />
      <MobileNavigation />
      <ShortcutModal />
      <CommandPalette />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <MainContent />
      </AppProvider>
    </ErrorBoundary>
  );
}
