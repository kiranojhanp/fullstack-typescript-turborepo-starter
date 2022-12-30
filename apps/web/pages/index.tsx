import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { Button } from "ui";
import { getPosts } from "queries";

import styles from "../styles/index.module.css";

export default function Web() {
  const { data } = useQuery({ queryKey: ['posts'], queryFn: getPosts })
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      {data.map((datum, index) => {
        return (
          <div key={index}>
            <h5>{datum.title}</h5>
            <p>{datum.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts'], getPosts)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
