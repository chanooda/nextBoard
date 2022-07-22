import Link from "next/link";
import { IPost } from "../../interfaces/Props/data/dataInterface";
import { formatDateDiff } from "../../libs/client/util/util";

function PostList({ posts, main }: { posts: IPost[]; main?: boolean }) {
  const OptionedPosts = main ? posts.slice(0, 10).reverse() : posts.slice(0, 5).reverse();

  return (
    <table className="text-center">
      <thead className="h-10 border-t-2 border-b border-black">
        <tr>
          <th className="">No</th>
          <th>제목</th>
          <th className="">조회수</th>
          <th className="hidden h-full sm:table-cell">날짜</th>
        </tr>
      </thead>
      <tbody>
        {OptionedPosts.map((post) => {
          return (
            <tr key={post.id} className="h-10 border-b border-black">
              <td className="w-[50px]">{post.id}</td>
              <td className="pl-4 overflow-hidden text-start overflow-ellipsis whitespace-nowrap">
                <Link href={`/board/${post.boardId}/post/${post.id}`}>
                  <a href="">{post.title}</a>
                </Link>
              </td>
              <td className="w-[60px]">{post.view}</td>
              <td className="hidden w-[80px] sm:table-cell">{formatDateDiff(post.createdAt)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PostList;
