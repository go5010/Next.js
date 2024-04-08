import { Article } from "@/Data/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((articles) => (
        <article className="shadow my-4 flex flex-col" key={articles.id}>
          <Link href={`articles/${articles.id}`} className="hover:opacity-75">
            <Image
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
              alt=""
              width={1280}
              height={300}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 pb-4 font-bold">
              Technology
            </Link>
            <Link
              href={`articles/${articles.id}`}
              className="text-slate-900 text-3xl font-bold hover:text-gray-700"
            >
              {articles.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900">
              Published on {articles.createdAt}
            </p>
            <Link
              href={`articles/${articles.id}`}
              className="text-slate-900 pb-6"
            >
              {articles.content}
            </Link>
            <Link
              href={`articles/${articles.id}`}
              className="text-pink-800 hover:text-black"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;

// 20240308
