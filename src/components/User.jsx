import { useGithub } from "../hooks/useGithub";

export const User = () => {
  const { user } = useGithub();

  return (
    <a
      href="https://github.com/CMOISDEAD"
      className="flex justify-start content-start items-center gap-4 group px-3 py-1 border border-transparent rounded-xl hover:border-neutral-500 hover:bg-white/5 hover:cursor-pointer"
      target="_blank"
    >
      <img
        src={user?.avatar_url}
        alt={`${user?.login} user image`}
        className="rounded-full"
        width={32}
        height={32}
      />
      <div className="information text-start">
        <div className="text-white group-hover:underline">Camilo Davila</div>
        <div className="text-sm text-neutral-500">Fullstack Developer</div>
      </div>
    </a>
  );
};
