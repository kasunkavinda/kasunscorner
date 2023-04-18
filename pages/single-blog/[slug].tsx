import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Image from "next/image";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  //get frontmatter
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { frontmatter, slug, content },
  };
}

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid justify-items-center">
          <div className="my-6 max-w-sm md:max-w-3xl">
            <Link href="/blog">
              <a className="bg-green-400 p-2 text-white rounded">Go Back</a>
            </Link>
            <div className="md:max-w-3xl max-w-md mt-4 postImage" style={{position:"relative"}}>
              <Image
                src={cover_image}
                alt="Asynchronous javascript post image"
                width={2400}
                height={1598}
                objectFit="cover"
                loading='lazy'
              ></Image>
            </div>
            <h1 className="text-3xl pt-4 text-center">{title}</h1>
            <p className="text-center">{date}</p>
            <div
              className="my-8"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
