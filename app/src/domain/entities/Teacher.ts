import User from './User';
import SocialNetwork from './Social-network';

export default interface Teacher{
  _id: string;
  user: User|string;
  resume: string;
  socialNetworks: SocialNetwork[];
}
