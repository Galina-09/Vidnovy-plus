import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { ReportPage } from './pages/ReportPage';
import { ProjectsPage } from './pages/ProjectsPage';

// Mock user data - in real app this would come from authentication
const mockUser = {
  name: 'Олена Шевченко',
  role: 'Громадський активіст'
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header user={mockUser} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vidnovy+</h3>
                <p className="text-gray-600 mb-4">
                  Прозора платформа для відновлення інфраструктури України. 
                  Разом ми будуємо краще майбутне.
                </p>
                <div className="text-sm text-gray-500">
                  © 2024 Vidnovy+. Всі права захищені.
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Платформа</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/about" className="hover:text-blue-600">Про проєкт</a></li>
                  <li><a href="/help" className="hover:text-blue-600">Допомога</a></li>
                  <li><a href="/api" className="hover:text-blue-600">API</a></li>
                  <li><a href="/partners" className="hover:text-blue-600">Партнери</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Підтримка</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/contact" className="hover:text-blue-600">Контакти</a></li>
                  <li><a href="/privacy" className="hover:text-blue-600">Конфіденційність</a></li>
                  <li><a href="/terms" className="hover:text-blue-600">Умови використання</a></li>
                  <li><a href="/feedback" className="hover:text-blue-600">Зворотний зв'язок</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;