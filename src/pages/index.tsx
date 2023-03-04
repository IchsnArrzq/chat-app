import { Button, Card, Text } from "@/components/core";
import AppLayout from "@/components/shared/app";
import { Hero } from "@/components/shared/hero";
import type { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero
        title="Chatting Aps"
        description="Build control planes without needing to write code. Crossplane has a
          highly extensible backend that enables you to orchestrate applications
          and infrastructure no matter where they run, and a highly configurable
          frontend that lets you define the declarative API it offers."
        action={
          <Link href={"/chat"}>
            <Button modifier="btn-accent">Getting Start</Button>
          </Link>
        }
      />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Home;
