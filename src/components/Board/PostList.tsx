import { IPost } from "../../interfaces/Props/data/dataInterface";
import { formatDateDiff } from "../../libs/client/util/util";

function PostList({ posts }: { posts: IPost[] }) {
  return (
    <table className="text-center">
      <thead className="border-t-2 border-b border-black h-10">
        <tr>
          <th className="w-[30px]">No</th>
          <th>제목</th>
          <th className="w-[50px] ">조회수</th>
          <th className="w-[80px] hidden sm:block">날짜</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => {
          return (
            <tr key={post.id} className="h-10 border-b border-black">
              <td>{post.id}</td>
              <td className="pl-4 text-start overflow-hidden overflow-ellipsis whitespace-nowrap">
                {post.title}
              </td>
              <td>{post.view}</td>
              <td className="hidden sm:block">{formatDateDiff(post.createdAt)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PostList;
