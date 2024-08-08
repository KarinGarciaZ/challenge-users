import UserCard from '@/components/UserCard';
import { User } from '@/mocks/users-mock';
import Link from 'next/link';
import styles from "./user.module.css";
import { AVATAR_URL } from '@/utils/constants';
import { HOME } from '@/utils/routes';

interface SuccessfulResponse<T> {
  data: T;
  status: string;
}

interface UserResponse extends Omit<User, 'friends'> {
  friends: User[];
}
 
async function getUser(id: string): Promise<SuccessfulResponse<UserResponse>> {
  const res = await fetch(process.env.API_HOME + 'users/' + id);
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

const UserInfo = ({ prop, value }: { value: string | number, prop: string }) => {
  return <p><b>{prop}: </b>{value}</p>
}
 
export default async function Users({ params }: { params: { id: string } }) {
  const user = (await getUser(params.id)).data;

  const { friends, id, ...rest } = user;
  const info =  Object.entries(rest).map(([prop, value]) => ({ prop, value }));

  return (
    <main className={styles.main}>
      <Link className={styles.back} href={HOME}>← All Users</Link>
      <div className={styles.container}>
        <h1>User Profile</h1>
        <div className={styles.profile}>
          <img alt="profile image" src={AVATAR_URL} />
          <div className={styles.info}>
            {info.map(({prop, value}) => <UserInfo key={prop} prop={prop} value={value}/>)}
          </div>
        </div>
        <h2>Friends</h2>
        <div className={styles.friends}>
          {friends.length ?
            friends.map((friend) => <UserCard key={friend.id} user={friend} />) :
            <span><b>No friends Found</b></span>
          }
        </div>
      </div>
    </main>
  )
}