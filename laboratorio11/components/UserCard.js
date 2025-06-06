import styles from "./UserCard.module.css";
import { UserIcon } from "@heroicons/react/24/solid";

export default function UserCard({ name, email, role }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <UserIcon className={styles.icon} />
        <div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.email}>{email}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.role}>{role}</span>
      </div>
    </div>
  );
}
