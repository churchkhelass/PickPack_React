import React, { useState } from 'react';

const OnboardingForm = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    warehouseSize: '',
    employeeCount: '',
    industry: '',
    contactPerson: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={onBack}>← Назад</button>
      <h2>Заявка на подключение</h2>
      <p className="form-description">
        Заполните форму, и мы вышлем вам токен для доступа к приложению
      </p>
      
      <form onSubmit={handleSubmit} className="onboarding-form">
        <div className="form-group">
          <label htmlFor="companyName">Название компании *</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactPerson">Контактное лицо *</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email для связи *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="industry">Сфера деятельности</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="">Выберите отрасль</option>
            <option value="retail">Розничная торговля</option>
            <option value="wholesale">Оптовая торговля</option>
            <option value="manufacturing">Производство</option>
            <option value="logistics">Логистика</option>
            <option value="other">Другое</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="warehouseSize">Площадь склада (м²)</label>
          <input
            type="number"
            id="warehouseSize"
            name="warehouseSize"
            value={formData.warehouseSize}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeCount">Количество сотрудников на складе</label>
          <input
            type="number"
            id="employeeCount"
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            min="0"
          />
        </div>

        <button type="submit" className="submit-button">
          Отправить заявку и получить токен
        </button>
      </form>
    </div>
  );
};

export default OnboardingForm;