import Cover from '../../assets/Cover.svg'
import { HeaderContiner } from './styles'

export function Header() {
  return(
    <>
      <HeaderContiner>
        <img src={Cover} alt="Imagem do header" />
      </HeaderContiner>
    </>
  )
}