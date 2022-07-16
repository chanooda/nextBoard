import { GetServerSideProps } from "next";
import { IPostProps } from "../../../../interfaces/Props/pages/PageInterface";
import { getPost } from "../../../../libs/client/api/get";

export default function Post({ post }: IPostProps) {
  console.log(post);
  return (
    <div>
      <h2>{post.title}</h2>
      <div>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { postId } = query;

  const data = await getPost(String(postId));

  return { props: { post: data } };
};
