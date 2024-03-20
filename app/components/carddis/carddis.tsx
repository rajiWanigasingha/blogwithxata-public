import Buttoncard from "./button";
import { getItmes } from "./action";

export default async function Carddiscription() {

  const itmes = await getItmes()

  return (
    <>
      {itmes.records.map((val: any, index: number) => (
        <div key={index} className="flex flex-col gap-3 w-full md:w-4/5 lg:w-4/5 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-lg lg:text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {val.title}
          </h5>
          <p className="font-normal text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-400">
            {val.summery}
          </p>
          <Buttoncard val={val.id}/>
        </div>
      ))}
    </>
  );
}
