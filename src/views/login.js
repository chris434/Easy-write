import { Warper } from "../components/ warper.js";
import { Button } from "../components/button.js";
export function Login() {
  const BACKGROUND_IMAGE =
    "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKxxav5eOZJIhSkswrLbUOmAxZVuOgU3ga3Y4J_24akbB2rnTxlW2BmS2AVdOMiWELeA&usqp=CAU')]";
  return (
    <section className={BACKGROUND_IMAGE}>
      <div className="absolute text-center left-0 right-0 p-10 text-[25px]">
        <h1 className="">welcome to easy Write</h1>
      </div>

      <Warper position="centerScreen">
        <Warper
          position="centerColumn"
          styles="sm:w-4/12 sm:shadow-xl p-10 bg-white m-all">
          <h2 className="text-2xl">login</h2>
          <Button bgColor="red-500">google</Button>
          <div>or</div>
          <Button bgColor="sky-500">facebook</Button>
        </Warper>
      </Warper>
    </section>
  );
}
