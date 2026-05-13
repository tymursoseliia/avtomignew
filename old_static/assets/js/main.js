document.addEventListener("DOMContentLoaded", () => {
    // 1. Сохранение UTM-меток из URL в localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const utmTags = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    let utmData = JSON.parse(localStorage.getItem('utm_data')) || {};

    let utmUpdated = false;
    utmTags.forEach(tag => {
        if (urlParams.has(tag)) {
            utmData[tag] = urlParams.get(tag);
            utmUpdated = true;
        }
    });

    if (utmUpdated) {
        localStorage.setItem('utm_data', JSON.stringify(utmData));
    }

    // 2. Обработка всех форм на сайте
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Добавляем UTM-метки к данным формы
            const storedUtm = JSON.parse(localStorage.getItem('utm_data')) || {};
            const finalData = { ...data, ...storedUtm, page: window.location.pathname };
            
            console.log("Данные для отправки:", finalData);
            
            // Триггер цели Метрики: lead_form_submit
            if (typeof ym !== "undefined") {
                ym(window.YM_COUNTER_ID, 'reachGoal', 'lead_form_submit');
            }

            // Отправка в Telegram
            const BOT_TOKEN = "8481246622:AAEbKzrNsVGKck4nr-CHjPoLaZvxX9yQHOw";
            const CHAT_ID = "8725020546";

            const formType = finalData.type || 'Новая заявка с сайта';
            let message = `🚀 <b>${formType}!</b>\n\n`;
            
            if (finalData.name) message += `👤 <b>Имя:</b> ${finalData.name}\n`;
            if (finalData.phone) message += `📞 <b>Телефон:</b> ${finalData.phone}\n`;
            if (finalData.budget) message += `💰 <b>Бюджет:</b> ${finalData.budget}\n`;
            if (finalData.user_message) message += `💬 <b>Сообщение:</b> ${finalData.user_message}\n`;

            if (Object.keys(storedUtm).length > 0) {
                message += `\n📊 <b>UTM Метки:</b>\n`;
                for (const [key, value] of Object.entries(storedUtm)) {
                    message += `${key}: ${value}\n`;
                }
            }

            const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
            
            // Если токен еще не прописан, просто делаем редирект как раньше (для тестов)
            if (BOT_TOKEN === "ТВОЙ_ТОКЕН_БОТА") {
                console.warn("Пожалуйста, укажи BOT_TOKEN и CHAT_ID в файле main.js для работы отправки.");
                setTimeout(() => { window.location.href = "thank-you.html"; }, 500);
                return;
            }

            // Отправка запроса в Telegram
            fetch(telegramUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    window.location.href = "thank-you.html"; // Успех -> страница Спасибо
                } else {
                    alert("Ошибка отправки. Пожалуйста, напишите нам напрямую в мессенджер.");
                    console.error("Telegram API Error:", data);
                }
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                alert("Ошибка сети. Пожалуйста, проверьте интернет.");
            });
        });
    });

    // 3. Цели Метрики для кликов по мессенджерам и кнопкам
    const trackClick = (selector, goalName) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.addEventListener("click", () => {
                if (typeof ym !== "undefined") {
                    ym(window.YM_COUNTER_ID, 'reachGoal', goalName);
                }
            });
        });
    };

    trackClick('a[href*="wa.me"]', 'click_whatsapp');
    trackClick('a[href*="t.me"]', 'click_telegram');
    trackClick('a[href^="tel:"]', 'click_phone');
    trackClick('.btn-secondary', 'click_callback'); // Клик по кнопке "Консультация эксперта"

    // 4. Логика для плавающего виджета мессенджеров (мобильные устройства)
    const fabContainer = document.querySelector('.fab-container');
    const fabMain = document.querySelector('.fab-main');
    if (fabContainer && fabMain) {
        fabMain.addEventListener('click', (e) => {
            e.stopPropagation();
            fabContainer.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!fabContainer.contains(e.target)) {
                fabContainer.classList.remove('active');
            }
        });
    }

    // 5. Логика модальных окон
    window.openModal = function(id) {
        document.getElementById(id).classList.add('active');
        if (fabContainer) fabContainer.classList.remove('active'); // Закрываем FAB меню если открыто
    };
    
    const modals = document.querySelectorAll('.modal-overlay');
    const closeBtns = document.querySelectorAll('.modal-close');
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal-overlay').classList.remove('active');
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});
