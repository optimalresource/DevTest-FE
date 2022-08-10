import Image from "next/image";
import React from "react";
import styles from "./LeftSection.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";

const LeftSection = (props) => {
  const router = useRouter();
  const active = router.asPath.split("?")[0];
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.logoSection}>
          <Image
            src="/images/svg/full_logo.svg"
            width="80px"
            height="36px"
            alt="Logo"
          />
        </div>
        <nav className={styles.navContainer}>
          <Link href="/user">
            <a className={active === "/user" ? styles.active : ""}>
              <Icon icon="eva:home-fill" />
              Dashboard
            </a>
          </Link>
          <Link href="/user/gigs">
            <a className={active === "/user/gigs" ? styles.active : ""}>
              <Icon icon="eva:briefcase-fill" />
              Gigs
            </a>
          </Link>
          <Link href="/user/company">
            <a className={active === "/user/company" ? styles.active : ""}>
              <Icon icon="material-symbols:width-wide-sharp" />
              Company
            </a>
          </Link>
          <Link href="/user/account">
            <a className={active === "/user/account" ? styles.active : ""}>
              <Icon icon="bi:person-fill" />
              Account
            </a>
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default LeftSection;
