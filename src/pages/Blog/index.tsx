import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { ListPost, SearchContainer, SearchHeader, SearchInput } from "./styles";

export interface BlogProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

interface BlogTypes {
  items: BlogProps[];
}

export function Blog() {
  const [posts, setPosts] = useState<BlogTypes>();
  const [valor, setValor] = useState('');
  
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setValor(event.target.value);
  };

  async function handleGithubProfileInformation() {
    try {
      const response = await axios.get(`https://api.github.com/search/issues?q=${valor ? valor : ''}repo:bruno-rodrigues-d/blog-github`);

      setPosts(response.data);
    } catch (err) {}
  }

  useEffect(() => {
    handleGithubProfileInformation();
  }, [valor]);

  return(
    <>
      <Profile />
      <SearchContainer>
        <SearchHeader>
          <span>Publicações</span>
          <p>{ String(posts?.items?.length)} publicações</p>
        </SearchHeader>
        <SearchInput placeholder="Buscar conteúdo" onChange={handleChange} />
      </SearchContainer>
      <ListPost>
      {
        posts?.items.map((item: BlogProps) => {
          return (
            <Post
              key={`${item.title}-${item.number}`}
              title={item.title}
              content={item.body}
              createdAt={item.created_at}
              number={item.number}
            />
          )
        })
      }
      </ListPost>
    </>
  )
}