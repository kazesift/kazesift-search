import Link from 'next/link';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    {/* Simple textual logo with Tech vibe */}
                    <span className="text-xl font-bold tracking-tight text-[var(--color-secondary)]">
                        kazesift<span className="text-[var(--color-primary)]">.search</span>
                    </span>
                </Link>

                <nav className="flex gap-6 text-sm font-medium text-gray-600">
                    <Link href="/about" className="hover:text-[var(--color-secondary)] transition-colors">
                        About
                    </Link>
                    <Link href="https://kazesift.net" target="_blank" className="hover:text-[var(--color-secondary)] transition-colors">
                        Official Site
                    </Link>
                </nav>
            </div>
        </header>
    );
}
