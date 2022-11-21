import '../styles/style.scss'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { config } from '../lib/react-query-config';

export default function App({ Component, pageProps }: AppProps) {

    const [queryClient] = useState(() => new QueryClient(config))

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component  {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    )
}
