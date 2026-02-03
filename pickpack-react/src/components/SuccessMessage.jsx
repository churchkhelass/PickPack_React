import React, { useState } from 'react';

const SuccessMessage = ({ token, onBack }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h2>Заявка успешно отправлена!</h2>
        <p className="success-message">
          Мы отправили токен доступа на указанный email. 
          Также вы можете скопировать его прямо сейчас:
        </p>
        
        <div className="token-container">
          <div className="token-display">{token}</div>
          <button 
            className={`copy-button ${copied ? 'copied' : ''}`}
            onClick={copyToClipboard}
          >
            {copied ? 'Скопировано!' : 'Копировать'}
          </button>
        </div>

        <div className="instructions">
          <h3>Как использовать токен:</h3>
          <ol>
            <li>Скачайте приложение Pick Pack из App Store или Google Play</li>
            <li>Запустите приложение и нажмите "Войти"</li>
            <li>Введите этот токен в поле для авторизации</li>
            <li>Начните использовать все возможности складского помощника!</li>
          </ol>
        </div>

        <button className="back-to-home" onClick={onBack}>
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;