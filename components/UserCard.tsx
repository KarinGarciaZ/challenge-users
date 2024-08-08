import { User } from '@/mocks/users-mock';
import Link from 'next/link';
import styles from "./user-card.module.css";
import { AVATAR_URL } from '@/utils/constants';
import { USER_PATH } from '@/utils/routes';

interface UserCardProps {
  user: User;
}

export default async function UserCard({ user }: UserCardProps) {
  const { id, name, email } = user;
  return (
    <main className={styles.card}>
      <div className={styles.cardElements}>
        <img alt="user image" src={AVATAR_URL} />
        <div className={styles.cardData}>
          <p className={styles.cardName}>{name}</p>
          <p className={styles.cardEmail}>{email}</p>
        </div>
      </div>
      <div className={styles.cardMore}>
        <Link href={USER_PATH(id)}>View More</Link>
      </div>
    </main>
  )
}