import React from 'react';
import { useApp } from './context/AppContext';
import { Header, Navigation } from './components/common';
import { HomeView, PathwaysView, MapView, CompareView, SavedView } from './components/views';

const App: React.FC = () => {
  const { currentView, menuOpen } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'pathways':
        return <PathwaysView />;
      case 'map':
        return <MapView />;
      case 'compare':
        return <CompareView />;
      case 'saved':
        return <SavedView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white lg:flex-row">
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => {}}
        />
      )}

      <Header />
      <Navigation />

      <main className="flex-1 overflow-y-auto pt-16 lg:pt-0">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
