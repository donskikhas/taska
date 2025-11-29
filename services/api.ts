import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import { Lead } from "../types";

// Configuration
const TELEGRAM_BOT_TOKEN = "8325087127:AAEqTwOnYLttRgLn1Po8jjox42dEH1RR_io";

// ВАЖНО: Сюда нужно вставить твой Chat ID. 
// Чтобы его узнать, напиши боту @userinfobot и скопируй "Id".
// Если это группа/канал, добавь бота администратором и вставь ID группы (начинается с -100...)
const TELEGRAM_CHAT_ID: string = "438762836"; 

export const submitLead = async (leadData: Lead): Promise<boolean> => {
  try {
    const promises = [];

    // 1. Save to Firebase (if configured)
    if (db) {
      promises.push(
        addDoc(collection(db, "leads"), {
          ...leadData,
          createdAt: new Date()
        }).catch(err => console.error("Firebase save error:", err))
      );
    }

    // 2. Send to Telegram
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID !== "YOUR_CHAT_ID_HERE") {
      const text = `
🚀 <b>Новая заявка на Taska.uz!</b>

👤 <b>Имя:</b> ${leadData.name}
📱 <b>Контакт:</b> ${leadData.contact}
💬 <b>Задача:</b> ${leadData.message || "Не указана"}
📍 <b>Источник:</b> ${leadData.source === 'modal_form' ? 'Модальное окно' : 'Форма на сайте'}
⏰ <b>Время:</b> ${leadData.date}
      `;

      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      promises.push(
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: 'HTML'
          })
        }).catch(err => console.error("Telegram send error:", err))
      );
    } else {
      console.log("Telegram simulation (Configure CHAT_ID in services/api.ts):", leadData);
    }

    await Promise.all(promises);
    return true;

  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};