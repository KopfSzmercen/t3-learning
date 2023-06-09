import { Center } from "@mantine/core";
import Head from "next/head";
import { type NextPageWithLayout } from "~/components/common/layouts/NextPageWithLayout";
import PublicLayout from "~/components/common/layouts/PublicLayout";
import FeaturesSection from "~/modules/home/FeaturesSection";
import Hero from "~/modules/home/Hero";
import RatingSection from "~/modules/home/RatingSection";
import { TableSection } from "~/modules/home/TableSection";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <main>
        <section>
          <Center>
            <Hero />
          </Center>
        </section>

        <section>
          <Center className="mx-auto mt-16 max-w-[1800px]">
            <FeaturesSection />
          </Center>
        </section>

        <section className="w-full">
          <TableSection />
        </section>

        <section>
          <Center className="mt-20 p-10">
            <RatingSection />
          </Center>
        </section>

        <section>
          <Center className="mx-auto my-10 max-w-[800px] py-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
            enim quod culpa quae, consectetur tempore totam animi cumque aperiam
            atque omnis? Totam reprehenderit deleniti nesciunt non possimus
            modi, sequi voluptatum quaerat voluptas eaque dolorum impedit ipsam
            placeat molestias vero explicabo alias itaque facere nihil
            consectetur quisquam maxime atque. Esse.
          </Center>
        </section>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PublicLayout>{page}</PublicLayout>;
};
