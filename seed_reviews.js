const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gbauhumwyiqaoygndqoc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiYXVodW13eWlxYW95Z25kcW9jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTczMjc2MSwiZXhwIjoyMDkxMzA4NzYxfQ.gXorQz-d0XAqLInIvx9LVgCzDJVgmhISJtGt1rwW3UA'
);

const images = [
  "https://i.ibb.co/h1wMxhr0/photo-2026-02-12-13-08-08.jpg",
  "https://i.ibb.co/213tpzZq/photo-2026-02-12-13-08-12.jpg",
  "https://i.ibb.co/4BKx44M/photo-2026-02-03-13-15-49.jpg",
  "https://i.ibb.co/DDf4dP2V/photo-2026-02-12-13-10-04.jpg",
  "https://i.ibb.co/yB7vDp2c/photo-2026-01-14-12-40-23.jpg",
  "https://i.ibb.co/qMSXBdFL/photo-2026-01-14-12-40-43.jpg",
  "https://i.ibb.co/4GYrgJb/photo-2026-01-14-12-40-55.jpg",
  "https://i.ibb.co/j9jbH9vJ/photo-2026-01-19-12-55-04.jpg",
  "https://i.ibb.co/SDSkFmCB/photo-2026-01-19-13-00-11.jpg",
  "https://i.ibb.co/dJfRt4YZ/photo-2026-01-26-17-10-30.jpg",
  "https://i.ibb.co/GLyBZ69/photo-2026-01-26-17-33-52.jpg",
  "https://i.ibb.co/sJssx8HP/photo-2026-01-27-15-36-53.jpg",
  "https://i.ibb.co/HLsdvDM2/photo-2026-01-30-13-27-51.jpg",
  "https://i.ibb.co/TxzYwpTG/photo-2026-01-30-13-27-52.jpg",
  "https://i.ibb.co/JWkRjMk2/photo-2026-02-05-13-08-15-2.jpg",
  "https://i.ibb.co/Q3qS7MMH/photo-2026-02-05-13-08-15.jpg"
];

const mockTitles = [
  "Доставка BMW", "Счастливый клиент с Audi", "Выдача Mercedes", 
  "Отзыв от Александра", "Пригнали Porsche", "Клиент из Москвы", 
  "Выдача Volkswagen", "Доставка Volvo"
];

async function seed() {
  const records = images.map((img, i) => ({
    car_image_url: img,
    name: mockTitles[i % mockTitles.length],
    text: "Успешная доставка из Европы под ключ",
    platform: '2gis',
    rating: 5
  }));

  const { data, error } = await supabase.from('photo_reviews').insert(records);
  if (error) {
    console.error("Error inserting:", error);
  } else {
    console.log("Successfully inserted", images.length, "reviews into photo_reviews table.");
  }
}
seed();
