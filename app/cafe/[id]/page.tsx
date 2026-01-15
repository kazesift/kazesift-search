import React from 'react';
import { cafes } from '@/lib/data';
import { LanguageProvider } from '@/lib/language';
import { Metadata } from 'next';
import { CafeDetailClient } from './CafeDetailClient';

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const cafe = cafes.find((c) => c.id === id);
    if (!cafe) return { title: 'Cafe Not Found' };

    return {
        title: `${cafe.name.ja} | Kazesift Search`,
        description: cafe.description.ja || '札幌のカフェ検索',
        openGraph: {
            images: [cafe.imageUrl],
        },
    };
}

// Generate Static Params for SSG
export async function generateStaticParams() {
    return cafes.map((cafe) => ({
        id: cafe.id,
    }));
}

export default async function CafePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <LanguageProvider>
            <CafeDetailClient id={id} />
        </LanguageProvider>
    );
}
