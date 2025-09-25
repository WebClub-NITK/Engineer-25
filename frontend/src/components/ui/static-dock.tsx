import { Link } from "react-router-dom";
import * as React from "react"

type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export default function StaticDock({
  items,
}: {
  items: DockItem[];
}) {
  return (
    <>

      <div className="fixed top-0 left-1/2 z-50 flex md:hidden -translate-x-1/2 w-full px-3 py-2">
        <div className="mx-auto w-full max-w-[calc(100vw-24px)] flex justify-center items-center gap-4">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group flex flex-col items-center w-12 h-12 rounded-full bg-white/20 border border-white/10 hover:bg-white/40 text-white transition-colors justify-center"
            >
              {item.icon}
              <span className="my-10 hidden group-hover:block text-xs text-white truncate">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
