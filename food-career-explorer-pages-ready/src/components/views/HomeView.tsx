import React from 'react';
import { ArrowRight, BookmarkCheck, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HomeView: React.FC = () => {
  const { setCurrentView, savedJobs } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            食品专业职业探险
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            为食品专业学生整理的完整职业发展路线图
          </p>
          <button
            onClick={() => setCurrentView('pathways')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            开始探索 <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card
            icon={<Sparkles className="text-purple-500" size={32} />}
            title="职业路径"
            description="从实习到高管的完整职业发展路线"
            onClick={() => setCurrentView('pathways')}
          />
          <Card
            icon={<BookmarkCheck className="text-blue-500" size={32} />}
            title="职位对比"
            description="按行业、薪资、发展空间等多维度对比"
            onClick={() => setCurrentView('compare')}
          />
          <Card
            icon={<ArrowRight className="text-green-500" size={32} />}
            title="全景地图"
            description="食品行业的完整生态和机会分布"
            onClick={() => setCurrentView('map')}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center bg-white rounded-lg p-8 shadow-sm">
          <div>
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600 mt-2">职位数据</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">
              {savedJobs.length}
            </div>
            <div className="text-gray-600 mt-2">已收藏职位</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">5+</div>
            <div className="text-gray-600 mt-2">职业方向</div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ icon, title, description, onClick }) => (
  <button
    onClick={onClick}
    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left cursor-pointer"
  >
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </button>
);
