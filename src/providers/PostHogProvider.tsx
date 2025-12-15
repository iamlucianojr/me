
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { ReactNode, useEffect } from 'react'

export function PostHogProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const apiKey = import.meta.env.VITE_POSTHOG_KEY
        const apiHost = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com'

        if (apiKey) {
            posthog.init(apiKey, {
                api_host: apiHost,
                person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
            })
        }
    }, [])

    return <PHProvider client={posthog}>{children}</PHProvider>
}
