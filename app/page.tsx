'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface StudentData {
  id: string;
  name: string;
  age: number;
  gender: string;
  education: string;
  region: string;
  interests: string;
  career: string;
  challenge: string;
}

export default function Home() {
  const [student] = useState<StudentData>({
    id: 'DLF-RDA-003-UF',
    name: 'UF',
    age: 15,
    gender: 'Female',
    education: 'Senior 2',
    region: 'Kigali City, Rwanda',
    interests: 'Mathematics and Biology',
    career: 'Police Officer',
    challenge:
      'UF is a resilient young girl from a low-income household who is being raised by her single mother. Despite facing ongoing financial hardships that make it difficult to consistently access essential school materials and health insurance, she remains determined to pursue her education and build a brighter future. These challenges continue to affect her academic journey, yet her strength, hope, and commitment to achieving her dreams remain evident.',
  });

  const formBase =
    'https://docs.google.com/forms/d/e/1FAIpQLSe_tqjr8LYVpZXGBlIhg1ZdOdMErLhA45dpK46zd_GzFg7nBg/viewform';
  const formLink = formBase + '?entry.123456789=' + student.id;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <Image
            src="/logo.png"
            alt="Deep Light Fountain Logo"
            width={120}
            height={120}
            priority
            className={styles.logo}
          />
          <h1>Deep Light Fountain</h1>
          <p>Student Sponsorship Profile</p>
          <div className={styles.badge}>Student ID: {student.id}</div>
        </div>

        {/* STUDENT INFO */}
        <div className={styles.section}>
          <h2>Student Profile</h2>
          <div className={styles.infoGrid}>
            <div className={styles.card}>
              <strong>Name</strong>
              <span>{student.name}</span>
            </div>
            <div className={styles.card}>
              <strong>Age</strong>
              <span>{student.age} Years</span>
            </div>
            <div className={styles.card}>
              <strong>Gender</strong>
              <span>{student.gender}</span>
            </div>
            <div className={styles.card}>
              <strong>Education Level</strong>
              <span>{student.education}</span>
            </div>
            <div className={styles.card}>
              <strong>Region</strong>
              <span>{student.region}</span>
            </div>
            <div className={styles.card}>
              <strong>Interests</strong>
              <span>{student.interests}</span>
            </div>
            <div className={styles.card}>
              <strong>Dream Career</strong>
              <span>{student.career}</span>
            </div>
          </div>
        </div>

        {/* CHALLENGE */}
        <div className={styles.section}>
          <h2>Challenge</h2>
          <p>{student.challenge}</p>
        </div>

        {/* SUPPORT */}
        <div className={styles.section}>
          <h2>Support Needed</h2>
          <ul className={styles.supportList}>
            <li>School fees support</li>
            <li>Books and learning materials</li>
            <li>School uniform</li>
            <li>Mentorship support</li>
          </ul>
        </div>

        {/* BUTTON */}
        <div className={styles.buttonContainer}>
          <a href={formLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
            Become a Sponsor
          </a>
        </div>

        {/* FOOTER */}
        <div className={styles.footer}>
          <strong>Privacy & Child Protection Notice</strong>
          <br />
          <br />
          This information is shared only for sponsorship purposes.
        </div>
      </div>
    </main>
  );
}
