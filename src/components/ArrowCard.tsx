import { cn, formatDate } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

const defaultImage =
  "https://res.cloudinary.com/dxyxhzwdx/image/upload/v1635340348/gaftonosh/2021/10/gaftonosh-placeholder-tag.webp";

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">;
  pill?: boolean;
};

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a
      href={`/${entry.collection}/${entry.slug}`}
      class={`group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10  transition-colors duration-300 ease-in-out ${
        entry.data.featured
          ? "border-black/15 dark:border-white/20"
          : "border-black/15 dark:border-white/20"
      }`}>
      <div class="flex flex-col relative">
        <img
          src={entry.data.image ? entry.data.image : defaultImage}
          width={176}
          height={99}
          alt={entry.data.title + "Thumbnail"}
          class="rounded-lg object-cover"
        />
        {/* {entry.data.featured && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            class="absolute -top-10 left-0"
            viewBox="0 0 16 16">
            <path
              fill="#ccffff"
              d="m16 6.204l-5.528-.803L8 .392L5.528 5.401L0 6.204l4 3.899l-.944 5.505L8 13.009l4.944 2.599L12 10.103z"
            />
          </svg>
        )} */}
      </div>

      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          <small class="text-xs uppercase">{formatDate(entry.data.date)}</small>

          {entry.data.featured && (
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-amber-700 dark:border-amber-200 text-amber-700 dark:text-amber-300">
              Featured
            </div>
          )}
        </div>
        <h6 class="font-semibold mt-3 text-black dark:text-white">
          {entry.data.title}
        </h6>

        <i class="text-xs line-clamp-2">{entry.data.summary}</i>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.data.tags.map(
            (
              tag: string // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
            ) => (
              <li
                class={cn(
                  "w-fit px-2 py-1 rounded-md text-xs",
                  "whitespace-nowrap overflow-hidden overflow-ellipsis",
                  "flex gap-2 items-center",
                  "dark:bg-indigo-950 dark:text-indigo-100 bg-indigo-200 text-indigo-700"
                )}>
                {tag}
              </li>
            )
          )}
        </ul>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white">
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
        <polyline
          points="12 5 19 12 12 19"
          class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </svg>
    </a>
  );
}
