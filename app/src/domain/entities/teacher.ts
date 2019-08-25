import User from './user';
import SocialNetwork from './social-network';

export default interface Teacher{
  _id: string;
  user: User|string;
  resume: string;
  socialNetworks: SocialNetwork[];
}
