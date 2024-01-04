// في App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>مرحبًا بك في موقعي</h1>
      </header>
      <nav>
        <ul>
          <li><a href="/">الرئيسية</a></li>
          <li><a href="/منتجات">المنتجات</a></li>
          <li><a href="/خدمات">الخدمات</a></li>
          <li><a href="/اتصل-بنا">اتصل بنا</a></li>
        </ul>
      </nav>
      <main>

        <section>  
          <h2>معلومات عنا</h2>
          <p>نحن نقدم أفضل المنتجات والخدمات لعملائنا</p>
        </section>
        <section>
          <h2>أحدث المنتجات</h2>
          <div className="product">
            <img src="product1.jpg" alt="منتج 1" />
            <h3>منتج 1</h3>
            <p>وصف المنتج 1</p>
          </div>
          <div className="product">
            <img src="product2.jpg" alt="منتج 2" />
            <h3>منتج 2</h3>
            <p>وصف المنتج 2</p>
          </div>
        </section>
        <section>
          <h2>الخدمات</h2>
          <ul className="services">
            <li>تصميم موقع ويب</li>
            <li>تطوير تطبيقات الجوال</li>
            <li>تحسين محركات البحث (SEO)</li>
            <li>تسويق عبر الإنترنت</li>
          </ul>
        </section>
        <section>
          <h2>اتصل بنا</h2>
          <form>
            <div>
              <label htmlFor="name">الاسم:</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">البريد الإلكتروني:</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">الرسالة:</label>
              <textarea id="message" rows="4"></textarea>
            </div>
            <button type="submit">إرسال</button>
          </form>
        </section>
      </main>
      <footer>
        <p>جميع الحقوق محفوظة &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;