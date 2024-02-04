import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By shincode, Published on 2023/07/15</p>
          <Link href="#">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sit
            est inventore consequatur ipsam atque adipisci, doloremque alias
            quibusdam obcaecati voluptas modi! Magnam quidem iusto mollitia
            impedit eligendi reprehenderit autem?
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
