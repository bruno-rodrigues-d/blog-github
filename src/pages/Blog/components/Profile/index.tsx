import { ArrowSquareOut, GithubLogo, MapPin, Users } from "phosphor-react";
import { ProfileContainer, ProfileInfo, ProfileTitle, ProfileLink, ProfileFooter, ProfileIcons } from "./styles";

export function Profile() {
  return(
    <>
      <ProfileContainer>
        <img src="https://github.com/bruno-rodrigues-d.png" alt="" />

        <ProfileInfo>
          <ProfileTitle>
            <span>Bruno Rodrigues</span>
            <ProfileLink href='/'>
              <span>GITHUB</span>
              <ArrowSquareOut size={16} color="#3294F8" />
            </ProfileLink>
          </ProfileTitle>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
            massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
          <ProfileFooter>
            <ProfileIcons>
              <GithubLogo size={18} color="#3A536B" />
              <p>bruno-rodrigues-d</p>
            </ProfileIcons>
            <ProfileIcons>
              <MapPin size={18} color="#3A536B" />
              <p>São Paulo - SP</p>
            </ProfileIcons>
            <ProfileIcons>
              <Users size={18} color="#3A536B" />
              <p>32 seguidores</p>
            </ProfileIcons>
          </ProfileFooter>
        </ProfileInfo>
      </ProfileContainer>
    </>
  )
}