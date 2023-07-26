import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { ListPost } from "./styles";

export function Blog() {
  return(
    <>
      <Profile />
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