import React, { useState } from 'react';
import './Auth.css';

interface AuthProps {
  onClose: () => void;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  acceptTerms: boolean;
}

const Auth: React.FC<AuthProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  
  // Login state
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register state
  const [registerData, setRegisterData] = useState<RegisterData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    acceptTerms: false
  });

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (isLogin) {
      // Login işlemi
      if (loginUsername === 'admin' && loginPassword === 'admin') {
        localStorage.setItem('user', loginUsername);
        onClose();
        window.location.reload();
      } else {
        setError('Kullanıcı adı veya şifre hatalı!');
      }
    } else {
      // Register işlemi
      if (!registerData.acceptTerms) {
        setError('Gizlilik sözleşmesini kabul etmelisiniz!');
        return;
      }
      
      // Basit validasyon
      if (!registerData.email.includes('@')) {
        setError('Geçerli bir email adresi giriniz!');
        return;
      }
      
      if (registerData.phone.length < 10) {
        setError('Geçerli bir telefon numarası giriniz!');
        return;
      }

      localStorage.setItem('user', registerData.username);
      onClose();
      window.location.reload();
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            // Login Form
            <>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Kullanıcı Adı"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Şifre"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
            </>
          ) : (
            // Register Form
            <>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Ad"
                    value={registerData.firstName}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Soyad"
                    value={registerData.lastName}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon Numarası"
                  value={registerData.phone}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="E-posta"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Kullanıcı Adı"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Şifre"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={registerData.acceptTerms}
                    onChange={handleRegisterChange}
                  />
                  <span>Gizlilik sözleşmesini okudum ve kabul ediyorum</span>
                </label>
              </div>
            </>
          )}
          
          <button type="submit" className="submit-btn">
            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </button>
        </form>
        
        <p className="switch-text">
          {isLogin ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'}
          <button 
            className="switch-btn"
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
          >
            {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth; 