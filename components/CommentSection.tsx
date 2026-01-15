
"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language";
import { trackEvent } from "@/lib/analytics";

interface Comment {
    id: string;
    text: string;
    author: string;
    date: string;
}

export default function CommentSection({ cafeId }: { cafeId: string }) {
    const { t, language } = useLanguage();
    const [comments, setComments] = useState<Comment[]>([]);
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    const storageKey = `kazesift_comments_${cafeId}`;

    // Load comments on mount
    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            setComments(JSON.parse(saved));
        }
    }, [storageKey]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        const newComment: Comment = {
            id: Date.now().toString(),
            text: text,
            author: author.trim() || (language === "ja" ? "名無しさん" : "Anonymous"),
            date: new Date().toLocaleDateString(language === "ja" ? "ja-JP" : "en-US"),
        };

        const updated = [newComment, ...comments];
        setComments(updated);
        localStorage.setItem(storageKey, JSON.stringify(updated));
        setText("");

        trackEvent({
            action: 'post_comment',
            category: 'UserAction',
            label: cafeId
        });
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mt-8">
            <h3 className="mb-6 text-xl font-bold flex items-center">
                💬 {language === "ja" ? "みんなのコメント" : "Comments"} ({comments.length})
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mb-8 space-y-3">
                <input
                    type="text"
                    placeholder={language === "ja" ? "お名前 (省略可)" : "Name (Optional)"}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
                />
                <textarea
                    placeholder={language === "ja" ? "コメントを書く..." : "Write a comment..."}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-[var(--color-primary)] focus:outline-none"
                    rows={3}
                    required
                />
                <button
                    type="submit"
                    className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                    {language === "ja" ? "投稿する" : "Post Comment"}
                </button>
            </form>

            {/* List */}
            <div className="space-y-4">
                {comments.length === 0 ? (
                    <p className="text-center text-gray-400 py-4 text-sm">
                        {language === "ja" ? "まだコメントはありません。" : "No comments yet."}
                    </p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-gray-800 text-sm">{comment.author}</span>
                                <span className="text-xs text-gray-400">{comment.date}</span>
                            </div>
                            <p className="text-gray-700 text-sm whitespace-pre-wrap">{comment.text}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
