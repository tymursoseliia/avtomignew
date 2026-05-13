import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    if (!file || !title) {
      return NextResponse.json({ error: 'Фотография и заголовок обязательны' }, { status: 400 });
    }

    // 1. Загрузка фото в Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    
    // Преобразуем File в ArrayBuffer для загрузки в Supabase
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data: uploadData, error: uploadError } = await supabase
      .storage
      .from('reviews')
      .upload(fileName, buffer, {
        contentType: file.type,
      });

    if (uploadError) {
        console.error("Storage upload error:", uploadError);
        throw new Error("Ошибка загрузки файла в хранилище (убедитесь, что бакет 'reviews' существует и публичный)");
    }

    // 2. Получение публичной ссылки
    const { data: publicUrlData } = supabase
      .storage
      .from('reviews')
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    // 3. Сохранение в базу данных
    const { data: dbData, error: dbError } = await supabase
      .from('photo_reviews')
      .insert([
        {
          car_image_url: imageUrl,
          name: title,
          text: description || null,
          platform: '2gis',
          rating: 5
        }
      ]);

    if (dbError) {
        console.error("DB insert error:", dbError);
        throw new Error("Ошибка при сохранении в базу данных (убедитесь, что таблица photo_reviews существует)");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error in admin/reviews:', error);
    return NextResponse.json({ error: error.message || 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}
