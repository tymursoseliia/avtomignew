import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://xn--80aedttl1a.com/team');
    const html = await res.text();
    
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    let match;
    const images: string[] = [];
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1]);
    }
    
    const bgRegex = /background-image:\s*url\(['"]?([^'"\)]+)['"]?\)/gi;
    const bgImages: string[] = [];
    while ((match = bgRegex.exec(html)) !== null) {
      bgImages.push(match[1]);
    }

    const lazyRegex = /data-src=["']([^"']+)["']/gi;
    const lazyImages: string[] = [];
    while ((match = lazyRegex.exec(html)) !== null) {
      lazyImages.push(match[1]);
    }

    return NextResponse.json({ images, bgImages, lazyImages });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
