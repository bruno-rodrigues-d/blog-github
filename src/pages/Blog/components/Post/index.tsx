import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";
import { PostContainer, PostHeader, PostText } from "./styles";

interface PostProps {
  title: string;
  content: string;
  createdAt: string;
  number: number;
}

export function Post({ title, content, createdAt, number }: PostProps) {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  });

  return(
    <PostContainer to={`/post/${number}`}>
      <PostHeader>
        <span>{title}</span>
        <p>{formattedDate}</p>
      </PostHeader>
      <PostText>
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
      </PostText>
    </PostContainer>
  )
}