import styles from "@atlz253/styles/button.module.css";
import { ReactNode } from "react";

export function Button({ children }: { children?: ReactNode }) {
  return <button className={styles.button}>{children}</button>;
}
