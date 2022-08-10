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
          {/* <input type="text" name="search" id="search" /> */}
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
        <div className={styles.rightSection}>
          <section className={styles.tools}>
            <Icon icon="clarity:notification-outline-badged" />
            <Icon icon="carbon:email" />
            <Icon icon="ant-design:setting-outlined" />
          </section>
          <Image
            src="/images/profile.jpg"
            width="30px"
            height="30px"
            alt="Logo"
            className={styles.profile}
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
