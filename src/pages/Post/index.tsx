import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { InfoPost } from "./components/InfoPost";
import { PostPageContainer, PostPageContent } from "./styles";

export function PostPage() {
  const [postInformation, setPostInformation] = useState();

  async function handleGithubPostInformation() {
    try {
      const response = await axios.get('https://api.github.com/repos/bruno-rodrigues-d/blog-github/issues/1');


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