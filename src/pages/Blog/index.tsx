import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { ListPost } from "./styles";

export interface BlogProps {
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export function Blog() {
  const [posts, setPosts] = useState();

  async function handleGithubProfileInformation() {
    try {
      const response = await axios.get(`https://api.github.com/search/issues?q=${''}repo:bruno-rodrigues-d/blog-github`);

      setPosts(response.data);
    } catch (err) {
      alert('Falha ao encontrar o perfil no GitHub!');
    }
  }

  useEffect(() => {
    handleGithubProfileInformation();
  }, []);
  return(
    <>
      <Profile />
      <Search />
      <ListPost>
      {
        posts?.items.map((item: { title: string; body: string; created_at: string; number: string }) => {
          return (
            <Post key={`${item.title}-${item.number}`} title={item.title} content={item.body} createdAt={item.created_at} />
          )
        })
      }
      </ListPost>
    </>
  )
}