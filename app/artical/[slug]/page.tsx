import Backtoartical from "@/app/components/backbuttonartical/backbuttonartical";
import { getXataClient } from "@/app/lib/xata/xata";

export default async function Artical({
  params,
}: {
  params: { slug: string };
}) {
  const xata = getXataClient();

  const articalData = await xata.db.blog.read(`${params.slug}`);
  return (
    <>
      {
        <div className="flex flex-col mt-20 gap-3 w-full p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
              {articalData?.title}
            </h1>
            <p className="text-xs font-light">
              {articalData?.xata.createdAt.toDateString()}
            </p>
          </div>
          <p className="text-sm md:text-base lg:text-base">
            {articalData?.para}
          </p>
          <Backtoartical/>
        </div>
      }
    </>
  );
}
