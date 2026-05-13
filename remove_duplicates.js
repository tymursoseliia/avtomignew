const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gbauhumwyiqaoygndqoc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiYXVodW13eWlxYW95Z25kcW9jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTczMjc2MSwiZXhwIjoyMDkxMzA4NzYxfQ.gXorQz-d0XAqLInIvx9LVgCzDJVgmhISJtGt1rwW3UA'
);

async function removeDuplicates() {
  const { data, error } = await supabase
    .from('photo_reviews')
    .select('id, car_image_url')
    .order('created_at', { ascending: true });
    
  if (error) {
    console.error("Error fetching:", error);
    return;
  }

  const seen = new Set();
  const toDelete = [];

  for (const review of data) {
    if (seen.has(review.car_image_url)) {
      toDelete.push(review.id);
    } else {
      seen.add(review.car_image_url);
    }
  }

  console.log(`Total records: ${data.length}`);
  console.log(`Found ${toDelete.length} duplicates.`);

  if (toDelete.length > 0) {
    const { error: deleteError } = await supabase
      .from('photo_reviews')
      .delete()
      .in('id', toDelete);
      
    if (deleteError) {
      console.error("Error deleting:", deleteError);
    } else {
      console.log(`Successfully deleted ${toDelete.length} duplicates.`);
    }
  }
}

removeDuplicates();
