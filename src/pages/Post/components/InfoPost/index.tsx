import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { InfoPostContainer, InfoPostHeader, InfoPostFooter, ProfileLink, ProfileIcons } from "./styles";

interface InfoPostTypes {
  title: string;
  user: {
    html_url: string;
    login: string;
  }
  created_at: string;
  comments: string;
}

interface InfoPostProps {
  post: InfoPostTypes
}

export function InfoPost() {
  const [postInformation, setPostInformation] = useState([]);

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

  // const formattedDate = formatDistanceToNow(new Date(postInformation?.created_at), {
  //   locale: ptBR,
  //   addSuffix: true,
  // });

  return(
    <InfoPostContainer>
      <InfoPostHeader>
        <ProfileLink href='/'>
            <CaretLeft size={16} color="#3294F8" />
            <span>voltar</span>
          </ProfileLink>
          <ProfileLink href={postInformation?.user?.html_url} target='_blank'>
            <span>github</span>
            <ArrowSquareOut size={16} color="#3294F8" />
          </ProfileLink>
      </InfoPostHeader>
      <span>{postInformation?.title}</span>
      <InfoPostFooter>
      <ProfileIcons>
        <GithubLogo size={18} color="#3A536B" />
          <p>{postInformation?.user?.login}</p>
        </ProfileIcons>
        <ProfileIcons>
          <CalendarBlank size={18} color="#3A536B" weight="fill" />
          <p>{postInformation?.created_at}</p>
        </ProfileIcons>
        <ProfileIcons>
          <ChatCircle size={18} color="#3A536B" weight="fill" />
          <p>{postInformation?.comments} comentário(s)</p>
        </ProfileIcons>
      </InfoPostFooter>
    </InfoPostContainer>
  )
}