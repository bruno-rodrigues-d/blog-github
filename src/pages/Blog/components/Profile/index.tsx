import axios from "axios";
import { ArrowSquareOut, GithubLogo, MapPin, Users } from "phosphor-react";
import { useEffect, useState } from "react";
import { ProfileContainer, ProfileInfo, ProfileTitle, ProfileLink, ProfileFooter, ProfileIcons } from "./styles";

interface IUserInfo {
  name: string;
  followers: number;
  githubUsername: string;
  location: string;
  url: string;
  imgUrl: string;
  description: string;
}

export function Profile() {
  const [profileInformation, setProfileInformation] = useState<IUserInfo>();

  async function handleGithubProfileInformation() {
    try {
      const response = await axios.get('https://api.github.com/users/bruno-rodrigues-d');
      const { name, followers, login, location, html_url, avatar_url, bio } =
      response.data;
      const newUserObj = {
        name,
        followers,
        githubUsername: login,
        location,
        url: html_url,
        imgUrl: avatar_url,
        description: bio,
      };

      setProfileInformation(newUserObj);
    } catch (err) {
      alert('Falha ao encontrar o perfil no GitHub!');
    }
  }

  useEffect(() => {
    handleGithubProfileInformation();
  }, []);

  return(
    <>
      <ProfileContainer>
        <img src={profileInformation?.imgUrl} alt="" />

        <ProfileInfo>
          <ProfileTitle>
            <span>{profileInformation?.name}</span>
            <ProfileLink href={profileInformation?.url} target='_blank'>
              <span>GITHUB</span>
              <ArrowSquareOut size={16} color="#3294F8" />
            </ProfileLink>
          </ProfileTitle>
          <p>
            {profileInformation?.description}
          </p>
          <ProfileFooter>
            <ProfileIcons>
              <GithubLogo size={18} color="#3A536B" />
              <p>{profileInformation?.githubUsername}</p>
            </ProfileIcons>
            <ProfileIcons>
              <MapPin size={18} color="#3A536B" />
              <p>{profileInformation?.location}</p>
            </ProfileIcons>
            <ProfileIcons>
              <Users size={18} color="#3A536B" />
              <p>{profileInformation?.followers} seguidores</p>
            </ProfileIcons>
          </ProfileFooter>
        </ProfileInfo>
      </ProfileContainer>
    </>
  )
}