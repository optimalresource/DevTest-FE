import React, { useState, useEffect } from "react";
import styles from "./TopSection.module.css";
import { Icon } from "@iconify/react";
import Image from "next/image";
import InputWithAdornment from "components/utilities/InputWithAdornment";

const TopSection = (props) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div className={styles.container}>
      <div className={styles.fixedContainer}>
        <div className={styles.leftSection}>
          <div className={styles.logoSection}>
            <Image
              src="/images/svg/full_logo.svg"
              width="80px"
              height="36px"
              alt="Logo"
              layout="fixed"
            />
          </div>
          {/* <input type="text" name="search" id="search" /> */}
          <div className={styles.InputWithAdornment}>
            <InputWithAdornment
              leftIcon={
                <Icon icon="akar-icons:search" className="text-[#8DA78C]" />
              }
              value={search}
              onChange={(e) => setSearch(e?.target?.value)}
              name="name"
              className={styles.formcontrol}
              placeholder="Search"
              inputClassName={styles.inputWidth}
            />
          </div>
        </div>
        <div className={styles.rightSection}>
          <section className={styles.tools}>
            <Icon icon="clarity:notification-outline-badged" />
            <div className={styles.email}>
              <Icon icon="carbon:email" />
            </div>
            <div className={styles.settings}>
              <Icon icon="ant-design:setting-outlined" />
            </div>
          </section>
          <div className={styles.desktopProfile}>
            <Image
              src="/images/profile.jpg"
              width="30px"
              height="30px"
              alt="Logo"
              className={`${styles.profile}`}
            />
          </div>
          <Icon icon="charm:menu-hamburger" className={styles.menu} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
