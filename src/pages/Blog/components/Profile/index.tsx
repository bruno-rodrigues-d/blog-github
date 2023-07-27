import { ArrowSquareOut, GithubLogo, MapPin, Users } from "phosphor-react";
import { ProfileContainer, ProfileInfo, ProfileTitle, ProfileLink, ProfileFooter, ProfileIcons } from "./styles";

interface ProfileProps {
  information: any
}

export function Profile({ information }: ProfileProps) {
  return(
    <>
      <ProfileContainer>
        <img src={information.avatar_url} alt="" />

        <ProfileInfo>
          <ProfileTitle>
            <span>{information.name}</span>
            <ProfileLink href={information.html_url} target='_blank'>
              <span>GITHUB</span>
              <ArrowSquareOut size={16} color="#3294F8" />
            </ProfileLink>
          </ProfileTitle>
          <p>
            {information.bio}
          </p>
          <ProfileFooter>
            <ProfileIcons>
              <GithubLogo size={18} color="#3A536B" />
              <p>{information.login}</p>
            </ProfileIcons>
            <ProfileIcons>
              <MapPin size={18} color="#3A536B" />
              <p>{information.location}</p>
            </ProfileIcons>
            <ProfileIcons>
              <Users size={18} color="#3A536B" />
              <p>{information.followers} seguidores</p>
            </ProfileIcons>
          </ProfileFooter>
        </ProfileInfo>
      </ProfileContainer>
    </>
  )
}