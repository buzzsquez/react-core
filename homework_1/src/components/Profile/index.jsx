import React from 'react';
import styles from './style.module.css';

function Profile({ ...props }) {
  const {
    name, surname, date, phone, site, about, stack, project,
  } = props;

  return (
    <div className={styles.profile}>
      <div className={styles.main}>
        <div className={styles.title}>{`${name} ${surname}`}</div>
        <div className={styles.info}>
          <div className={styles.infoText}>
            Дата рождения:
            <span className={styles.infoData}>{` ${date}`}</span>
          </div>
          <div className={styles.infoText}>
            Телефон:
            <span className={styles.infoNumber}>{` ${phone}`}</span>
          </div>
          <div className={styles.infoText}>
            Сайт:
            <span className={styles.infoSite}>{` ${site}`}</span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoAbout}>
            О себе:
            <span className={styles.infoDataLong}>{` ${about}`}</span>
          </div>
          <div className={styles.infoAbout}>
            Стек технологий:
            <span className={styles.infoDataLong}>{` ${stack}`}</span>
          </div>
          <div className={styles.infoAbout}>
            Описание последнего проекта:
            <span className={styles.infoDataLong}>{` ${project}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
