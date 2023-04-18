import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  //get files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  //get slug and front matter from post
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid justify-items-center">
          {posts.map((post, index) => (
            <div key={index} className="my-6">
              <h1 className="text-3xl">{post.frontmatter.title}</h1>
              <small>{post.frontmatter.date}</small>
              <div className="max-w-2xl" style={{position:"relative"}}>
                <Image
                  src={post.frontmatter.cover_image}
                  alt="Asynchronous javascript post image"
                  width={2400}
                  height={1598}
                  objectFit="cover"
                  loading='lazy'
                ></Image>
              </div>
              <p className="my-2">{post.frontmatter.excerpt}</p>
              <Link href={`/single-blog/${post.slug}`}>
                <a className="bg-green-400 p-2 text-white rounded">Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
