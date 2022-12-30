import { getUsers } from "queries";
import { Button } from "ui";

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import styles from "../styles/index.module.css";

export default function Web() {
  const { data } = useQuery({ queryKey: ["users"], queryFn: getUsers });
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      {data.map((datum, index) => {
        return (
          <div key={index}>
            <h5>
              {datum.firstName} {datum.lastName}
            </h5>
            <p>Sex: {datum.sex}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["users"], getUsers);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
