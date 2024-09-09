import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal, For } from "solid-js";
import ArrowCard from "@components/ArrowCard";
import { cn } from "@lib/utils";

type Props = {
  tags: string[];
  data: CollectionEntry<"blog">[];
};

export default function Blog({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>());
  const [posts, setPosts] = createSignal<CollectionEntry<"blog">[]>([]);

  createEffect(() => {
    setPosts(
      data.filter((entry) =>
        Array.from(filter()).every((value) =>
          entry.data.tags.some(
            (tag: string) => tag.toLowerCase() === String(value).toLowerCase()
          )
        )
      )
    );
  });

  function toggleTag(tag: string) {
    setFilter(
      (prev) =>
        new Set(
          prev.has(tag) ? [...prev].filter((t) => t !== tag) : [...prev, tag]
        )
    );
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <div class="sticky top-24">
          <div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">
            Tags
          </div>
          <div class="flex flex-wrap gap-1">
            <For each={tags}>
              {(tag) => (
                <button
                  onClick={() => toggleTag(tag)}
                  class={cn(
                    "w-fit px-2 py-1 rounded-md text-xs",
                    "whitespace-nowrap overflow-hidden overflow-ellipsis",
                    "flex gap-2 items-center",
                    "dark:bg-indigo-950 dark:text-indigo-100 bg-indigo-100 text-indigo-800",
                    "dark:hover:bg-indigo-200 dark:hover:text-indigo-700 hover:bg-indigo-600 hover:text-indigo-100",
                    "transition-colors duration-300 ease-in-out",
                    filter().has(tag) &&
                      "dark:bg-indigo-100 dark:text-indigo-950 bg-indigo-600 text-indigo-100"
                  )}>
                  {tag}
                </button>
              )}
            </For>
          </div>
        </div>
      </div>

      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            SHOWING {posts().length} OF {data.length} POSTS
          </div>
          <ul class="flex flex-col gap-3">
            {posts().map((post) => (
              <li>
                <ArrowCard entry={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
