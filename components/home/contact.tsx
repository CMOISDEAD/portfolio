import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section>
      <h2 className="mb-4 font-serif text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 sm:mb-6">
        Contact
      </h2>

      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-xs text-stone-500 dark:text-stone-400"
            >
              Name
            </label>
            <input
              id="name"
              className="w-full rounded-none border-0 border-b border-stone-200 dark:border-stone-700 bg-transparent p-2 text-sm text-stone-800 dark:text-stone-200 focus:border-stone-400 dark:focus:border-stone-500 focus:outline-none focus:ring-0"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs text-stone-500 dark:text-stone-400"
            >
              Email
            </label>
            <input
              id="email"
              className="w-full rounded-none border-0 border-b border-stone-200 dark:border-stone-700 bg-transparent p-2 text-sm text-stone-800 dark:text-stone-200 focus:border-stone-400 dark:focus:border-stone-500 focus:outline-none focus:ring-0"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-xs text-stone-500 dark:text-stone-400"
          >
            Subject
          </label>
          <input
            id="subject"
            className="w-full rounded-none border-0 border-b border-stone-200 dark:border-stone-700 bg-transparent p-2 text-sm text-stone-800 dark:text-stone-200 focus:border-stone-400 dark:focus:border-stone-500 focus:outline-none focus:ring-0"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-xs text-stone-500 dark:text-stone-400"
          >
            Message
          </label>
          <textarea
            id="message"
            className="h-32 w-full rounded-none border-0 border-b border-stone-200 dark:border-stone-700 bg-transparent p-2 text-sm text-stone-800 dark:text-stone-200 focus:border-stone-400 dark:focus:border-stone-500 focus:outline-none focus:ring-0"
          ></textarea>
        </div>
        <Button className="mt-4 w-full rounded-none bg-stone-800 dark:bg-stone-700 px-8 py-2 font-serif text-sm text-white hover:bg-stone-700 dark:hover:bg-stone-600 sm:w-auto">
          Send Message
        </Button>
      </form>
    </section>
  );
}
