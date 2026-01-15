
import { sendGAEvent } from '@next/third-parties/google';

type EventName =
    | 'view_cafe'
    | 'click_filter'
    | 'switch_view_mode'
    | 'click_favorite'
    | 'post_comment'
    | 'search_analytics';

interface AnalyticsEvent {
    action: EventName;
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
}

export const trackEvent = ({ action, category, label, value, ...rest }: AnalyticsEvent) => {
    if (typeof window !== 'undefined') {
        // Log to console for development verification
        if (process.env.NODE_ENV === 'development') {
            console.log(`[Analytics] ${action}:`, { category, label, value, ...rest });
        }

        sendGAEvent('event', action, {
            category,
            label,
            value,
            ...rest,
        });
    }
};
