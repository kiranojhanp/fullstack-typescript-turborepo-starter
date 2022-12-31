import { getPosts } from "queries";
import { Button } from "ui";

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import styles from "../styles/index.module.css";

export default function Web() {
  const { data } = useQuery({ queryKey: ["users"], queryFn: getPosts });
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      {data?.map((datum, index) => {
        return (
          <div key={index}>
            <h5>
              {datum.title}
            </h5>
            <p>Sex: {datum.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["users"], getPosts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
