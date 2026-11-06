import React from 'react';
import {
  Home,
  Map,
  GitCompareArrows,
  Bookmark,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { View } from '../../types';

interface NavItem {
  view: View;
  icon: React.ReactNode;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { view: 'home', icon: <Home size={20} />, label: '首页' },
  { view: 'pathways', icon: <Sparkles size={20} />, label: '职业路径' },
  { view: 'map', icon: <Map size={20} />, label: '全景地图' },
  { view: 'compare', icon: <GitCompareArrows size={20} />, label: '对比工具' },
  { view: 'saved', icon: <Bookmark size={20} />, label: '收藏夹' }
];

export const Navigation: React.FC = () => {
  const { currentView, setCurrentView, menuOpen, setMenuOpen } = useApp();

  const handleNavClick = (view: View) => {
    setCurrentView(view);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-y-0 left-0 w-64 border-r border-gray-200 bg-white pt-16 lg:sticky lg:top-0 lg:h-screen lg:pt-0 transition-transform lg:translate-x-0 ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:block z-30`}
    >
      <div className="space-y-1 p-4">
        {NAV_ITEMS.map(({ view, icon, label }) => (
          <button
            key={view}
            onClick={() => handleNavClick(view)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition ${
              currentView === view
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
