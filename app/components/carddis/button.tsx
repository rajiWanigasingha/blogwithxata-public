import { redirectToArtical } from "./action";

export default function Buttoncard({ val }: any) {
  const rediractToActionsPass = redirectToArtical.bind(null,val)
  return (
    <>
      <form action={rediractToActionsPass} className="w-full flex justify-end">
        <button
          className="bg-purple-600 p-2 w-3/5 self-end rounded-lg shadow-sm hover:bg-purple-800 text-sm md:text-base lg:text-lg"
          type="submit"
        >
          Show more details
        </button>
      </form>
    </>
  );
}
