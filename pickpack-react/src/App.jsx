import React, { useState } from 'react';
import './styles/App.css';
import HeroSection from './components/HeroSection';
import OnboardingForm from './components/OnboardingForm';
import SuccessMessage from './components/SuccessMessage';

function App() {
  const [step, setStep] = useState('home'); // 'home', 'form', 'success'
  const [generatedToken, setGeneratedToken] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/success')) {
      setStep('success');
    } else if (path.includes('/form')) {
      setStep('form');
    }
  }, []);

  const handleConnect = () => {
    setStep('form');
    window.history.pushState({}, '', '/form');
  };

  const handleSubmitForm = (formData) => {
    // Генерация случайного токена
    const token = 'PICK-PACK-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    setGeneratedToken(token);
    setStep('success');
    window.history.pushState({}, '', '/success');
    
    // Здесь в реальном приложении был бы API запрос
    // console.log('Данные формы:', formData);
    // console.log('Сгенерированный токен:', token);
    
    // В реальном приложении здесь был бы вызов API для отправки токена
    // fetch('/api/register-company', { method: 'POST', body: JSON.stringify(formData) })
  };

  const handleBackToHome = () => {
    setStep('home');
    setGeneratedToken('');
    window.history.pushState({}, '', '/');
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Pick Pack</h1>
        <p>Складской помощник нового поколения</p>
      </header>

      <main className="main-content">
        {step === 'home' && (
          <HeroSection onConnect={handleConnect} />
        )}
        
        {step === 'form' && (
          <OnboardingForm onSubmit={handleSubmitForm} onBack={handleBackToHome} />
        )}
        
        {step === 'success' && (
          <SuccessMessage token={generatedToken} onBack={handleBackToHome} />
        )}
      </main>

      <footer className="footer">
        <p>© 2024 Pick Pack. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;