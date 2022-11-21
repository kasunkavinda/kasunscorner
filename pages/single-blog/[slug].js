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
      slug: filename.replace(".md", ""),
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
    path.join("posts", slug + ".md"),
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
          <div className="my-6">
            <Link href="/blog" className="bg-green-400 p-2 text-white rounded">
              Go Back
            </Link>
            <h1 className="text-5xl pt-4">{title}</h1>
            <small>{date}</small>
            <div style={{ }}>
              <Image
                src={cover_image}
                alt="image1"
                width={2400}
                height={1598}
                layout="responsive"
              ></Image>
            </div>
            <div
              className="my-2"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
