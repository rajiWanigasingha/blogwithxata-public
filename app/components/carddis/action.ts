import { redirect } from "next/navigation";
import { getXataClient } from "@/app/lib/xata/xata";
import { unstable_cache } from "next/cache";

const xata = getXataClient()

export async function redirectToArtical(id: string) {
  "use server";
  redirect(`/artical/${id}`);
}


export const getItmes = unstable_cache(
  async () => {
    return await xata.db.blog.select(["id", "title", "summery"]).getPaginated({
      pagination: { size: 100 },
    });
  },
  ["blog"],
  { tags: ["blog"], revalidate: 100 }
);
