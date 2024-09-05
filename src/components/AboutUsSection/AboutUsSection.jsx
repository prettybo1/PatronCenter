import React, { useState, useEffect } from 'react';
import './AboutUsSection.scss';

export default function AboutUsSection() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 150000;
        const duration = 3000; // Длительность анимации в мс

        const increment = end / duration * 100; // Рассчитываем, как быстро увеличивать значение

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id = "aboutUs" className='AboutUs'>
            <div className="AboutUs-content">
                <h2>Про нас</h2>
                <div className="images">
                <img className="image-1" src="/dogs_photo/bak.jpg" alt="dog_1" />
                    <img className="image-2" src="/dogs_photo/bob.jpg" alt="dog_2" />
                    <img className="image-3" src="/dogs_photo/gibson.jpg" alt="dog 3" />
                </div>
                <div className="text">
                    <p>
                        Patron Pet Center - це всеукраїнський центр допомоги безпритульним тваринам, який включає всі види допомоги: тимчасовий притулок, ветеринарну допомогу, консультування, прийомні сім'ї, навчальні заняття з сертифікованими кінологами та багато іншого.
                    </p>
                    <div className="counter">
                        <h3>{count.toLocaleString()}+</h3>
                        <p>Кількість постраждалих тварин від війни</p>
                    </div>
                    <p>
                    Тому ми розвиваємо місце, де тварини можуть отримати тимчасовий дім для проживання, лікування, догляду та дресирування. До моменту прилаштування в усвідомлену, люблячу сім'ю.
                    </p>
                </div>
            </div>
        </section>
    );
}
