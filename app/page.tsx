import UserCard from '@/components/UserCard';
import { User } from '@/mocks/users-mock';
import styles from "./page.module.css";

interface SuccessfulResponse<T> {
  data: T;
  status: string;
}

// TODO: It'd be great to implement pagination to get more users instead of all at once.
async function getUsers(): Promise<SuccessfulResponse<User[]>> {
  const res = await fetch(process.env.API_HOME + 'users');
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 
export default async function Users() {
  const users = (await getUsers()).data;

  return (
    <main className={styles.main}>
      <h1>Users</h1>
      <div className={styles.container}>
        {users.length ?
          users.map((usr) => <UserCard key={usr.id} user={usr} />) :
          <span><b>No Users Found</b></span>
        }
      </div>
    </main>
  )
}
