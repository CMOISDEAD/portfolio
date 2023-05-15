// NOTE: this component is currently in no use
import { Links } from "./Links";
import { routes } from "../utils/data";

export const Navbar = () => {
  return (
    <div class="w-full flex justify-between items-center text-white z-40 py-3 px-10">
      <div class="flex flex-grow basis-0">
        <a href="#">Camilo Davila</a>
      </div>

      <nav>
        <ul class="inline-flex">
          <Links routes={routes} className="px-4" classActive="text-pink" />
        </ul>
      </nav>

      <nav class="flex flex-grow basis-0 justify-end">
        <ul class="inline-flex [&>li>*]:px-4 [&>li>*]:transition-colors [&>li>*]:duration-300">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
