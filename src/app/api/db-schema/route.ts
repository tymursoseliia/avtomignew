import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const url = 'https://gbauhumwyiqaoygndqoc.supabase.co/rest/v1/';
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  
  const headers = {
    'apikey': serviceKey,
    'Authorization': `Bearer ${serviceKey}`
  };
  
  const tablesToTry = ['cars', 'vehicles', 'catalog', 'auto', 'products', 'items', 'Team', 'team'];
  const results: Record<string, any> = {};
  
  for (const table of tablesToTry) {
    try {
      const res = await fetch(`${url}${table}?select=*&limit=1`, { headers });
      if (res.ok) {
        results[table] = await res.json();
      } else {
        results[table] = `Error: ${res.statusText} (${res.status})`;
      }
    } catch (e) {
      results[table] = 'Fetch Error';
    }
  }
  
  return NextResponse.json(results);
}
