'use client';

import { useState, useEffect } from 'react';

const THAI_NAMES = [
  'Somchai', 'Somsak', 'Sompong', 'Prasit', 'Chaiwat', 'Anan', 'Kittisak', 'Nattapong',
  'Worapot', 'Surachai', 'Apichart', 'Pichit', 'Somkid', 'Thaksin', 'Banharn', 'Chavalit',
  'Suchinda', 'Prem', 'Krisada', 'Narong', 'Prayut', 'Prawit', 'Anupong', 'Suttirat',
  'Pimchanok', 'Siriporn', 'Nattaya', 'Waraporn', 'Kanokwan', 'Nattawee'
];

const THAI_CITIES = [
  'Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Khon Kaen', 'Hat Yai', 'Nakhon Ratchasima',
  'Udon Thani', 'Chon Buri', 'Songkhla', 'Chiang Rai', 'Krabi', 'Surat Thani',
  'Nakhon Si Thammarat', 'Lampang', 'Phitsanulok'
];

interface Notification {
  id: number;
  name: string;
  city: string;
  amount: number;
}

export default function CommissionNotification() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const name = THAI_NAMES[Math.floor(Math.random() * THAI_NAMES.length)];
      const city = THAI_CITIES[Math.floor(Math.random() * THAI_CITIES.length)];
      const amount = Math.floor(Math.random() * 500 + 100);

      setNotification({ id: Date.now(), name, city, amount });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setNotification(null), 500);
      }, 3000);
    };

    // Initial delay
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 5000);

    // Interval
    const interval = setInterval(showNotification, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div className={`commission-notification ${isVisible ? 'show' : ''}`}>
      <div className="notification-content">
        <div className="notification-avatar">
          <span className="avatar-text">{notification.name.charAt(0)}</span>
        </div>
        <div className="notification-info">
          <div className="notification-title">
            <span className="notification-name">{notification.name}</span>
            <span className="notification-city">📍 {notification.city}</span>
          </div>
          <div className="notification-amount">
            รับค่าคอมมิชชั่น: <span className="amount-value">฿{notification.amount}</span>
          </div>
        </div>
        <div className="notification-time">ตอนนี้</div>
      </div>
    </div>
  );
}
