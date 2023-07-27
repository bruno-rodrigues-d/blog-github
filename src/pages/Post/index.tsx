import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { InfoPost } from "./components/InfoPost";
import { PostPageContainer, PostPageContent } from "./styles";

interface PostProps {
  body: string;
}

export function PostPage() {
  const [postInformation, setPostInformation] = useState<PostProps>([] as unknown as PostProps);

  const { id } = useParams();

  async function handleGithubPostInformation() {
    try {
      const response = await axios.get(`https://api.github.com/repos/bruno-rodrigues-d/blog-github/issues/${id}`);


      setPostInformation(response.data);
    } catch (err) {
      alert('Falha ao encontrar o perfil no GitHub!');
    }
  }

  useEffect(() => {
    handleGithubPostInformation();
  }, []);

  return (
    <>
    <PostPageContainer>
      <InfoPost />
      <PostPageContent>
        <ReactMarkdown>
          {postInformation?.body}
        </ReactMarkdown>
      </PostPageContent>
    </PostPageContainer>
    </>
  )
}