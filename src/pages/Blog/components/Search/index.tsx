import { SearchContainer, SearchHeader, SearchInput } from "./styles";

export function Search() {
  return(
    <SearchContainer>
      <SearchHeader>
        <span>Publicações</span>
        <p>6 publicações</p>
      </SearchHeader>
      <SearchInput placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}