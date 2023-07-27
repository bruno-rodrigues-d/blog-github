import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { ListPost } from "./styles";

export function Blog() {
  const [profileInformation, setProfileInformation] = useState([]);

  async function handleGithubProfileInformation() {
    try {
      const response = await axios.get('https://api.github.com/users/bruno-rodrigues-d')

      setProfileInformation(response.data);
    } catch (err) {
      alert('Falha ao encontrar o perfil no GitHub!');
    }
  }

  useEffect(() => {
    handleGithubProfileInformation();
  }, []);

  return(
    <>
      <Profile information={profileInformation} />
      <Search />
      <ListPost>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ListPost>
    </>
      
  )
}