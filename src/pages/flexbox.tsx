import { dehydrate, QueryClient } from '@tanstack/react-query';
import { queryKeys } from 'lib/api/query-keys';
import { getProducts, getQuotes } from '../lib/api';
import { config } from '../lib/react-query-config';
import { Flexbox } from '@/pages/Flexbox';

export default function FlexboxPage() {
  return <Flexbox />;
}

export async function getStaticProps() {
  const queryClient = new QueryClient(config);

  await queryClient.fetchQuery([queryKeys.prod], () => getProducts());
  await queryClient.fetchQuery([queryKeys.quote], () => getQuotes());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
