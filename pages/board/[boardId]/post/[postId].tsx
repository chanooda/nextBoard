import { GetServerSideProps } from "next";
import { getPost } from "../../../../libs/client/boardApi";

export default function Post({ post }) {
  return <div>Post</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { postId } = query;
  console.log(postId);
  const data = await getPost(String(postId));

  console.log(data);

  return { props: { post: data } };
};
