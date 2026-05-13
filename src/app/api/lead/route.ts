import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, source, details } = body;

    if (!phone) {
      return NextResponse.json({ error: 'Телефон обязателен' }, { status: 400 });
    }

    // 1. Сохраняем в Supabase таблицу leads (нужно будет создать таблицу)
    // Если таблицы еще нет, это выдаст ошибку, но мы можем обработать её или просто залогировать
    const { error: dbError } = await supabase
      .from('leads')
      .insert([
        {
          name: name || 'Без имени',
          phone: phone,
          source: source || 'Сайт',
          details: details || {}
        }
      ]);

    if (dbError) {
        console.warn("Не удалось сохранить в Supabase (возможно нет таблицы leads):", dbError.message);
    }

    // 2. Отправка в Telegram
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    // Формируем красивое сообщение
    let text = `🔥 <b>Новая заявка с сайта!</b>\n\n`;
    text += `📱 Телефон: ${phone}\n`;
    if (name) text += `👤 Имя: ${name}\n`;
    text += `📌 Источник: ${source}\n`;
    
    if (details) {
        text += `\n<b>Детали:</b>\n`;
        Object.keys(details).forEach(key => {
            text += `- ${key}: ${details[key]}\n`;
        });
    }

    if (telegramToken && chatId) {
      try {
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'HTML',
          }),
        });
      } catch (err) {
        console.error("Failed to send telegram message:", err);
      }
    }

    console.log("LEAD CAPTURED:", text);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error in lead api:', error);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
