import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoPostContainer, InfoPostHeader, InfoPostFooter, ProfileLink, ProfileIcons } from "./styles";

interface InfoPostTypes {
  title: string;
  user: {
    login: string;
  }
  html_url: string;
  created_at: string;
  comments: string;
}

export function InfoPost() {
  const { id } = useParams();

  const [postInformation, setPostInformation] = useState<InfoPostTypes>();

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

  const dateCreated = postInformation?.created_at;

  const formattedDate = formatDistanceToNow( dateCreated ? new Date(dateCreated) : new Date(), {
    locale: ptBR,
    addSuffix: true,
  });

  return(
    <InfoPostContainer>
      <InfoPostHeader>
        <ProfileLink href='/'>
            <CaretLeft size={16} color="#3294F8" />
            <span>voltar</span>
          </ProfileLink>
          <ProfileLink href={postInformation?.html_url} target='_blank'>
            <span>ver no github</span>
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
          <p>{formattedDate}</p>
        </ProfileIcons>
        <ProfileIcons>
          <ChatCircle size={18} color="#3A536B" weight="fill" />
          <p>{postInformation?.comments} comentário(s)</p>
        </ProfileIcons>
      </InfoPostFooter>
    </InfoPostContainer>
  )
}