
const { pool } = require('./config/db');
require('dotenv').config();

// ============================================================
// بنك أسئلة WE School - Web Development and Programming
// الصف الثالث 2025-2026
// المواضيع: React, Node.JS, PHP, Advanced PHP, Laravel,
//           Introduction to Software Testing & Capstone Project
// ============================================================

const questions = [
  // ===== Unit 17: Introduction to Cybersecurity =====
  // ===== أسئلة 1-10: Answer Questions (TPK22) =====

  {
    questionText: 'What is the relationship between Information Security and Cybersecurity?',
    questionType: 'multiple_choice',
    options: [
      'They are completely unrelated fields',
      'Cybersecurity is part of Information Security; InfoSec protects all types of information while Cybersecurity focuses on digital information and systems',
      'Information Security is a subset of Cybersecurity',
      'They are the same thing'
    ],
    correctAnswer: 'Cybersecurity is part of Information Security; InfoSec protects all types of information while Cybersecurity focuses on digital information and systems',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Cybersecurity is considered a part of Information Security. Information Security protects all types of information. Cybersecurity focuses only on digital information and systems.'
  },

  {
    questionText: 'What is the role of Network Security in Cybersecurity?',
    questionType: 'multiple_choice',
    options: [
      'It focuses on protecting applications from vulnerabilities',
      'It focuses on protecting data as it travels through network devices such as routers, switches, and firewalls',
      'It deals with physical security of buildings',
      'It manages user passwords only'
    ],
    correctAnswer: 'It focuses on protecting data as it travels through network devices such as routers, switches, and firewalls',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Network Security focuses on protecting data as it travels through network devices such as routers, switches, and firewalls.'
  },

  {
    questionText: 'What is the importance of Application Security?',
    questionType: 'multiple_choice',
    options: [
      'It aims to protect applications from vulnerabilities that attackers could exploit',
      'It encrypts all network traffic',
      'It manages hardware inventory',
      'It provides backup solutions for data'
    ],
    correctAnswer: 'It aims to protect applications from vulnerabilities that attackers could exploit',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Application Security aims to protect applications from vulnerabilities that attackers could exploit.'
  },

  {
    questionText: 'What is the role of Ethical Hackers in Cybersecurity?',
    questionType: 'multiple_choice',
    options: [
      'They hack systems for personal gain',
      'They use the same techniques as malicious hackers but with permission and for defensive purposes to keep organizations secure',
      'They only build firewalls',
      'They design network cables'
    ],
    correctAnswer: 'They use the same techniques as malicious hackers but with permission and for defensive purposes to keep organizations secure',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Ethical hackers use the same techniques as malicious hackers but with permission and for defensive purposes.'
  },

  {
    questionText: 'What are VTY (Virtual Teletype) lines used for?',
    questionType: 'multiple_choice',
    options: [
      'To connect physical cables to routers',
      'To access and manage network devices such as routers and switches remotely',
      'To encrypt data on hard drives',
      'To configure DNS servers'
    ],
    correctAnswer: 'To access and manage network devices such as routers and switches remotely',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'VTY lines are used to access and manage network devices such as routers and switches remotely.'
  },

  {
    questionText: 'What command is used to allow remote access using Telnet only?',
    questionType: 'multiple_choice',
    options: [
      'transport input ssh',
      'transport input telnet',
      'transport input all',
      'login local'
    ],
    correctAnswer: 'transport input telnet',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The command "transport input telnet" allows remote access using Telnet only.'
  },

  {
    questionText: 'What is the importance of reconnaissance in cybersecurity?',
    questionType: 'multiple_choice',
    options: [
      'It is the final stage of a cyberattack where data is destroyed',
      'It is the first stage in a cyberattack involving collecting information about a target before attempting any attack',
      'It refers to installing antivirus software',
      'It means resetting all passwords'
    ],
    correctAnswer: 'It is the first stage in a cyberattack involving collecting information about a target before attempting any attack',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Reconnaissance is the first stage in a cyberattack. It involves collecting information about a target system, network, or organization before attempting any attack.'
  },

  {
    questionText: 'What is the difference between active and passive reconnaissance?',
    questionType: 'multiple_choice',
    options: [
      'Active uses firewalls; passive uses encryption',
      'Active involves directly interacting with the target by sending probes; passive relies on observing without direct interaction',
      'They are the same thing',
      'Passive is more dangerous than active'
    ],
    correctAnswer: 'Active involves directly interacting with the target by sending probes; passive relies on observing without direct interaction',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Active reconnaissance involves directly interacting with the target. Passive reconnaissance does not involve direct interaction.'
  },

  {
    questionText: 'What is the main purpose of NAT?',
    questionType: 'multiple_choice',
    options: [
      'To encrypt all network traffic',
      'To save public IPv4 addresses by allowing networks to use private addresses internally',
      'To speed up internet connections',
      'To block all incoming traffic'
    ],
    correctAnswer: 'To save public IPv4 addresses by allowing networks to use private addresses internally',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'NAT saves public IPv4 addresses by allowing networks to use private addresses internally.'
  },

  {
    questionText: 'How does NAT enhance network security?',
    questionType: 'multiple_choice',
    options: [
      'It encrypts all data packets',
      'It hides internal IPv4 addresses from outside networks making it harder for unauthorized users to see internal devices',
      'It blocks all external traffic',
      'It increases bandwidth'
    ],
    correctAnswer: 'It hides internal IPv4 addresses from outside networks making it harder for unauthorized users to see internal devices',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'NAT hides internal IPv4 addresses from outside networks, making it harder for unauthorized users to see internal devices.'
  },

  // ===== أسئلة 11-20: Complete the Sentence → MC =====

  {
    questionText: 'A former employee hacking into a company\'s network to delete files after being fired. The motive behind this attack is:',
    questionType: 'multiple_choice',
    options: ['Financial gain', 'Taking Revenge', 'Espionage', 'Entertainment'],
    correctAnswer: 'Taking Revenge',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'A disgruntled former employee attacking a company network is motivated by taking revenge.'
  },

  {
    questionText: 'An attack that encrypts an organization\'s data and demands payment to restore access. The motive behind this attack is:',
    questionType: 'multiple_choice',
    options: ['Taking Revenge', 'Espionage', 'A ransomware attack (financial gain)', 'Hacktivism'],
    correctAnswer: 'A ransomware attack (financial gain)',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Ransomware encrypts data and demands payment – motivated by financial gain.'
  },

  {
    questionText: 'Flooding a website with excessive traffic, causing it to crash and become unavailable to legitimate users. This active attack is called:',
    questionType: 'multiple_choice',
    options: ['Man-in-the-Middle Attack', 'Phishing', 'Denial of Service (DoS) Attack', 'SQL Injection'],
    correctAnswer: 'Denial of Service (DoS) Attack',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'A DoS attack floods a website with excessive traffic causing it to crash.'
  },

  {
    questionText: 'A network that is used internally within an organization or home and is not directly accessible from the internet is called:',
    questionType: 'multiple_choice',
    options: ['Public Network', 'Private Network', 'DMZ', 'WAN'],
    correctAnswer: 'Private Network',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'A private network is used internally and is not directly accessible from the internet.'
  },

  {
    questionText: 'A network that is open and accessible to anyone. The internet is the most common example. This is called:',
    questionType: 'multiple_choice',
    options: ['Private Network', 'Public Network', 'LAN', 'Intranet'],
    correctAnswer: 'Public Network',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'A public network is open and accessible to anyone. The internet is the most common example.'
  },

  {
    questionText: 'Which feature dynamically learns source MAC addresses and adds them to the running configuration?',
    questionType: 'multiple_choice',
    options: ['DHCP Snooping', 'Sticky', 'DAI', 'Port Mirroring'],
    correctAnswer: 'Sticky',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The Sticky feature dynamically learns source MAC addresses and adds them to the running configuration.'
  },

  {
    questionText: 'The act of gathering information about the enemy in the military is like __________ in cybersecurity.',
    questionType: 'multiple_choice',
    options: ['Encryption', 'Reconnaissance', 'Firewall configuration', 'Patching'],
    correctAnswer: 'Reconnaissance',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Reconnaissance in cybersecurity is like gathering information about the enemy in the military.'
  },

  {
    questionText: 'An attacker may use tools like __________, host, and dig to gather domain-related information.',
    questionType: 'multiple_choice',
    options: ['Wireshark', 'Nslookup', 'Metasploit', 'Nmap'],
    correctAnswer: 'Nslookup',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Nslookup, host, and dig are tools used to gather domain-related information.'
  },

  {
    questionText: 'Creating a fake job posting to gather information about a company\'s technology setup is an example of a __________ attack.',
    questionType: 'multiple_choice',
    options: ['Brute force', 'Social engineering', 'DDoS', 'SQL injection'],
    correctAnswer: 'Social engineering',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Creating a fake job posting to gather information is a social engineering attack.'
  },

  {
    questionText: 'The method of gathering information about a target without directly interacting with it is called __________ reconnaissance.',
    questionType: 'multiple_choice',
    options: ['Active', 'Passive', 'Direct', 'Offensive'],
    correctAnswer: 'Passive',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Passive reconnaissance gathers information without directly interacting with the target.'
  },

  // ===== أسئلة 21-30: True/False =====

  {
    questionText: 'Cyber threats include activities like hacking, malware, and phishing.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Cyber threats include hacking, malware, phishing, and other malicious activities.'
  },

  {
    questionText: 'Once attackers know their goal, they use different tools and techniques to find and exploit weaknesses in computer systems or security policies.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Attackers use various tools and techniques to exploit weaknesses once they identify their goal.'
  },

  {
    questionText: 'A Black Hat hacker uses their skills to improve system security and protect against cyberattacks.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Black Hat hackers use skills for malicious purposes. White Hat (ethical) hackers improve security.'
  },

  {
    questionText: 'The RSA key size of 2048 bits is recommended for strong security when configuring SSH.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'RSA 2048-bit keys are recommended for strong SSH security.'
  },

  {
    questionText: 'The command service password-encryption encrypts all passwords stored on a Cisco device to enhance security.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The service password-encryption command encrypts all plaintext passwords on Cisco devices.'
  },

  {
    questionText: 'The "ip dhcp snooping trust" interface subcommand overrides the default setting of not trusted.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The ip dhcp snooping trust command marks a port as trusted, overriding the default untrusted setting.'
  },

  {
    questionText: 'Passive reconnaissance is more likely to alert the target than active reconnaissance.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Active reconnaissance is more likely to alert the target because it directly interacts with the system.'
  },

  {
    questionText: 'The dig tool can help attackers understand how a website resolves its DNS information.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The dig tool queries DNS servers and reveals how a website resolves its DNS information.'
  },

  {
    questionText: 'Dynamic NAT requires a one-to-one mapping between inside local and inside global addresses.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Static NAT requires one-to-one mapping. Dynamic NAT uses a pool of addresses.'
  },

  {
    questionText: 'PAT requires an overload keyword to support multiple inside local IP addresses with a few public IP addresses.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'PAT uses the overload keyword to allow many internal IPs to share few public IPs.'
  },

  // ===== أسئلة 31-40: Answer Questions =====

  {
    questionText: 'What is meant by offline identity and online identity?',
    questionType: 'multiple_choice',
    options: [
      'Offline identity is a VPN connection; online identity is a firewall rule',
      'Offline identity is who a person is in real life; online identity is a username or nickname used on websites',
      'They are the same thing',
      'Offline identity means no internet; online identity means connected to internet'
    ],
    correctAnswer: 'Offline identity is who a person is in real life; online identity is a username or nickname used on websites',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Offline identity refers to who a person is in real life. Online identity is a username or nickname used on websites.'
  },

  {
    questionText: 'What is the concept of Incident Response in Cybersecurity?',
    questionType: 'multiple_choice',
    options: [
      'Installing antivirus software on all devices',
      'Having a plan to minimize damage, reduce recovery time, and restore normal operations quickly after an incident',
      'Blocking all internet access during an attack',
      'Hiring ethical hackers permanently'
    ],
    correctAnswer: 'Having a plan to minimize damage, reduce recovery time, and restore normal operations quickly after an incident',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'An incident response plan minimizes damage, reduces recovery time, and restores normal operations quickly.'
  },

  {
    questionText: 'What command is used to display active Telnet sessions, and why is it important?',
    questionType: 'multiple_choice',
    options: [
      'show sessions - to view routing tables',
      'show users - to know who is running a session, from which IP, and on which VTY line',
      'show connections - to display bandwidth usage',
      'show telnet - to view encryption keys'
    ],
    correctAnswer: 'show users - to know who is running a session, from which IP, and on which VTY line',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The "show users" command displays active Telnet sessions. It is important to know who is connected, from which IP, and on which VTY line.'
  },

  {
    questionText: 'Why did SSH replace Telnet for remote device access?',
    questionType: 'multiple_choice',
    options: [
      'SSH is faster than Telnet',
      'SSH encrypts all data transmitted between the user and the device, while Telnet sends data in plain text',
      'Telnet is no longer available on any device',
      'SSH uses less bandwidth'
    ],
    correctAnswer: 'SSH encrypts all data transmitted between the user and the device, while Telnet sends data in plain text',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'SSH encrypts all data transmitted. Telnet sends data in plain text making it insecure.'
  },

  {
    questionText: 'How is RSA used with SSH, and which command generates RSA keys?',
    questionType: 'multiple_choice',
    options: [
      'RSA encrypts files; command is "rsa generate"',
      'RSA creates encryption keys for secure SSH communication; command is "crypto key generate rsa"',
      'RSA is a routing protocol; command is "enable rsa"',
      'RSA manages VLANs; command is "rsa key create"'
    ],
    correctAnswer: 'RSA creates encryption keys for secure SSH communication; command is "crypto key generate rsa"',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'RSA is used in SSH to create encryption keys. The command is "crypto key generate rsa".'
  },

  {
    questionText: 'How does using a management IP address on a Layer 2 switch help improve network security?',
    questionType: 'multiple_choice',
    options: [
      'It blocks all traffic',
      'It allows administrators to remotely access the switch using protocols such as Telnet or SSH',
      'It encrypts all data on the switch',
      'It increases switching speed'
    ],
    correctAnswer: 'It allows administrators to remotely access the switch using protocols such as Telnet or SSH',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The management IP address allows administrators to remotely access the switch using Telnet or SSH.'
  },

  {
    questionText: 'Why is passive reconnaissance preferred when testing live networks?',
    questionType: 'multiple_choice',
    options: [
      'It is faster than active reconnaissance',
      'It reduces the risk of system crashes, service disruption, or triggering security alarms',
      'It provides more information',
      'It is required by law'
    ],
    correctAnswer: 'It reduces the risk of system crashes, service disruption, or triggering security alarms',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Passive reconnaissance reduces the risk of system crashes, service disruption, or triggering security alarms.'
  },

  {
    questionText: 'What is Open-Source Intelligence (OSINT) and how is it used during reconnaissance?',
    questionType: 'multiple_choice',
    options: [
      'OSINT is a paid intelligence service used after an attack',
      'OSINT is collecting information from publicly available sources such as websites, search engines, and social media platforms',
      'OSINT is a type of malware',
      'OSINT is an encryption algorithm'
    ],
    correctAnswer: 'OSINT is collecting information from publicly available sources such as websites, search engines, and social media platforms',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'OSINT is the process of collecting information from publicly available sources such as websites, search engines, and social media.'
  },

  {
    questionText: 'What are the three main types of NAT?',
    questionType: 'multiple_choice',
    options: [
      'Static NAT, Dynamic NAT, PAT',
      'Local NAT, Global NAT, Universal NAT',
      'Internal NAT, External NAT, Border NAT',
      'Simple NAT, Complex NAT, Hybrid NAT'
    ],
    correctAnswer: 'Static NAT, Dynamic NAT, PAT',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'The three main types of NAT are Static NAT, Dynamic NAT, and PAT.'
  },

  {
    questionText: 'What does PAT stand for, and what is its function?',
    questionType: 'multiple_choice',
    options: [
      'Private Address Translation - converts private IPs to IPv6',
      'Port Address Translation - allows many devices to share one public IP using different port numbers',
      'Protocol Access Table - manages routing protocols',
      'Public Address Tracker - monitors public IP usage'
    ],
    correctAnswer: 'Port Address Translation - allows many devices to share one public IP using different port numbers',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'PAT stands for Port Address Translation. It allows many devices to share one public IP using different port numbers.'
  },

  // ===== أسئلة 41-50: MCQ =====

  {
    questionText: 'What does "InfoSec" refer to?',
    questionType: 'multiple_choice',
    options: ['Information Sector', 'Information Security', 'Internet Security', 'Infrastructure Section'],
    correctAnswer: 'Information Security',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'InfoSec stands for Information Security.'
  },

  {
    questionText: 'Which cybersecurity practice focuses on keeping devices like servers and smartphones safe from threats?',
    questionType: 'multiple_choice',
    options: ['Network Security', 'Application Security', 'Endpoint Security', 'Ethical Hacking'],
    correctAnswer: 'Endpoint Security',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Endpoint Security focuses on keeping devices like servers and smartphones safe from threats.'
  },

  {
    questionText: 'Which of the following best describes a passive attack?',
    questionType: 'multiple_choice',
    options: [
      'Modifying data during transmission',
      'Secretly monitoring network traffic without changing data',
      'Gaining unauthorized access by someone inside the organization',
      'Interfering with communication between systems'
    ],
    correctAnswer: 'Secretly monitoring network traffic without changing data',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'A passive attack involves secretly monitoring network traffic without changing data.'
  },

  {
    questionText: 'Which type of hacker uses their skills for ethical purposes, often working with permission from system owners?',
    questionType: 'multiple_choice',
    options: ['Black Hat', 'Gray Hat', 'White Hat', 'Suicide Hacker'],
    correctAnswer: 'White Hat',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'White Hat hackers use their skills ethically with permission from system owners.'
  },

  {
    questionText: 'Which port does Telnet use by default?',
    questionType: 'multiple_choice',
    options: ['TCP port 80', 'TCP port 22', 'TCP port 23', 'UDP port 53'],
    correctAnswer: 'TCP port 23',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Telnet uses TCP port 23 by default.'
  },

  {
    questionText: 'What is the function of the domain name in the SSH configuration?',
    questionType: 'multiple_choice',
    options: [
      'It secures communication between devices',
      'It helps create the Fully Qualified Domain Name (FQDN) for RSA keys',
      'It assigns an IP address to the device',
      'It specifies the encryption level'
    ],
    correctAnswer: 'It helps create the Fully Qualified Domain Name (FQDN) for RSA keys',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The domain name helps create the FQDN which is used for RSA key generation.'
  },

  {
    questionText: 'In Cisco devices, which privilege level grants the highest level of control over the device?',
    questionType: 'multiple_choice',
    options: ['0', '5', '10', '15'],
    correctAnswer: '15',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Privilege level 15 gives full administrative access on Cisco devices.'
  },

  {
    questionText: 'What is the first step an attacker usually takes when planning a cyberattack?',
    questionType: 'multiple_choice',
    options: ['Installing malware', 'Gathering information about the target', 'Deleting files', 'Hacking passwords'],
    correctAnswer: 'Gathering information about the target',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'The first step is reconnaissance – gathering information about the target.'
  },

  {
    questionText: 'Which of the following is characteristic of active reconnaissance?',
    questionType: 'multiple_choice',
    options: [
      'It does not interact with the target',
      'It uses open-source intelligence',
      'It involves sending probes to the target',
      'It does not risk crashing weak devices'
    ],
    correctAnswer: 'It involves sending probes to the target',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Active reconnaissance involves sending probes and directly interacting with the target.'
  },

  {
    questionText: 'How does NAT overloading provide many-to-one address translation?',
    questionType: 'multiple_choice',
    options: [
      'It uses a pool of addresses',
      'It converts IPv4 addresses to unused IPv6 Addresses',
      'It assigns a unique TCP/UDP port to each session',
      'It uses virtual MAC Address and Virtual IP Addresses'
    ],
    correctAnswer: 'It assigns a unique TCP/UDP port to each session',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'NAT overloading (PAT) assigns unique port numbers to differentiate sessions sharing one public IP.'
  },

  // ===== أسئلة 51-60: Answer Questions =====

  {
    questionText: 'What is the concept of user privilege levels in Cisco devices?',
    questionType: 'multiple_choice',
    options: [
      'All users have the same access level',
      'Levels range from 0 to 15. Lower levels allow basic commands, higher levels provide more control. Level 15 gives full administrative access',
      'There are only 2 levels: user and admin',
      'Privilege levels only apply to SSH'
    ],
    correctAnswer: 'Levels range from 0 to 15. Lower levels allow basic commands, higher levels provide more control. Level 15 gives full administrative access',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'User privilege levels range from 0 to 15. Privilege level 15 gives full administrative access.'
  },

  {
    questionText: 'How can oversharing on social media lead to security risks?',
    questionType: 'multiple_choice',
    options: [
      'It has no security impact',
      'Information such as birthdays, workplaces, and plans can be used to guess passwords, increasing phishing and identity theft risks',
      'It only affects personal reputation',
      'Social media platforms block all personal data automatically'
    ],
    correctAnswer: 'Information such as birthdays, workplaces, and plans can be used to guess passwords, increasing phishing and identity theft risks',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Personal information shared on social media can be used to guess passwords, increasing phishing and identity theft risks.'
  },

  {
    questionText: 'How do OSINT frameworks organize data-gathering sources and methods?',
    questionType: 'multiple_choice',
    options: [
      'They delete all collected data',
      'They organize different sources into clear categories making reconnaissance easier to analyze',
      'They encrypt all data',
      'They block all public sources'
    ],
    correctAnswer: 'They organize different sources into clear categories making reconnaissance easier to analyze',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'OSINT frameworks organize different sources into clear categories making reconnaissance easier to analyze.'
  },

  {
    questionText: 'What is DNS lookup?',
    questionType: 'multiple_choice',
    options: [
      'A process of encrypting DNS records',
      'The process of retrieving information about a domain such as IP addresses, name servers, and related DNS records',
      'A type of DDoS attack',
      'A firewall configuration method'
    ],
    correctAnswer: 'The process of retrieving information about a domain such as IP addresses, name servers, and related DNS records',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'DNS lookup retrieves information about a domain such as IP addresses, name servers, and DNS records.'
  },

  {
    questionText: 'What is the purpose of the Whois tool in identifying website ownership?',
    questionType: 'multiple_choice',
    options: [
      'To scan for open ports',
      'To find information about who owns and manages a website',
      'To encrypt network traffic',
      'To configure routers remotely'
    ],
    correctAnswer: 'To find information about who owns and manages a website',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The Whois tool is used to find information about who owns and manages a website.'
  },

  {
    questionText: 'Which command is used to show the NAT translation table?',
    questionType: 'multiple_choice',
    options: ['show nat table', 'show ip nat translations', 'display nat entries', 'show nat status'],
    correctAnswer: 'show ip nat translations',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The command "show ip nat translations" displays the NAT translation table.'
  },

  {
    questionText: 'What happens in Dynamic NAT if the public IP pool is exhausted?',
    questionType: 'multiple_choice',
    options: [
      'The router creates new IP addresses',
      'The router drops any new packets until an IP address in the pool becomes free',
      'All connections are terminated',
      'The router switches to static NAT automatically'
    ],
    correctAnswer: 'The router drops any new packets until an IP address in the pool becomes free',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'When the pool is exhausted, the router drops new packets until a pool address becomes available.'
  },

  {
    questionText: 'Which command shows the number of active translation entries and "hits"?',
    questionType: 'multiple_choice',
    options: ['show ip nat translations', 'show ip nat statistics', 'show nat entries', 'show ip nat hits'],
    correctAnswer: 'show ip nat statistics',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The "show ip nat statistics" command shows active translation entries and hits.'
  },

  {
    questionText: 'How does a commercial VPN ensure online privacy and security for individual users?',
    questionType: 'multiple_choice',
    options: [
      'By blocking all websites',
      'By encrypting user data, hiding their online activities',
      'By increasing internet speed',
      'By replacing the ISP'
    ],
    correctAnswer: 'By encrypting user data, hiding their online activities',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'A commercial VPN encrypts user data, hiding online activities.'
  },

  {
    questionText: 'Compare site-to-site VPNs and client-to-site VPNs.',
    questionType: 'multiple_choice',
    options: [
      'They are the same',
      'Site-to-site connects office networks; client-to-site provides individual remote access',
      'Client-to-site is for offices; site-to-site is for individuals',
      'Site-to-site uses encryption; client-to-site does not'
    ],
    correctAnswer: 'Site-to-site connects office networks; client-to-site provides individual remote access',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Site-to-site VPNs connect office networks. Client-to-site VPNs allow individual remote access.'
  },

  // ===== أسئلة 61-65: Matching - VPN, Proxy, IPS, Router, IDS =====

  {
    questionText: 'Match each network security device/service with its correct function.',
    questionType: 'matching',
    options: [],
    correctAnswer: '',
    matchingPairs: [
      { left: 'VPN', right: 'Connects remote employees securely' },
      { left: 'Proxy server', right: 'Hides user identities' },
      { left: 'IPS', right: 'Blocks harmful activities in real time' },
      { left: 'Router', right: 'Connects different parts of network' },
      { left: 'IDS', right: 'Checks the traffic to find threats, but does not block them' }
    ],
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'VPN connects remotely, Proxy hides identity, IPS blocks threats, Router connects networks, IDS detects but does not block.'
  },

  // ===== أسئلة 66-68: Matching - CIA Triad =====

  {
    questionText: 'Match each CIA Triad element with its correct description.',
    questionType: 'matching',
    options: [],
    correctAnswer: '',
    matchingPairs: [
      { left: 'Confidentiality', right: 'Information is kept secret from unauthorized access' },
      { left: 'Integrity', right: 'Information is accurate and unchanged' },
      { left: 'Availability', right: 'Information is accessible when needed' }
    ],
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Confidentiality = secret, Integrity = accurate, Availability = accessible when needed.'
  },

  // ===== أسئلة 69-71: Matching - Network Security, Incident Response, Ethical Hacking =====

  {
    questionText: 'Match each cybersecurity concept with its correct description.',
    questionType: 'matching',
    options: [],
    correctAnswer: '',
    matchingPairs: [
      { left: 'Network Security', right: 'Protecting data as it moves through network devices' },
      { left: 'Incident Response', right: 'Planning and preparing to handle security incidents' },
      { left: 'Ethical Hacking', right: 'Finding and fixing security weaknesses before they can be exploited' }
    ],
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Network Security protects data in transit, Incident Response handles incidents, Ethical Hacking finds weaknesses.'
  },

  // ===== أسئلة 72-76: Matching - Data types and identities =====

  {
    questionText: 'Match each data/identity type with its correct description.',
    questionType: 'matching',
    options: [],
    correctAnswer: '',
    matchingPairs: [
      { left: 'Transactional data', right: 'Information about buying and selling' },
      { left: 'Intellectual property', right: 'Patents and trademarks' },
      { left: 'Financial data', right: 'Income statements and balance sheets' },
      { left: 'Offline identity', right: 'Name, age, and address known by family and friends' },
      { left: 'Online identity', right: 'Username or nickname used on websites' }
    ],
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'These match organizational data types and personal identity types with their definitions.'
  },

  // ===== أسئلة 77-80: Matching - Hacker types =====

  {
    questionText: 'Match each hacker type with its correct description.',
    questionType: 'matching',
    options: [],
    correctAnswer: '',
    matchingPairs: [
      { left: 'Script Kiddies', right: 'Unskilled hackers who use tools made by others' },
      { left: 'Hacktivists', right: 'Promote political or social causes by attacking websites' },
      { left: 'Gray Hats', right: 'Act both defensively and offensively at times' },
      { left: 'Black Hats', right: 'Use their computing knowledge for illegal purposes' }
    ],
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Script Kiddies use others tools, Hacktivists attack for causes, Gray Hats are mixed, Black Hats are malicious.'
  },

  // ===== أسئلة 81-84: Matching - VTY, SSH, Telnet, TCP port 22 =====

  {
    questionText: 'Match each remote access term with its correct description.',
    questionType: 'matching',
    options: [],
    correctAnswer: '',
    matchingPairs: [
      { left: 'VTY lines', right: 'Allow remote access to network devices' },
      { left: 'SSH', right: 'Encrypted alternative to Telnet' },
      { left: 'Telnet', right: 'Unencrypted protocol for remote device access' },
      { left: 'TCP port 22', right: 'Port number used by SSH' }
    ],
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'VTY lines allow remote access, SSH is encrypted, Telnet is unencrypted, SSH uses TCP port 22.'
  },

  // ===== أسئلة 85-87: Matching - SSH configuration steps =====

  {
    questionText: 'Match each SSH configuration step with its correct description.',
    questionType: 'matching',
    options: [],
    correctAnswer: '',
    matchingPairs: [
      { left: 'crypto key generate rsa', right: 'Generates the RSA keys' },
      { left: 'ip domain-name weschools.com', right: 'Configures the domain name for RSA key generation' },
      { left: 'transport input ssh', right: 'Sets up encrypted authentication for SSH' }
    ],
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'These are the key steps for SSH configuration on Cisco devices.'
  },

  // ===== أسئلة 88-90: Matching - Tools =====

  {
    questionText: 'Match each information gathering tool with its main function.',
    questionType: 'matching',
    options: [],
    correctAnswer: '',
    matchingPairs: [
      { left: 'Nmap', right: 'Scans open ports and services on a target' },
      { left: 'DNSRecon', right: 'Gathers DNS information for a domain' },
      { left: 'Whois', right: 'Provides ownership details of a domain' }
    ],
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Nmap scans ports, DNSRecon gathers DNS info, Whois provides domain ownership details.'
  },

  // ===== أسئلة 91-100: Complete Sentence → MC =====

  {
    questionText: 'A malware type that tracks your online activity and steals personal info by hiding in legitimate software is called:',
    questionType: 'multiple_choice',
    options: ['Worm', 'Spyware', 'Adware', 'Trojan Horse'],
    correctAnswer: 'Spyware',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Spyware tracks online activity and steals personal information by hiding in legitimate software.'
  },

  {
    questionText: 'A malware type that automatically shows ads, often bundled with spyware, is called:',
    questionType: 'multiple_choice',
    options: ['Ransomware', 'Worm', 'Adware', 'Rootkit'],
    correctAnswer: 'Adware',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Adware automatically shows ads and is often bundled with spyware.'
  },

  {
    questionText: 'A malware that spreads on its own quickly, infecting networks and causing damage is called:',
    questionType: 'multiple_choice',
    options: ['Virus', 'Trojan Horse', 'Worm', 'Spyware'],
    correctAnswer: 'Worm',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'A worm spreads on its own quickly, infecting networks and causing damage.'
  },

  {
    questionText: 'Hackers who promote political or social causes by attacking websites are called:',
    questionType: 'multiple_choice',
    options: ['Script Kiddies', 'Hacktivists', 'Black Hats', 'Gray Hats'],
    correctAnswer: 'Hacktivists',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Hacktivists promote political or social causes by attacking websites.'
  },

  {
    questionText: 'The command to configure the console port to require a password is:',
    questionType: 'multiple_choice',
    options: ['password', 'login', 'enable secret', 'line console 0'],
    correctAnswer: 'login',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The "login" command configures the console port to require a password.'
  },

  {
    questionText: 'A NAT-enabled router connects two parts of a network. The ___ interface is connected to the private network, and the ___ interface connects to the public network.',
    questionType: 'multiple_choice',
    options: ['Outside, Inside', 'Inside, Outside', 'Local, Global', 'Global, Local'],
    correctAnswer: 'Inside, Outside',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The Inside interface connects to the private network and the Outside interface connects to the public network.'
  },

  {
    questionText: 'The protocol that ensures data packets come from a trusted source and have not been tampered with is:',
    questionType: 'multiple_choice',
    options: ['ESP', 'Authentication Header (AH)', 'SSL', 'GRE'],
    correctAnswer: 'Authentication Header (AH)',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Authentication Header (AH) ensures packets come from a trusted source and have not been tampered with.'
  },

  {
    questionText: 'The command to disconnect inactive sessions after 5 minutes in a Telnet session is:',
    questionType: 'multiple_choice',
    options: ['timeout 5', 'exec-timeout 5 0', 'session-timeout 300', 'idle-timeout 5'],
    correctAnswer: 'exec-timeout 5 0',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The command "exec-timeout 5 0" disconnects inactive sessions after 5 minutes and 0 seconds.'
  },

  {
    questionText: 'The Internet of Things (IoT) is a network of physical objects connected to the:',
    questionType: 'multiple_choice',
    options: ['Local network only', 'Internet', 'Private server', 'Bluetooth'],
    correctAnswer: 'Internet',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'IoT is a network of physical objects connected to the Internet.'
  },

  {
    questionText: '___________ involves finding and fixing security weaknesses before bad hackers can exploit them.',
    questionType: 'multiple_choice',
    options: ['Social Engineering', 'Ethical Hacking', 'Phishing', 'Ransomware'],
    correctAnswer: 'Ethical Hacking',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Ethical Hacking involves finding and fixing security weaknesses before they can be exploited.'
  },

  // ===== أسئلة 101-110: Answer Questions =====

  {
    questionText: 'Why is it important to set an "enable secret" password before configuring remote access through Telnet?',
    questionType: 'multiple_choice',
    options: [
      'It is not important',
      'It secures access to privileged exec mode on the device',
      'It changes the device hostname',
      'It encrypts all data on the device'
    ],
    correctAnswer: 'It secures access to privileged exec mode on the device',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'The enable secret password secures access to privileged exec mode on the device.'
  },

  {
    questionText: 'Why is it important to be careful about sharing personal information online?',
    questionType: 'multiple_choice',
    options: [
      'It has no impact on security',
      'Sharing too much personal information can expose you to identity theft, privacy invasion, and unauthorized use of data',
      'Social media is always safe',
      'Only email addresses are risky to share'
    ],
    correctAnswer: 'Sharing too much personal information can expose you to identity theft, privacy invasion, and unauthorized use of data',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Sharing too much personal information online can expose you to identity theft, privacy invasion, and unauthorized use of your data.'
  },

  {
    questionText: 'What is the Internet of Things (IoT)?',
    questionType: 'multiple_choice',
    options: [
      'A new type of internet browser',
      'A network of physical devices such as sensors, machines, and smart devices connected to the internet',
      'A cloud storage service',
      'A programming language'
    ],
    correctAnswer: 'A network of physical devices such as sensors, machines, and smart devices connected to the internet',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'IoT is a network of physical devices such as sensors, machines, and smart devices connected to the internet.'
  },

  {
    questionText: 'What is the role of Fencing and Physical Barriers in security?',
    questionType: 'multiple_choice',
    options: [
      'They encrypt network traffic',
      'They prevent unauthorized people from reaching sensitive areas where network devices like servers and routers are located',
      'They filter spam emails',
      'They monitor user activity online'
    ],
    correctAnswer: 'They prevent unauthorized people from reaching sensitive areas where network devices like servers and routers are located',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Fencing and physical barriers prevent unauthorized people from reaching sensitive areas.'
  },

  {
    questionText: 'What are popular vulnerability scanners?',
    questionType: 'multiple_choice',
    options: ['Wireshark and Nmap', 'OpenVAS and Nessus', 'Telnet and SSH', 'DNS and DHCP'],
    correctAnswer: 'OpenVAS and Nessus',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'OpenVAS and Nessus are popular vulnerability scanners.'
  },

  {
    questionText: 'What is a vulnerability in network security?',
    questionType: 'multiple_choice',
    options: [
      'A type of antivirus software',
      'A weakness in a network, system, or organization that can be exploited by attackers',
      'A strong password policy',
      'A firewall rule'
    ],
    correctAnswer: 'A weakness in a network, system, or organization that can be exploited by attackers',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'A vulnerability is a weakness that can be exploited by attackers.'
  },

  {
    questionText: 'What is Wireshark, and what is its role in network security?',
    questionType: 'multiple_choice',
    options: [
      'A firewall that blocks attacks',
      'A network analysis tool used to capture and examine data traveling across a network',
      'An antivirus program',
      'A VPN client'
    ],
    correctAnswer: 'A network analysis tool used to capture and examine data traveling across a network',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Wireshark is a network analysis tool used to capture and examine data traveling across a network.'
  },

  {
    questionText: 'What are two legitimate uses of network sniffing?',
    questionType: 'multiple_choice',
    options: [
      'Stealing passwords and spying on users',
      'Troubleshooting and educational purposes',
      'Installing malware and creating backdoors',
      'Hacking and unauthorized access'
    ],
    correctAnswer: 'Troubleshooting and educational purposes',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Legitimate uses of network sniffing include troubleshooting and educational purposes.'
  },

  // ===== أسئلة 111-120: True/False =====

  {
    questionText: 'Ethical hackers are also known as White Hat hackers.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Ethical hackers are also known as White Hat hackers.'
  },

  {
    questionText: 'An ethical hacker does not need to be aware of local laws and standards.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Ethical hackers must be aware of and comply with local laws and standards.'
  },

  {
    questionText: 'The "ip dhcp snooping vlan vlan-list" command is used to enable DHCP Snooping on the switch globally.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'This command enables DHCP Snooping on specific VLANs, not globally. Global enabling uses "ip dhcp snooping".'
  },

  {
    questionText: 'Direct checks by a scanner are more reliable than connecting to a port from far away.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Direct (local) checks by a scanner are more accurate and reliable than remote scanning.'
  },

  {
    questionText: 'Static NAT configuration requires the use of access control lists (ACLs).',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Static NAT does not require ACLs. Dynamic NAT and PAT use ACLs.'
  },

  {
    questionText: 'Active attacks do not interact with the system and only involve observing data.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'Active attacks DO interact with the system. Passive attacks only observe data.'
  },

  {
    questionText: 'Trojan Horse pretends to be a legitimate software but lets in harmful malware.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'easy',
    explanation: 'A Trojan Horse pretends to be legitimate software but actually contains harmful malware.'
  },

  {
    questionText: 'Geolocation tools in OSINT can help track phone numbers, public records, or geolocation tags.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'OSINT geolocation tools can track phone numbers, public records, and geolocation tags.'
  },

  {
    questionText: 'In IPsec Transport Mode, a new IP header is added to the packet being encrypted.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'In Transport Mode, the original IP header is kept. In Tunnel Mode, a new IP header is added.'
  },

  {
    questionText: 'In IPsec, Tunnel Mode can be likened to an added layer of security compared to Transport Mode.',
    questionType: 'true_false',
    options: ['True', 'False'],
    correctAnswer: 'True',
    department: 'networks',
    topic: 'Unit 17: Introduction to Cybersecurity',
    difficulty: 'medium',
    explanation: 'Tunnel Mode adds a new IP header providing an additional layer of security compared to Transport Mode.'
  },

  // ===== Unit 18: Advanced Cybersecurity -1 =====
// ===== TPK21: Basic IT Security (أسئلة 121-128) =====

{
  questionText: 'What is the CIA Triad? Explain each element.',
  questionType: 'multiple_choice',
  options: [
    'Computing, Internet, Application',
    'Confidentiality ensures information is accessed only by authorized individuals; Integrity guarantees data remains accurate; Availability ensures information is available when needed',
    'Control, Identification, Access',
    'Cybersecurity, Information, Authentication'
  ],
  correctAnswer: 'Confidentiality ensures information is accessed only by authorized individuals; Integrity guarantees data remains accurate; Availability ensures information is available when needed',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The CIA Triad: Confidentiality (authorized access only), Integrity (data accuracy), Availability (accessible when needed).'
},

{
  questionText: 'Why is Organizational data essential for companies?',
  questionType: 'multiple_choice',
  options: [
    'It is not important',
    'It helps organizations make decisions, plan strategies, and improve performance',
    'It only serves as backup',
    'It is used only for compliance'
  ],
  correctAnswer: 'It helps organizations make decisions, plan strategies, and improve performance',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Organizational data helps make decisions, plan strategies, and improve performance.'
},

{
  questionText: 'How does a firewall control network traffic?',
  questionType: 'multiple_choice',
  options: [
    'By encrypting all data',
    'All traffic must pass through the firewall which follows a set of rules known as an access control policy',
    'By blocking all traffic by default',
    'By increasing bandwidth'
  ],
  correctAnswer: 'All traffic must pass through the firewall which follows a set of rules known as an access control policy',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'All traffic must pass through the firewall. The firewall follows access control policy rules.'
},

{
  questionText: 'What is a packet filtering (stateless) firewall?',
  questionType: 'multiple_choice',
  options: [
    'A firewall that tracks active connections using a state table',
    'A firewall that controls traffic by examining individual packets using Layers 3 and 4 information and does not remember previous connections',
    'A firewall that only works with encrypted traffic',
    'A firewall that inspects application layer data'
  ],
  correctAnswer: 'A firewall that controls traffic by examining individual packets using Layers 3 and 4 information and does not remember previous connections',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A stateless firewall examines packets using IP addresses and port numbers (Layers 3 and 4) without remembering previous connections.'
},

{
  questionText: 'What is port scanning?',
  questionType: 'multiple_choice',
  options: [
    'A technique to encrypt ports',
    'A technique used to check which specific services are active on a network device',
    'A method to increase port speed',
    'A way to close all ports'
  ],
  correctAnswer: 'A technique used to check which specific services are active on a network device',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Port scanning checks which specific services are active on a network device.'
},

{
  questionText: 'What do the different responses in a SYN scan indicate?',
  questionType: 'multiple_choice',
  options: [
    'SYN/ACK means closed; RST means open; No response means active',
    'SYN/ACK means the port is open; RST means the port is closed; No response means the port is filtered',
    'All responses mean the port is open',
    'SYN/ACK means filtered; RST means open; No response means closed'
  ],
  correctAnswer: 'SYN/ACK means the port is open; RST means the port is closed; No response means the port is filtered',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'SYN/ACK = open, RST = closed, No response = filtered/unclear.'
},

{
  questionText: 'What is a Virtual Private Network (VPN)?',
  questionType: 'multiple_choice',
  options: [
    'A physical network cable',
    'A way to secure communication between devices over a public network like the internet using encryption and authentication',
    'A type of antivirus software',
    'A local area network'
  ],
  correctAnswer: 'A way to secure communication between devices over a public network like the internet using encryption and authentication',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'A VPN secures communication over a public network using encryption and authentication.'
},

{
  questionText: 'What are the three most famous types of VPN?',
  questionType: 'multiple_choice',
  options: [
    'Site-to-Site VPN, Client-to-Site VPN, and Commercial VPN',
    'SSL VPN, IPsec VPN, and GRE VPN',
    'Public VPN, Private VPN, and Hybrid VPN',
    'Layer 2 VPN, Layer 3 VPN, and Layer 4 VPN'
  ],
  correctAnswer: 'Site-to-Site VPN, Client-to-Site VPN, and Commercial VPN',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The three most famous types are Site-to-Site, Client-to-Site, and Commercial VPN.'
},

// ===== أسئلة 129-138: True/False =====

{
  questionText: 'A firewall can only block traffic based on its source and destination addresses.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Firewalls can block traffic based on many criteria including ports, protocols, applications, and more.'
},

{
  questionText: 'Virtual Private Networks (VPNs) can only be used by employees in the office.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'VPNs can be used from anywhere, including remote locations.'
},

{
  questionText: 'A UPS is primarily used to protect network devices from unauthorized access.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'A UPS protects devices from power failures and spikes, not unauthorized access.'
},

{
  questionText: 'Cryptography only protects websites but not personal data.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Cryptography protects all types of data, not just websites.'
},

{
  questionText: 'Modern encryption is very difficult to break.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Modern encryption algorithms use complex mathematics that makes them very difficult to break.'
},

{
  questionText: 'In symmetric encryption, different keys are used for encryption and decryption.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Symmetric encryption uses the SAME key for both encryption and decryption.'
},

{
  questionText: 'A message digest function is also known as a one-way hash function.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A message digest function is also known as a one-way hash function because it cannot be reversed.'
},

{
  questionText: 'SHA-1 is still considered safe for new security applications today.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'SHA-1 is no longer considered safe due to known vulnerabilities.'
},

{
  questionText: 'IPsec, SSL, GRE, PPTP, and L2TP are common VPN protocols.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'These are all common VPN protocols used for secure communication.'
},

{
  questionText: 'GRE tunnels can encapsulate multicast packets to allow OSPF routing over IPsec.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'GRE tunnels can encapsulate multicast packets, allowing OSPF routing over IPsec.'
},

// ===== أسئلة 139-148: Complete Sentence → MC =====

{
  questionText: 'In cryptography, the original readable text is called ________, and the secret code is called ________.',
  questionType: 'multiple_choice',
  options: ['ciphertext, plaintext', 'plaintext, ciphertext', 'key, hash', 'digest, cipher'],
  correctAnswer: 'plaintext, ciphertext',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'The original readable text is plaintext and the encrypted code is ciphertext.'
},

{
  questionText: 'In asymmetric encryption, the ______ key is shared with everyone, while the ______ key is kept secret.',
  questionType: 'multiple_choice',
  options: ['private, public', 'public, private', 'session, master', 'encryption, decryption'],
  correctAnswer: 'public, private',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'In asymmetric encryption, the public key is shared and the private key is kept secret.'
},

{
  questionText: 'AES uses key sizes of 128, 192, or ______ bits, making it more secure than DES.',
  questionType: 'multiple_choice',
  options: ['64', '128', '256', '512'],
  correctAnswer: '256',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'AES supports key sizes of 128, 192, or 256 bits.'
},

{
  questionText: 'Message digests are used to ensure ________, create digital signatures, and help with message authentication.',
  questionType: 'multiple_choice',
  options: ['confidentiality', 'availability', 'integrity', 'scalability'],
  correctAnswer: 'integrity',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Message digests ensure integrity by verifying data has not been modified.'
},

{
  questionText: 'A critical benefit of using biometric security is that it reduces the risk of __________ by ensuring that only authorized personnel can access secure areas.',
  questionType: 'multiple_choice',
  options: ['power failure', 'unauthorized access', 'data corruption', 'network latency'],
  correctAnswer: 'unauthorized access',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Biometric security reduces the risk of unauthorized access.'
},

{
  questionText: 'Alarms can be set up to alert security teams via __________ or trigger loud sounds when a breach occurs.',
  questionType: 'multiple_choice',
  options: ['social media', 'email alerts', 'text messages only', 'phone calls only'],
  correctAnswer: 'email alerts',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Alarms can alert security teams via email alerts or trigger loud sounds.'
},

{
  questionText: 'To manage a Layer 2 switch remotely, you must assign it an IP address through a __________.',
  questionType: 'multiple_choice',
  options: ['Physical interface', 'Switch Virtual Interface (SVI)', 'Console port', 'USB port'],
  correctAnswer: 'Switch Virtual Interface (SVI)',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A Layer 2 switch needs an IP address assigned through an SVI for remote management.'
},

{
  questionText: 'In an Nmap SYN scan, if the response is a SYN/ACK, it means the port is __________.',
  questionType: 'multiple_choice',
  options: ['Closed', 'Open', 'Filtered', 'Blocked'],
  correctAnswer: 'Open',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A SYN/ACK response in a SYN scan means the port is open.'
},

{
  questionText: 'UDP scans are commonly used to check services such as __________, __________, or __________.',
  questionType: 'multiple_choice',
  options: ['HTTP, FTP, SSH', 'DNS, SNMP, DHCP', 'Telnet, SMTP, POP3', 'HTTPS, IMAP, LDAP'],
  correctAnswer: 'DNS, SNMP, DHCP',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'UDP scans commonly check DNS, SNMP, and DHCP services.'
},

{
  questionText: 'A separate network segment that sits between a private network and a public network is called:',
  questionType: 'multiple_choice',
  options: ['LAN', 'WAN', 'DMZ (Demilitarized Zone)', 'VPN'],
  correctAnswer: 'DMZ (Demilitarized Zone)',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A DMZ is a separate network segment between a private and public network.'
},

// ===== أسئلة 149-158: MCQ =====

{
  questionText: 'Which type of attack is most likely to involve eavesdropping on network communications without detection?',
  questionType: 'multiple_choice',
  options: ['Active Attack', 'Passive Attack', 'Insider Attack', 'External Attack'],
  correctAnswer: 'Passive Attack',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A passive attack involves eavesdropping without detection or modification of data.'
},

{
  questionText: 'Which of the following is NOT a technical skill required for an ethical hacker?',
  questionType: 'multiple_choice',
  options: [
    'Expertise in launching advanced attacks',
    'Being a computer expert in technical fields',
    'Strong work ethic and communication skills',
    'Deep understanding of networks concepts'
  ],
  correctAnswer: 'Strong work ethic and communication skills',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Strong work ethic and communication skills are soft skills, not technical skills.'
},

{
  questionText: 'What is the primary purpose of employee awareness, training, and education in information security?',
  questionType: 'multiple_choice',
  options: [
    'To reduce the cost of security tools',
    'To prevent unauthorized physical access',
    'To teach employees about security risks and how to avoid them',
    'To enforce strict punishment for security breaches'
  ],
  correctAnswer: 'To teach employees about security risks and how to avoid them',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Employee awareness teaches about security risks and how to avoid them.'
},

{
  questionText: 'What kind of system uses unique physical characteristics like fingerprints or facial recognition to secure access?',
  questionType: 'multiple_choice',
  options: ['Video surveillance', 'Power supply system', 'Biometrics', 'Alarm systems'],
  correctAnswer: 'Biometrics',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Biometrics uses unique physical characteristics like fingerprints or facial recognition.'
},

{
  questionText: 'What happens when a port is in an err-disabled state due to port security violation?',
  questionType: 'multiple_choice',
  options: [
    'It automatically recovers',
    'It must be manually shut down and enabled',
    'It generates SNMP trap messages',
    'It stops receiving but continues to send frames'
  ],
  correctAnswer: 'It must be manually shut down and enabled',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'When a port enters err-disabled state, it must be manually shut down and re-enabled.'
},

{
  questionText: 'Which tool is commonly used to find devices and check their security by scanning IP addresses and open ports?',
  questionType: 'multiple_choice',
  options: ['Wireshark', 'Nmap', 'nslookup', 'DNSRecon'],
  correctAnswer: 'Nmap',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Nmap scans IP addresses and open ports to find devices and check security.'
},

{
  questionText: 'What does a "filtered" result indicate in an Nmap port scan?',
  questionType: 'multiple_choice',
  options: [
    'The port is open and accessible',
    'The port is closed and not in use',
    'A firewall or security device is blocking the probe, preventing determination of port state',
    'The target is offline and not responding to any scans'
  ],
  correctAnswer: 'A firewall or security device is blocking the probe, preventing determination of port state',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A filtered result means a firewall is blocking the probe.'
},

{
  questionText: 'What is the primary purpose of a VPN?',
  questionType: 'multiple_choice',
  options: [
    'Speeding up internet connections',
    'Encrypting data and ensuring private communication',
    'Blocking advertisements on websites',
    'Compressing files for faster downloads'
  ],
  correctAnswer: 'Encrypting data and ensuring private communication',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'The primary purpose of a VPN is encrypting data and ensuring private communication.'
},

{
  questionText: 'Which of the following steps is necessary for configuring IKE Phase 1 in IPsec VPN?',
  questionType: 'multiple_choice',
  options: [
    'Setting the IP addresses of the remote routers',
    'Configuring the ISAKMP policy',
    'Applying the crypto map to the router interface',
    'Defining the interesting traffic'
  ],
  correctAnswer: 'Configuring the ISAKMP policy',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Configuring the ISAKMP policy is necessary for IKE Phase 1.'
},

{
  questionText: 'How does a VPN protect your data from your ISP and potential hackers?',
  questionType: 'multiple_choice',
  options: [
    'By deleting browser history',
    'By using a proxy server',
    'By encrypting data in the tunnel',
    'By increasing Internet speed'
  ],
  correctAnswer: 'By encrypting data in the tunnel',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'A VPN protects data by encrypting it within the VPN tunnel.'
},

// ===== أسئلة 159-168: Answer Questions =====

{
  questionText: 'What are the traditional organizational data types?',
  questionType: 'multiple_choice',
  options: [
    'Text data, Image data, Video data',
    'Transactional data, Intellectual data, Financial data',
    'Public data, Private data, Secret data',
    'Raw data, Processed data, Clean data'
  ],
  correctAnswer: 'Transactional data, Intellectual data, Financial data',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Traditional organizational data types are Transactional, Intellectual, and Financial data.'
},

{
  questionText: 'In an enterprise, what is the first question you should ask yourself to make the right decision?',
  questionType: 'multiple_choice',
  options: ['Is it profitable?', 'Is it legal?', 'Is it fast?', 'Is it popular?'],
  correctAnswer: 'Is it legal?',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'The first question to ask is "Is it legal?" when making enterprise decisions.'
},

{
  questionText: 'What is a stateful firewall?',
  questionType: 'multiple_choice',
  options: [
    'A firewall that blocks all traffic',
    'A firewall that tracks the state of active connections using a state table and operates at Layers 4 and 5 of the OSI model',
    'A firewall that only examines IP headers',
    'A firewall that encrypts all data'
  ],
  correctAnswer: 'A firewall that tracks the state of active connections using a state table and operates at Layers 4 and 5 of the OSI model',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A stateful firewall tracks active connections using a state table at Layers 4 and 5.'
},

{
  questionText: 'What are the key features of a Next-Generation Firewall (NGFW)?',
  questionType: 'multiple_choice',
  options: [
    'Basic packet filtering only',
    'Traditional firewall functions, Application Visibility and Control (AVC), Advanced Malware Protection (AMP), and URL filtering',
    'Only URL filtering',
    'Only intrusion detection'
  ],
  correctAnswer: 'Traditional firewall functions, Application Visibility and Control (AVC), Advanced Malware Protection (AMP), and URL filtering',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'NGFWs support traditional firewall functions, AVC, AMP, and URL filtering.'
},

{
  questionText: 'What is port security?',
  questionType: 'multiple_choice',
  options: [
    'A feature that speeds up switch ports',
    'A feature on Cisco switches that controls which devices can connect to a switch port by using MAC addresses',
    'A firewall feature',
    'A DHCP configuration option'
  ],
  correctAnswer: 'A feature on Cisco switches that controls which devices can connect to a switch port by using MAC addresses',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Port security controls which devices can connect to a switch port by using MAC addresses.'
},

{
  questionText: 'What is DHCP (Dynamic Host Configuration Protocol)?',
  questionType: 'multiple_choice',
  options: [
    'A routing protocol',
    'A network service that automatically assigns IP addresses and other network settings to devices',
    'An encryption standard',
    'A VPN protocol'
  ],
  correctAnswer: 'A network service that automatically assigns IP addresses and other network settings to devices',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'DHCP automatically assigns IP addresses and other network settings to devices.'
},

{
  questionText: 'What are three common Nmap scan types?',
  questionType: 'multiple_choice',
  options: [
    'TCP Connect Scan (-sT), UDP Scan (-sU), Host Discovery Scan (-sn)',
    'ARP Scan, DNS Scan, HTTP Scan',
    'Full Scan, Partial Scan, Stealth Scan',
    'Layer 2 Scan, Layer 3 Scan, Layer 4 Scan'
  ],
  correctAnswer: 'TCP Connect Scan (-sT), UDP Scan (-sU), Host Discovery Scan (-sn)',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Common Nmap scan types include TCP Connect, UDP, and Host Discovery scans.'
},

{
  questionText: 'What is a Host Discovery Scan (-sn), and why is it used?',
  questionType: 'multiple_choice',
  options: [
    'A scan that checks for open ports on all devices',
    'A scan used to identify which devices are active on a network without doing a full port scan',
    'A scan that exploits vulnerabilities',
    'A scan that captures network traffic'
  ],
  correctAnswer: 'A scan used to identify which devices are active on a network without doing a full port scan',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A Host Discovery Scan identifies active devices on a network without a full port scan.'
},

{
  questionText: 'What is a client-to-Site VPN?',
  questionType: 'multiple_choice',
  options: [
    'A VPN that connects two office networks',
    'A remote access VPN that allows individual devices to connect to a company\'s private network from anywhere',
    'A commercial VPN for browsing',
    'A VPN that only works on local networks'
  ],
  correctAnswer: 'A remote access VPN that allows individual devices to connect to a company\'s private network from anywhere',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Client-to-Site VPN allows individual devices to connect to a company\'s private network from anywhere.'
},

{
  questionText: 'What is the role of GRE (Generic Routing Encapsulation)?',
  questionType: 'multiple_choice',
  options: [
    'It encrypts data end-to-end',
    'It encapsulates data to allow different types of traffic like multicast to travel between networks',
    'It replaces IPsec completely',
    'It manages DNS records'
  ],
  correctAnswer: 'It encapsulates data to allow different types of traffic like multicast to travel between networks',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'GRE encapsulates data to allow different traffic types (like multicast) to travel between networks.'
},

// ===== أسئلة 169-174: Matching - Encryption terms =====

{
  questionText: 'Match each cryptography term with its correct description.',
  questionType: 'matching',
  options: [],
  correctAnswer: '',
  matchingPairs: [
    { left: 'Encryption', right: 'The method used to hide information' },
    { left: 'Plaintext', right: 'Readable text before it is changed' },
    { left: 'Ciphertext', right: 'A secret code message' },
    { left: 'Key', right: 'A special code used to unlock the hidden message' },
    { left: 'Symmetric Encryption', right: 'Uses the same key for both encryption and decryption' },
    { left: 'Asymmetric Encryption', right: 'Uses two keys: one public and one private' }
  ],
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'These are fundamental cryptography terms and their definitions.'
},

// ===== أسئلة 175-180: Matching - Security measures =====

{
  questionText: 'Match each security measure with its correct description.',
  questionType: 'matching',
  options: [],
  correctAnswer: '',
  matchingPairs: [
    { left: 'Biometrics', right: 'Uses unique physical traits to control access' },
    { left: 'Fencing', right: 'Acts as a physical barrier to prevent unauthorized access' },
    { left: 'UPS', right: 'Protects network devices from power spikes or failures' },
    { left: 'Video Surveillance', right: 'Monitors network equipment areas for suspicious activity' },
    { left: 'login local', right: 'Requires a username and password for console access' },
    { left: 'service password-encryption', right: 'Encrypts all passwords on the device' }
  ],
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'These match physical and logical security measures with their descriptions.'
},

// ===== TPK19: Properties, structures, and components (أسئلة 181-188) =====

{
  questionText: 'How does port security work?',
  questionType: 'multiple_choice',
  options: [
    'It blocks all traffic on the port',
    'It is configured on individual switch ports and allows only specific MAC addresses. Unauthorized MAC addresses trigger a violation action',
    'It encrypts all data on the port',
    'It increases port speed'
  ],
  correctAnswer: 'It is configured on individual switch ports and allows only specific MAC addresses. Unauthorized MAC addresses trigger a violation action',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Port security allows only specific MAC addresses on a port. Unauthorized MACs trigger violation actions.'
},

{
  questionText: 'What are the three port security violation modes and their behavior?',
  questionType: 'multiple_choice',
  options: [
    'Allow, Deny, Forward',
    'Protect: drops traffic silently; Restrict: drops traffic and logs; Shutdown: disables the port (err-disabled)',
    'Open, Closed, Filtered',
    'Accept, Reject, Drop'
  ],
  correctAnswer: 'Protect: drops traffic silently; Restrict: drops traffic and logs; Shutdown: disables the port (err-disabled)',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Protect drops silently, Restrict drops and logs, Shutdown disables the port.'
},

{
  questionText: 'What is a DHCP starvation attack?',
  questionType: 'multiple_choice',
  options: [
    'An attack that blocks DNS requests',
    'An attack where an attacker sends a large number of fake DHCP Discover messages using different fake MAC addresses',
    'An attack that encrypts DHCP servers',
    'An attack that modifies DHCP lease times'
  ],
  correctAnswer: 'An attack where an attacker sends a large number of fake DHCP Discover messages using different fake MAC addresses',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'DHCP starvation sends many fake DHCP Discover messages using different fake MAC addresses.'
},

{
  questionText: 'How can people be a source of vulnerabilities?',
  questionType: 'multiple_choice',
  options: [
    'People cannot be vulnerabilities',
    'Attackers exploit human behavior, trust, or lack of awareness to obtain sensitive information like passwords or access details',
    'Only IT staff can be vulnerable',
    'People are always the strongest security link'
  ],
  correctAnswer: 'Attackers exploit human behavior, trust, or lack of awareness to obtain sensitive information like passwords or access details',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Attackers exploit human behavior, trust, or lack of awareness to obtain sensitive information.'
},

{
  questionText: 'How can false positive results affect security operations?',
  questionType: 'multiple_choice',
  options: [
    'They have no impact',
    'False positive results waste time because security teams investigate issues that do not actually exist',
    'They improve security',
    'They speed up scanning'
  ],
  correctAnswer: 'False positive results waste time because security teams investigate issues that do not actually exist',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'False positives waste time as security teams investigate non-existent issues.'
},

{
  questionText: 'How can organizations reduce the number of false positives in vulnerability scans?',
  questionType: 'multiple_choice',
  options: [
    'By using only one scanning tool',
    'Using multiple tools and expert reviews helps improve accuracy',
    'By scanning less frequently',
    'By ignoring all results'
  ],
  correctAnswer: 'Using multiple tools and expert reviews helps improve accuracy',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Using multiple tools and expert reviews improves accuracy and reduces false positives.'
},

{
  questionText: 'What does an IPsec "transform-set" define?',
  questionType: 'multiple_choice',
  options: [
    'The IP addresses of VPN endpoints',
    'How data will be encrypted and authenticated during transmission',
    'The routing protocol to use',
    'The bandwidth allocation'
  ],
  correctAnswer: 'How data will be encrypted and authenticated during transmission',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A transform-set determines how data will be encrypted and authenticated during transmission.'
},

{
  questionText: 'What is the purpose of using ACLs when defining interesting traffic for IPsec VPN?',
  questionType: 'multiple_choice',
  options: [
    'To speed up traffic',
    'ACLs define which traffic between internal subnets should be encrypted and secured using the IPsec tunnel',
    'To block all traffic',
    'To assign IP addresses'
  ],
  correctAnswer: 'ACLs define which traffic between internal subnets should be encrypted and secured using the IPsec tunnel',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'ACLs define which traffic should be encrypted and secured using the IPsec tunnel.'
},

// ===== أسئلة 189-198: MCQ =====

{
  questionText: 'Which command provides the most insight into how port security operates on an interface?',
  questionType: 'multiple_choice',
  options: ['show running-config', 'show interface status', 'show port-security interface', 'show security-violations'],
  correctAnswer: 'show port-security interface',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The "show port-security interface" command provides detailed port security information.'
},

{
  questionText: 'How does the "protect" mode handle violation counters?',
  questionType: 'multiple_choice',
  options: [
    'It does not count violating frames',
    'It counts and discards violating frames',
    'It generates SNMP trap messages for each violation',
    'It generates syslog messages for each violation'
  ],
  correctAnswer: 'It does not count violating frames',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Protect mode drops unauthorized traffic silently without counting violations.'
},

{
  questionText: 'What is the primary use of the Netmiko library?',
  questionType: 'multiple_choice',
  options: [
    'Automating VLAN configurations',
    'Handling secure SSH connections',
    'Monitoring device performance',
    'Enabling SNMP communications'
  ],
  correctAnswer: 'Handling secure SSH connections',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Netmiko is a Python library for handling secure SSH connections for automation.'
},

{
  questionText: 'What does a True Positive result in a vulnerability scan mean?',
  questionType: 'multiple_choice',
  options: [
    'The scan finds a problem that does not exist',
    'The scan misses a problem',
    'The scan finds a problem, and the problem exists',
    'The scan finds no problem, and there is no problem'
  ],
  correctAnswer: 'The scan finds a problem, and the problem exists',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A True Positive means the scan correctly identified a real vulnerability.'
},

{
  questionText: 'Why is it important to prioritize vulnerabilities in a report?',
  questionType: 'multiple_choice',
  options: [
    'It helps decide which weaknesses to fix first',
    'It makes the report look organized',
    'It reduces the workload',
    'It improves the appearance of the report'
  ],
  correctAnswer: 'It helps decide which weaknesses to fix first',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Prioritizing vulnerabilities helps decide which weaknesses to fix first.'
},

{
  questionText: 'Which address type refers to the address of the source as seen from inside the network?',
  questionType: 'multiple_choice',
  options: ['Inside global address', 'Outside local address', 'Inside local address', 'Outside global address'],
  correctAnswer: 'Inside local address',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Inside local address is the source address as seen from inside the network.'
},

{
  questionText: 'Which of the following is NOT a feature of Next-Generation Firewalls (NGFW)?',
  questionType: 'multiple_choice',
  options: [
    'Application visibility and control',
    'URL filtering',
    'Stateful connection tracking',
    'Storing URLs for future inspection'
  ],
  correctAnswer: 'Storing URLs for future inspection',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Storing URLs for future inspection is not a standard NGFW feature.'
},

{
  questionText: 'What is the purpose of the Common Weakness Enumeration (CWE) list?',
  questionType: 'multiple_choice',
  options: [
    'To track system versions',
    'To provide explanations for common software weaknesses',
    'To measure vulnerability scores',
    'To offer system updates'
  ],
  correctAnswer: 'To provide explanations for common software weaknesses',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'CWE provides explanations for common software weaknesses.'
},

// ===== أسئلة 199-208: Complete Sentence → MC =====

{
  questionText: 'A firewall follows a set of rules called an ______________ that decides who can use or access network resources.',
  questionType: 'multiple_choice',
  options: ['Routing table', 'Access Control Policy (ACL)', 'MAC table', 'ARP table'],
  correctAnswer: 'Access Control Policy (ACL)',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A firewall follows access control policy rules to decide who can access resources.'
},

{
  questionText: 'Firewalls are designed to be strong against attacks from the ____________ or other networks.',
  questionType: 'multiple_choice',
  options: ['LAN', 'Internet', 'console', 'management plane'],
  correctAnswer: 'Internet',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Firewalls protect against attacks from the Internet and other external networks.'
},

{
  questionText: 'A __________ firewall tracks the status of a connection and works at Layers 4 and 5 of the OSI model.',
  questionType: 'multiple_choice',
  options: ['Stateless', 'Stateful', 'Packet filtering', 'Application'],
  correctAnswer: 'Stateful',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A stateful firewall tracks connection states at Layers 4 and 5.'
},

{
  questionText: 'In a vulnerability scan, the scanner compares software it found to a list of known __________ to identify possible risks.',
  questionType: 'multiple_choice',
  options: ['updates', 'patches', 'vulnerabilities', 'configurations'],
  correctAnswer: 'vulnerabilities',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'The scanner compares found software to a list of known vulnerabilities.'
},

{
  questionText: 'The __________ vulnerability scan method checks network traffic without directly interacting with the target system.',
  questionType: 'multiple_choice',
  options: ['active', 'passive', 'authenticated', 'intrusive'],
  correctAnswer: 'passive',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Passive vulnerability scanning checks network traffic without direct interaction.'
},

{
  questionText: 'The best result in a vulnerability scan is a __________ because it means everything is safe.',
  questionType: 'multiple_choice',
  options: ['True Positive', 'False Positive', 'True Negative', 'False Negative'],
  correctAnswer: 'True Negative',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'A True Negative correctly identifies that no vulnerability exists.'
},

{
  questionText: 'The best way to confirm if a vulnerability is real is to try to __________ it yourself.',
  questionType: 'multiple_choice',
  options: ['ignore', 'report', 'exploit', 'delete'],
  correctAnswer: 'exploit',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The best way to confirm a vulnerability is real is to try to exploit it in a controlled manner.'
},

{
  questionText: 'When prioritizing vulnerabilities, you should start with the most __________ issues, especially those that affect critical systems.',
  questionType: 'multiple_choice',
  options: ['common', 'severe or critical', 'recent', 'simple'],
  correctAnswer: 'severe or critical',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Start with the most severe or critical issues when prioritizing.'
},

{
  questionText: 'In the configuration of a GRE tunnel, the ____ command specifies that the GRE tunnel operates using the IP protocol.',
  questionType: 'multiple_choice',
  options: ['tunnel mode ipsec', 'tunnel mode gre ip', 'tunnel encapsulation gre', 'interface tunnel gre'],
  correctAnswer: 'tunnel mode gre ip',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The "tunnel mode gre ip" command specifies GRE tunnel using IP protocol.'
},

{
  questionText: 'The ____ feature of IPsec ensures that the traffic between two routers is encrypted and protected during transmission.',
  questionType: 'multiple_choice',
  options: ['Authentication', 'Encryption', 'Routing', 'NAT'],
  correctAnswer: 'Encryption',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Encryption in IPsec ensures traffic between routers is encrypted and protected.'
},

// ===== أسئلة 209-214: Matching - Firewall types and network zones =====

{
  questionText: 'Match each firewall type or network zone with its correct description.',
  questionType: 'matching',
  options: [],
  correctAnswer: '',
  matchingPairs: [
    { left: 'Packet Filtering (Stateless)', right: 'Filters traffic based on Layers 3 and 4' },
    { left: 'Stateful Firewall', right: 'Tracks the status of connections' },
    { left: 'Next-Generation Firewall (NGFW)', right: 'Advanced features like AVC and AMP' },
    { left: 'Private Network', right: 'The trusted network inside a company or home' },
    { left: 'Public Network', right: 'The untrusted outside world, like the internet' },
    { left: 'DMZ', right: 'A part of the network that is less secure than the private network' }
  ],
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Stateless filters packets, Stateful tracks connections, NGFW has advanced features, Private is trusted, Public is untrusted, DMZ is between them.'
},

// ===== سؤال 215: Matching - Dynamic NAT steps =====

{
  questionText: 'Match the steps involved when an internal host (192.168.10.10) sends a packet to an external server (209.165.200.254) across a router running dynamic NAT.',
  questionType: 'matching',
  options: [],
  correctAnswer: '',
  matchingPairs: [
    { left: 'Step 1', right: 'The host sends packets requesting a connection to the server at 209.165.200.254' },
    { left: 'Step 2', right: 'R1 checks the NAT configuration to determine if this packet should be translated' },
    { left: 'Step 3', right: 'R1 determines that source address 192.168.10.10 must be translated (no existing entry)' },
    { left: 'Step 4', right: 'R1 selects an available global address from the dynamic address pool' },
    { left: 'Step 5', right: 'R1 replaces the address 192.168.10.10 with a translated inside global address' }
  ],
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'hard',
  explanation: 'Dynamic NAT process: host sends packet → router checks NAT config → determines translation needed → selects pool address → replaces source address.'
},

// ===== أسئلة 216-227: Answer Questions (remaining) =====

{
  questionText: 'What does a firewall do when data tries to leave or enter the internal network?',
  questionType: 'multiple_choice',
  options: [
    'It forwards all traffic',
    'The firewall checks the data and decides whether it can pass through based on its access control policy',
    'It encrypts the data',
    'It stores the data for later analysis'
  ],
  correctAnswer: 'The firewall checks the data and decides whether it can pass through based on its access control policy',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'The firewall checks data and decides whether it can pass based on its access control policy.'
},

{
  questionText: 'What happens when traffic from the public network tries to enter a private network without permission?',
  questionType: 'multiple_choice',
  options: [
    'The firewall allows it through',
    'The firewall blocks it to protect the private network',
    'The firewall encrypts it',
    'The firewall forwards it to the DMZ'
  ],
  correctAnswer: 'The firewall blocks it to protect the private network',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'The firewall blocks unauthorized traffic from the public network.'
},

{
  questionText: 'What does a CVSS base score tell you?',
  questionType: 'multiple_choice',
  options: [
    'How fast a system runs',
    'A numerical measure of the severity of a vulnerability and how dangerous it is',
    'The cost of fixing a vulnerability',
    'The number of affected systems'
  ],
  correctAnswer: 'A numerical measure of the severity of a vulnerability and how dangerous it is',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'CVSS base score provides a numerical measure of vulnerability severity.'
},

{
  questionText: 'What two factors should be considered when prioritizing vulnerabilities?',
  questionType: 'multiple_choice',
  options: [
    'Cost and time',
    'Severity of the vulnerability and potential impact to your business',
    'Number of users and bandwidth',
    'Age of the system and brand'
  ],
  correctAnswer: 'Severity of the vulnerability and potential impact to your business',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Consider severity of the vulnerability and potential impact to your business.'
},

{
  questionText: 'What is the purpose and structure of the Common Vulnerabilities and Exposures (CVE) system?',
  questionType: 'multiple_choice',
  options: [
    'It fixes all known vulnerabilities automatically',
    'CVE provides a standard way to identify known vulnerabilities. Each vulnerability is assigned a unique CVE ID and the year it was published',
    'It encrypts vulnerable systems',
    'It replaces firewalls'
  ],
  correctAnswer: 'CVE provides a standard way to identify known vulnerabilities. Each vulnerability is assigned a unique CVE ID and the year it was published',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'CVE provides standard identification for known vulnerabilities with unique IDs.'
},

{
  questionText: 'What is the role of Weakness Enumeration (CWE)?',
  questionType: 'multiple_choice',
  options: [
    'It encrypts all software',
    'CWE focuses on identifying software weaknesses that can lead to security vulnerabilities',
    'It manages network routing',
    'It provides antivirus protection'
  ],
  correctAnswer: 'CWE focuses on identifying software weaknesses that can lead to security vulnerabilities',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'CWE focuses on identifying software weaknesses that can lead to security vulnerabilities.'
},

{
  questionText: 'What is the role of the SSL protocol?',
  questionType: 'multiple_choice',
  options: [
    'It replaces all VPN protocols',
    'It secures communication between a web browser and a server (e.g., https)',
    'It speeds up network connections',
    'It manages IP addresses'
  ],
  correctAnswer: 'It secures communication between a web browser and a server (e.g., https)',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'SSL secures communication between a web browser and a server.'
},

{
  questionText: 'Which command verifies IPsec security associations (SA)?',
  questionType: 'multiple_choice',
  options: ['show ip ipsec', 'show crypto ipsec sa', 'show ipsec status', 'display crypto sa'],
  correctAnswer: 'show crypto ipsec sa',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'The "show crypto ipsec sa" command verifies IPsec security associations.'
},

{
  questionText: 'What is the primary criterion for port security to identify devices?',
  questionType: 'multiple_choice',
  options: [
    'IP address of the device',
    'Port security identifies devices based on the source MAC address of Ethernet frames',
    'Hostname of the device',
    'VLAN membership'
  ],
  correctAnswer: 'Port security identifies devices based on the source MAC address of Ethernet frames',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Port security identifies devices based on the source MAC address of Ethernet frames.'
},

// ===== TPK18: Routing Protocols (أسئلة 228-237 area) =====

{
  questionText: 'What is a DHCP poisoning attack?',
  questionType: 'multiple_choice',
  options: [
    'An attack that floods the DHCP server with requests',
    'An attack where a rogue (fake) DHCP server responds to client requests before the real server does',
    'An attack that encrypts DHCP messages',
    'An attack that disables the DHCP service'
  ],
  correctAnswer: 'An attack where a rogue (fake) DHCP server responds to client requests before the real server does',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'In a DHCP poisoning attack, a rogue DHCP server responds before the real server.'
},

{
  questionText: 'What is the Common Vulnerability Scoring System (CVSS)?',
  questionType: 'multiple_choice',
  options: [
    'A list of all known viruses',
    'CVSS assigns a score from 0 to 10, where 0 represents minimal risk and 10 represents a critical threat',
    'A firewall rating system',
    'A network speed measurement tool'
  ],
  correctAnswer: 'CVSS assigns a score from 0 to 10, where 0 represents minimal risk and 10 represents a critical threat',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'CVSS assigns severity scores from 0 (minimal) to 10 (critical).'
},

// ===== True/False 238-247 =====

{
  questionText: 'Port security allows an unlimited number of different source MAC addresses on a port.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Port security limits the number of MAC addresses allowed on a port.'
},

{
  questionText: 'Port security identifies devices based on the source MAC address of Ethernet frames.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Port security uses source MAC addresses to identify devices.'
},

{
  questionText: 'NAT primarily conserves private IPv4 addresses.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'NAT primarily conserves PUBLIC IPv4 addresses, not private ones.'
},

{
  questionText: 'PAT allows over 65,000 concurrent flows with a single inside global IP address.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'PAT can support over 65,000 concurrent flows using different port numbers.'
},

// ===== Complete Sentence → MC (248-257 area) =====

{
  questionText: 'Port security violations result in __________ all future incoming traffic on the violated port.',
  questionType: 'multiple_choice',
  options: ['encrypting', 'forwarding', 'discarding', 'logging'],
  correctAnswer: 'discarding',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Port security violations result in discarding all future incoming traffic.'
},

{
  questionText: '__________ allows multiple devices to communicate with the Internet using a single public IP address.',
  questionType: 'multiple_choice',
  options: ['Static NAT', 'Dynamic NAT', 'PAT', 'ARP'],
  correctAnswer: 'PAT',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'PAT allows multiple devices to share one public IP address.'
},

{
  questionText: 'PAT requires the __________ keyword to support multiple inside local IP addresses using a single public IP address.',
  questionType: 'multiple_choice',
  options: ['nat', 'overload', 'static', 'dynamic'],
  correctAnswer: 'overload',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'PAT uses the "overload" keyword.'
},

{
  questionText: 'Static NAT requires a __________ mapping between each inside local IP address and a public IP address.',
  questionType: 'multiple_choice',
  options: ['many-to-one', 'one-to-many', 'one-to-one', 'dynamic'],
  correctAnswer: 'one-to-one',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Static NAT requires one-to-one mapping.'
},

// ===== TPK16: OSI Model =====

{
  questionText: 'What does ARP stand for in networks?',
  questionType: 'multiple_choice',
  options: ['Address Resolution Protocol', 'Advanced Routing Protocol', 'Application Registration Protocol', 'Automatic Resource Protocol'],
  correctAnswer: 'Address Resolution Protocol',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'ARP stands for Address Resolution Protocol.'
},

{
  questionText: 'What is the main purpose of ARP in networks?',
  questionType: 'multiple_choice',
  options: [
    'To encrypt data packets',
    'To resolve (map) an IP address to its corresponding MAC address',
    'To assign IP addresses automatically',
    'To route traffic between networks'
  ],
  correctAnswer: 'To resolve (map) an IP address to its corresponding MAC address',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'ARP resolves an IP address to its corresponding MAC address.'
},

{
  questionText: 'How does DAI prevent ARP attacks?',
  questionType: 'multiple_choice',
  options: [
    'By blocking all ARP messages',
    'By comparing ARP messages to DHCP Snooping binding table',
    'By rerouting ARP messages',
    'By disabling ARP entirely'
  ],
  correctAnswer: 'By comparing ARP messages to DHCP Snooping binding table',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'DAI validates ARP messages by comparing them to the DHCP Snooping binding table.'
},

{
  questionText: 'What does DAI primarily protect against?',
  questionType: 'multiple_choice',
  options: ['DDoS attacks', 'ARP poisoning and man-in-the-middle attacks', 'Port scanning', 'Firewall misconfigurations'],
  correctAnswer: 'ARP poisoning and man-in-the-middle attacks',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'DAI primarily protects against ARP poisoning and man-in-the-middle attacks.'
},

{
  questionText: 'How do AAA operations compare regarding user identification, user services, and access control?',
  questionType: 'multiple_choice',
  options: [
    'Authorization provides access control, and authentication tracks user services',
    'Authentication identifies users, and accounting tracks user services',
    'Accounting tracks user services, and authentication provides access control',
    'Authorization identifies users, and authentication provides access control'
  ],
  correctAnswer: 'Authentication identifies users, and accounting tracks user services',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Authentication identifies users, Authorization controls access, Accounting tracks services.'
},

{
  questionText: 'What is the difference between RADIUS and TACACS+?',
  questionType: 'multiple_choice',
  options: [
    'RADIUS logs all commands; TACACS+ logs only start, stop, and interim commands',
    'TACACS+ separates authentication and authorization, and RADIUS merges them',
    'TACACS+ encrypts only password information; RADIUS encrypts the entire payload',
    'RADIUS is most appropriate for dial authentication; TACACS+ can be used for multiple types'
  ],
  correctAnswer: 'TACACS+ separates authentication and authorization, and RADIUS merges them',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'TACACS+ separates authentication and authorization. RADIUS merges them. TACACS+ encrypts entire packet, RADIUS only encrypts password.'
},

{
  questionText: 'What does an AAA server primarily help achieve in a network?',
  questionType: 'multiple_choice',
  options: [
    'Enhance network speed',
    'Provide free access to all devices',
    'Centralize policies and authenticate users',
    'Increase vulnerability'
  ],
  correctAnswer: 'Centralize policies and authenticate users',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'AAA servers centralize policies and authenticate users.'
},

{
  questionText: 'Which command in RouterOS lists all installed packages along with their version and status?',
  questionType: 'multiple_choice',
  options: ['/system package list', '/system package print', '/system package show', '/system package display'],
  correctAnswer: '/system package print',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The "/system package print" command lists all installed packages.'
},

{
  questionText: 'How can a static IP address be assigned to an interface in RouterOS?',
  questionType: 'multiple_choice',
  options: [
    '/ip address set address=10.10.1.100/24 interface=ether1',
    '/network interface set address=10.10.1.100/24 ether1',
    '/ip config add address=10.10.1.100/24 interface=ether1',
    '/ip address add address=10.10.1.100/24 interface=ether1'
  ],
  correctAnswer: '/ip address add address=10.10.1.100/24 interface=ether1',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Use "/ip address add" to assign a static IP in RouterOS.'
},

{
  questionText: 'What is the purpose of the command "/system identity set name=WEschool" in RouterOS?',
  questionType: 'multiple_choice',
  options: [
    'To set the system password',
    'To display the system identity',
    'To set the router\'s hostname',
    'To configure the network interface'
  ],
  correctAnswer: 'To set the router\'s hostname',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'This command sets the router hostname to "WEschool".'
},

{
  questionText: 'What are the default credentials for accessing MikroTik devices?',
  questionType: 'multiple_choice',
  options: [
    'Username: admin, Password: admin',
    'Username: admin, Password: password',
    'Username: admin, Password: No Password',
    'Username: root, Password: admin'
  ],
  correctAnswer: 'Username: admin, Password: No Password',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'Default MikroTik credentials: username admin with no password.'
},

// ===== Complete Sentence → MC (300-307 area) =====

{
  questionText: 'The __________action is the default response to a security violation in port security.',
  questionType: 'multiple_choice',
  options: ['Protect', 'Restrict', 'Shutdown', 'Alert'],
  correctAnswer: 'Shutdown',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Shutdown is the default violation action in port security.'
},

{
  questionText: 'The "_______________" interface subcommand overrides the default setting of not trusted.',
  questionType: 'multiple_choice',
  options: ['ip dhcp snooping', 'ip dhcp snooping trust', 'switchport port-security', 'ip arp inspection'],
  correctAnswer: 'ip dhcp snooping trust',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The "ip dhcp snooping trust" command marks a port as trusted.'
},

{
  questionText: 'DAI allows ARP messages that match the data in __________.',
  questionType: 'multiple_choice',
  options: ['MAC address table', 'DHCP Snooping binding tables', 'Routing table', 'ARP cache'],
  correctAnswer: 'DHCP Snooping binding tables',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'DAI validates ARP messages against the DHCP Snooping binding tables.'
},

{
  questionText: 'Port security can automatically learn and configure MAC addresses using the __________ feature.',
  questionType: 'multiple_choice',
  options: ['dynamic', 'static', 'sticky', 'auto'],
  correctAnswer: 'sticky',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'The sticky feature automatically learns and saves MAC addresses.'
},

{
  questionText: '_____________ is used to discover the MAC address associated with an IPv4 address.',
  questionType: 'multiple_choice',
  options: ['DNS', 'DHCP', 'ARP', 'NAT'],
  correctAnswer: 'ARP',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'easy',
  explanation: 'ARP resolves IPv4 addresses to MAC addresses.'
},

{
  questionText: '_____________ can be exploited by attackers to manipulate ARP tables.',
  questionType: 'multiple_choice',
  options: ['DHCP Snooping', 'Gratuitous ARP', 'Port Security', 'NAT'],
  correctAnswer: 'Gratuitous ARP',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'Gratuitous ARP can be exploited to manipulate ARP tables.'
},

{
  questionText: 'The ______________ is responsible for authenticating the Client in the 802.1x protocol.',
  questionType: 'multiple_choice',
  options: ['Client', 'Authenticator', 'Authentication Server', 'Switch'],
  correctAnswer: 'Authentication Server',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The Authentication Server authenticates the Client in 802.1X.'
},

{
  questionText: 'The ________________ is responsible for passing the authentication information from the Client to the Authentication Server.',
  questionType: 'multiple_choice',
  options: ['Client', 'Authenticator', 'Authentication Server', 'RADIUS Server'],
  correctAnswer: 'Authenticator',
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'The Authenticator passes authentication information between Client and Authentication Server.'
},

// ===== Matching - CVE, CWE, CVSS, OpenVAS (سؤال 308) =====

{
  questionText: 'Match each vulnerability management term with its correct description.',
  questionType: 'matching',
  options: [],
  correctAnswer: '',
  matchingPairs: [
    { left: 'CVE', right: 'Unique ID for vulnerabilities' },
    { left: 'CWE', right: 'Lists common software weaknesses' },
    { left: 'CVSS', right: 'Measures severity of vulnerabilities' },
    { left: 'OpenVAS', right: 'A specific tool used for vulnerability scanning' }
  ],
  department: 'networks',
  topic: 'Unit 18: Advanced Cybersecurity -1',
  difficulty: 'medium',
  explanation: 'CVE identifies vulnerabilities, CWE lists weaknesses, CVSS measures severity, OpenVAS is a scanning tool.'
},

// ===== TPK20: CIA Triad (أسئلة 309-324) =====

{
  questionText: 'What is symmetric encryption?',
  questionType: 'multiple_choice',
  options: [
    'Encryption that uses two different keys',
    'Encryption where the same key is used to encrypt and decrypt a message',
    'A hashing algorithm',
    'A digital signature method'
  ],
  correctAnswer: 'Encryption where the same key is used to encrypt and decrypt a message',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'Symmetric encryption uses the same key for both encryption and decryption.'
},

{
  questionText: 'Why is symmetric encryption not preferred over the Internet?',
  questionType: 'multiple_choice',
  options: [
    'It is too slow',
    'It is difficult to be secured while sharing only one key over the internet',
    'It uses too much bandwidth',
    'It is not supported by browsers'
  ],
  correctAnswer: 'It is difficult to be secured while sharing only one key over the internet',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'Sharing a single key securely over the internet is difficult.'
},

{
  questionText: 'What is asymmetric encryption?',
  questionType: 'multiple_choice',
  options: [
    'Encryption using the same key for encryption and decryption',
    'Asymmetric encryption uses two different keys: public key for encryption and private key for decryption',
    'A method that does not use any keys',
    'A faster version of symmetric encryption'
  ],
  correctAnswer: 'Asymmetric encryption uses two different keys: public key for encryption and private key for decryption',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'Asymmetric encryption uses a public key for encryption and a private key for decryption.'
},

{
  questionText: 'Why is DES considered not secure, and what is the solution?',
  questionType: 'multiple_choice',
  options: [
    'It is too slow; the solution is AES',
    'It uses only a 56-bit key; the solution was 3DES which performs encryption 3 times',
    'It only works with Linux; the solution is RSA',
    'It has no known weaknesses'
  ],
  correctAnswer: 'It uses only a 56-bit key; the solution was 3DES which performs encryption 3 times',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'DES uses a 56-bit key. 3DES performs encryption 3 times for stronger security.'
},

{
  questionText: 'What is AES (Advanced Encryption Standard)?',
  questionType: 'multiple_choice',
  options: [
    'An asymmetric encryption algorithm',
    'A secure symmetric encryption algorithm that encrypts data in blocks of 128 bits and supports key sizes of 128, 192, and 256 bits',
    'A hashing algorithm',
    'A VPN protocol'
  ],
  correctAnswer: 'A secure symmetric encryption algorithm that encrypts data in blocks of 128 bits and supports key sizes of 128, 192, and 256 bits',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'AES encrypts data in 128-bit blocks with key sizes of 128, 192, and 256 bits.'
},

{
  questionText: 'Why are message digest functions considered one-way, and how does this property improve security?',
  questionType: 'multiple_choice',
  options: [
    'Because they can only encrypt, not decrypt',
    'Because once data is converted into a hash value, it is impossible to reverse the process and retrieve the original data',
    'Because they use only public keys',
    'Because they work in one direction on the network'
  ],
  correctAnswer: 'Because once data is converted into a hash value, it is impossible to reverse the process and retrieve the original data',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'Hash values cannot be reversed to retrieve original data, improving security.'
},

{
  questionText: 'Which principle of the CIA triad focuses on ensuring that data is accessible to authorized users when needed?',
  questionType: 'multiple_choice',
  options: ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
  correctAnswer: 'Availability',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'Availability ensures data is accessible to authorized users when needed.'
},

{
  questionText: 'What is the main purpose of a cybersecurity policy in a company?',
  questionType: 'multiple_choice',
  options: [
    'To increase network speed',
    'To outline rules that protect information and systems',
    'To replace all hardware',
    'To block all internet access'
  ],
  correctAnswer: 'To outline rules that protect information and systems',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'A cybersecurity policy outlines rules that protect information and systems.'
},

{
  questionText: 'Name two trusted groups that help companies with best practices in cybersecurity.',
  questionType: 'multiple_choice',
  options: [
    'Microsoft and Apple',
    'NIST and ISO',
    'Cisco and Juniper',
    'FBI and CIA'
  ],
  correctAnswer: 'NIST and ISO',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'NIST and ISO help companies with cybersecurity best practices.'
},

{
  questionText: 'What is the main purpose of a cybersecurity audit?',
  questionType: 'multiple_choice',
  options: [
    'To install new software',
    'To check how well an organization is protecting its data and systems by reviewing its security rules, practices, and tools',
    'To increase bandwidth',
    'To hire new employees'
  ],
  correctAnswer: 'To check how well an organization is protecting its data and systems by reviewing its security rules, practices, and tools',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'A cybersecurity audit reviews how well an organization protects its data and systems.'
},

// ===== True/False 319-324 =====

{
  questionText: 'Information Security protects information only when it is stored digitally.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'Information Security protects all types of information, not just digital.'
},

{
  questionText: 'Firewalls alone are sufficient to protect a network from all types of cyber attacks.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'Firewalls alone are not sufficient. A layered security approach is needed.'
},

{
  questionText: 'Policies and procedures are unnecessary if a company has strong technological security measures.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'Policies and procedures are always needed alongside technology.'
},

{
  questionText: 'Every employee must follow the cybersecurity policies set by the company.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'Every employee must follow the cybersecurity policies.'
},

{
  questionText: 'A Code of Conduct provides guidelines for behavior that all employees must follow.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'A Code of Conduct provides behavioral guidelines for all employees.'
},

{
  questionText: 'External audits are only performed by the organization\'s own employees.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'External audits are performed by independent third parties.'
},

// ===== TPK12: Endpoint Protection (أسئلة 325-330) =====

{
  questionText: 'What is the primary purpose of a router in a network?',
  questionType: 'multiple_choice',
  options: ['To store data', 'To connect different parts of a network', 'To display web pages', 'To encrypt emails'],
  correctAnswer: 'To connect different parts of a network',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'A router connects different parts of a network.'
},

{
  questionText: 'What is an Intrusion Prevention System (IPS)?',
  questionType: 'multiple_choice',
  options: [
    'A system that only monitors threats',
    'A system that monitors network traffic for attacks and blocks threats in real time, actively protecting the network',
    'A type of firewall',
    'An antivirus program'
  ],
  correctAnswer: 'A system that monitors network traffic for attacks and blocks threats in real time, actively protecting the network',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'An IPS monitors traffic for attacks and blocks threats in real time.'
},

{
  questionText: 'What are the main benefits of using a proxy server in a network?',
  questionType: 'multiple_choice',
  options: [
    'It only speeds up connections',
    'A proxy server enhances security and privacy by filtering traffic, hiding internal IPs, protecting against attacks, and controlling user activity',
    'It replaces the firewall',
    'It stores all network data'
  ],
  correctAnswer: 'A proxy server enhances security and privacy by filtering traffic, hiding internal IPs, protecting against attacks, and controlling user activity',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'A proxy server filters traffic, hides IPs, protects against attacks, and controls activity.'
},

{
  questionText: 'What is the role of access control lists (ACLs) in routers?',
  questionType: 'multiple_choice',
  options: [
    'ACLs speed up internet connections',
    'ACLs control which computers can send and receive data',
    'ACLs manage hardware inventory',
    'ACLs encrypt all traffic'
  ],
  correctAnswer: 'ACLs control which computers can send and receive data',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'ACLs control which computers can send and receive data.'
},

{
  questionText: 'What are two functions of firewalls?',
  questionType: 'multiple_choice',
  options: [
    'Speed up connections and compress data',
    'Identify malicious behavior in network traffic and apply security policies to the traffic',
    'Store data and manage users',
    'Encrypt emails and block spam'
  ],
  correctAnswer: 'Identify malicious behavior in network traffic and apply security policies to the traffic',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'Firewalls identify malicious behavior and apply security policies to traffic.'
},

{
  questionText: 'What is an Intrusion Detection System (IDS), and how does it help keep a network safe?',
  questionType: 'multiple_choice',
  options: [
    'A system that blocks all network traffic',
    'An IDS monitors network traffic for threats and alerts administrators without blocking the traffic',
    'A system that encrypts data',
    'A firewall replacement'
  ],
  correctAnswer: 'An IDS monitors network traffic for threats and alerts administrators without blocking the traffic',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'An IDS monitors traffic for threats and alerts administrators without blocking traffic.'
},

// ===== Unit 19 specific: Additional Answer Questions =====

{
  questionText: 'How does Dynamic ARP Inspection (DAI) work?',
  questionType: 'multiple_choice',
  options: [
    'It blocks all ARP messages',
    'DAI protects the network from ARP spoofing by relying on DHCP snooping to provide accurate IP-to-MAC address information',
    'It encrypts ARP packets',
    'It replaces ARP with a new protocol'
  ],
  correctAnswer: 'DAI protects the network from ARP spoofing by relying on DHCP snooping to provide accurate IP-to-MAC address information',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'DAI protects against ARP spoofing using DHCP snooping binding table data.'
},

{
  questionText: 'How does an AAA server improve network security?',
  questionType: 'multiple_choice',
  options: [
    'It speeds up the network',
    'Authentication verifies identity, Authorization controls resource access, Accounting monitors and audits user actions',
    'It replaces firewalls',
    'It encrypts all data'
  ],
  correctAnswer: 'Authentication verifies identity, Authorization controls resource access, Accounting monitors and audits user actions',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'AAA: Authentication verifies identity, Authorization controls access, Accounting monitors actions.'
},

{
  questionText: 'What are the main components of the 802.1X authentication process?',
  questionType: 'multiple_choice',
  options: [
    'Router, Switch, Firewall',
    'The Client, the Authenticator, and the Authentication Server',
    'User, Admin, Database',
    'DNS, DHCP, NAT'
  ],
  correctAnswer: 'The Client, the Authenticator, and the Authentication Server',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: '802.1X has three components: Client, Authenticator, and Authentication Server.'
},

{
  questionText: 'Compare TACACS+ and RADIUS in terms of security.',
  questionType: 'multiple_choice',
  options: [
    'They have the same level of security',
    'TACACS+ provides higher security because it encrypts the entire communication packet; RADIUS encrypts only the password',
    'RADIUS is more secure because it encrypts everything',
    'Neither uses encryption'
  ],
  correctAnswer: 'TACACS+ provides higher security because it encrypts the entire communication packet; RADIUS encrypts only the password',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'TACACS+ encrypts the entire packet. RADIUS only encrypts the password.'
},

{
  questionText: 'Compare TACACS+ and RADIUS in terms of transport protocol.',
  questionType: 'multiple_choice',
  options: [
    'Both use TCP',
    'TACACS+ uses TCP on port 49; RADIUS uses UDP on ports 1645 and 1812',
    'Both use UDP',
    'TACACS+ uses UDP; RADIUS uses TCP'
  ],
  correctAnswer: 'TACACS+ uses TCP on port 49; RADIUS uses UDP on ports 1645 and 1812',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'TACACS+ uses TCP port 49. RADIUS uses UDP ports 1645 and 1812.'
},

{
  questionText: 'What is Winbox?',
  questionType: 'multiple_choice',
  options: [
    'A command-line tool for Linux',
    'A graphical user interface (GUI) used to configure MikroTik routers',
    'A network monitoring service',
    'A type of firewall'
  ],
  correctAnswer: 'A graphical user interface (GUI) used to configure MikroTik routers',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'Winbox is a GUI application used to configure MikroTik routers.'
},

{
  questionText: 'Which TCP port does the Winbox application use by default to connect to RouterOS devices?',
  questionType: 'multiple_choice',
  options: ['22', '80', '8291', '443'],
  correctAnswer: '8291',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'Winbox uses TCP port 8291 by default.'
},

{
  questionText: 'How does DHCP snooping handle DHCP server messages on untrusted ports?',
  questionType: 'multiple_choice',
  options: [
    'It forwards them normally',
    'DHCP server messages received on untrusted ports are automatically discarded because they indicate a possible rogue DHCP server',
    'It logs them but allows them through',
    'It encrypts them'
  ],
  correctAnswer: 'DHCP server messages received on untrusted ports are automatically discarded because they indicate a possible rogue DHCP server',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'medium',
  explanation: 'DHCP server messages on untrusted ports are discarded as they may indicate a rogue server.'
},

{
  questionText: 'What is the primary advantage of using MikroTik for network management?',
  questionType: 'multiple_choice',
  options: [
    'It only supports wireless networks',
    'It provides efficient network management, configuration, and core routing functionality',
    'It is free of charge',
    'It replaces all Cisco equipment'
  ],
  correctAnswer: 'It provides efficient network management, configuration, and core routing functionality',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'MikroTik provides efficient network management, configuration, and core routing functionality.'
},

{
  questionText: 'Why is it important to set a strong admin password when first logging into a MikroTik router?',
  questionType: 'multiple_choice',
  options: [
    'It is optional and not needed',
    'To secure the router and prevent unauthorized access',
    'To change the router brand',
    'To increase internet speed'
  ],
  correctAnswer: 'To secure the router and prevent unauthorized access',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'A strong admin password secures the router and prevents unauthorized access.'
},

{
  questionText: 'Why is the "/system package" always checked during an installation on MikroTik?',
  questionType: 'multiple_choice',
  options: [
    'It is optional',
    'It ensures core functionality',
    'It manages DNS',
    'It configures DHCP'
  ],
  correctAnswer: 'It ensures core functionality',
  department: 'networks',
  topic: 'Unit 19: Advanced Cybersecurity -2',
  difficulty: 'easy',
  explanation: 'The /system package ensures core functionality of RouterOS.'
},

// ===== Unit 24: Cisco Dev Net =====
// ===== TPK18: Different Routing Protocols =====

// أسئلة Answer Questions

{
  questionText: 'What is the concept of network automation?',
  questionType: 'multiple_choice',
  options: [
    'Manually configuring each device one by one',
    'The use of software, tools, and scripts to perform network tasks automatically instead of doing them manually',
    'Replacing all network equipment with new ones',
    'Disabling all security features for faster performance'
  ],
  correctAnswer: 'The use of software, tools, and scripts to perform network tasks automatically instead of doing them manually',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Network automation uses software, tools, and scripts to perform network tasks automatically.'
},

{
  questionText: 'What are the benefits of network automation in modern networks?',
  questionType: 'multiple_choice',
  options: [
    'It increases manual workload and complexity',
    'It saves time by completing tasks quickly, reducing human errors, and improves overall network efficiency',
    'It makes networks slower and less reliable',
    'It eliminates the need for any security measures'
  ],
  correctAnswer: 'It saves time by completing tasks quickly, reducing human errors, and improves overall network efficiency',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Network automation saves time, reduces human errors, and improves network efficiency.'
},

{
  questionText: 'What is the function of a Wireless LAN Controller (WLC) in network automation?',
  questionType: 'multiple_choice',
  options: [
    'It replaces all switches in the network',
    'WLC simplifies network management by allowing administrators to control all access points from one location',
    'It encrypts all wireless traffic only',
    'It provides internet access directly to users'
  ],
  correctAnswer: 'WLC simplifies network management by allowing administrators to control all access points from one location',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'WLC simplifies management by allowing centralized control of all access points.'
},

{
  questionText: 'What is the main function of a router and how does it differ from a switch?',
  questionType: 'multiple_choice',
  options: [
    'Both do exactly the same thing',
    'A router sends messages between different networks by examining Layer 3 headers; a switch sends messages within a LAN by checking Layer 2 headers',
    'A switch connects networks; a router connects devices within a LAN',
    'A router only works with wireless networks'
  ],
  correctAnswer: 'A router sends messages between different networks by examining Layer 3 headers; a switch sends messages within a LAN by checking Layer 2 headers',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'A router works at Layer 3 between networks. A switch works at Layer 2 within a LAN.'
},

{
  questionText: 'What is the role of the data plane in a network device?',
  questionType: 'multiple_choice',
  options: [
    'It runs routing protocols and creates routing tables',
    'The data plane (forwarding plane) is responsible for moving user data through the network quickly, correctly, and securely',
    'It allows remote access and monitoring of devices',
    'It manages firmware updates'
  ],
  correctAnswer: 'The data plane (forwarding plane) is responsible for moving user data through the network quickly, correctly, and securely',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The data plane (forwarding plane) moves user data through the network.'
},

{
  questionText: 'What is the role of the control plane in a network device?',
  questionType: 'multiple_choice',
  options: [
    'It forwards user data packets directly',
    'It runs protocols such as OSPF, STP, and ARP to collect network information and create routing tables and MAC-related mappings',
    'It manages device passwords only',
    'It provides a GUI interface for users'
  ],
  correctAnswer: 'It runs protocols such as OSPF, STP, and ARP to collect network information and create routing tables and MAC-related mappings',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The control plane runs protocols like OSPF, STP, and ARP to create routing tables.'
},

{
  questionText: 'What is the role of the Management plane in a network device?',
  questionType: 'multiple_choice',
  options: [
    'It forwards packets to their destinations',
    'It makes routing and switching decisions',
    'The management plane helps administrators by allowing remote access, monitoring, and configuration of devices',
    'It encrypts all network traffic'
  ],
  correctAnswer: 'The management plane helps administrators by allowing remote access, monitoring, and configuration of devices',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The management plane allows remote access, monitoring, and configuration.'
},

{
  questionText: 'What are the three logical planes working together in a network?',
  questionType: 'multiple_choice',
  options: [
    'Physical plane, Virtual plane, Cloud plane',
    'The data plane, the control plane, and the management plane',
    'Input plane, Output plane, Processing plane',
    'Local plane, Remote plane, Global plane'
  ],
  correctAnswer: 'The data plane, the control plane, and the management plane',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The three logical planes are data, control, and management.'
},

{
  questionText: 'What is the Southbound Interface (SBI) in Software-Defined networks?',
  questionType: 'multiple_choice',
  options: [
    'The connection between the admin and the controller',
    'The Southbound Interface is the connection between the controller and network devices, allowing the controller to send instructions',
    'The connection between two routers',
    'The API used by external applications'
  ],
  correctAnswer: 'The Southbound Interface is the connection between the controller and network devices, allowing the controller to send instructions',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The SBI connects the controller to network devices for sending instructions.'
},

{
  questionText: 'What is the Northbound Interface (NBI) and its importance in SDN?',
  questionType: 'multiple_choice',
  options: [
    'It connects network devices to each other',
    'The Northbound Interface allows the administrator to communicate with the controller',
    'It is a physical cable connection',
    'It manages power supply to devices'
  ],
  correctAnswer: 'The Northbound Interface allows the administrator to communicate with the controller',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The NBI allows administrators to communicate with the SDN controller.'
},

{
  questionText: 'What are the different ways administrators can use the Northbound Interface (NBI) to manage a network?',
  questionType: 'multiple_choice',
  options: [
    'SSH and Telnet only',
    'Dashboards or GUI, CLI (Command-Line Interface), and REST APIs',
    'Console cable only',
    'SNMP only'
  ],
  correctAnswer: 'Dashboards or GUI, CLI (Command-Line Interface), and REST APIs',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Administrators can use Dashboards/GUI, CLI, and REST APIs through the NBI.'
},

{
  questionText: 'What is Cisco Digital Network Center (DNA)?',
  questionType: 'multiple_choice',
  options: [
    'A hardware-only solution for routing',
    'Cisco DNA Center is software that runs on a Cisco appliance that helps administrators monitor the network and automate tasks',
    'A cloud storage service',
    'An antivirus program'
  ],
  correctAnswer: 'Cisco DNA Center is software that runs on a Cisco appliance that helps administrators monitor the network and automate tasks',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Cisco DNA Center is software for monitoring and automating network tasks.'
},

// ===== True/False =====

{
  questionText: 'The data plane is responsible for routing tables and protocol management.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The control plane manages routing tables and protocols. The data plane forwards data.'
},

{
  questionText: 'SDN separates the control plane from the devices to centralize management.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'SDN separates the control plane from network devices to enable centralized management.'
},

{
  questionText: 'NETCONF is a Northbound Interface protocol used for APIs.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'NETCONF is a Southbound Interface protocol, not Northbound.'
},

{
  questionText: 'In SDN, the controller connects to devices via the Northbound Interface.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The controller connects to devices via the Southbound Interface (SBI). The NBI is for admin/applications.'
},

{
  questionText: 'Cisco Meraki operates without requiring an Internet connection.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'False',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Cisco Meraki requires an Internet connection for its cloud-based management.'
},

{
  questionText: 'Python scripts can automate tasks like configuring loopback interfaces and backing up configurations.',
  questionType: 'true_false',
  options: ['True', 'False'],
  correctAnswer: 'True',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Python scripts can automate various network tasks including configuration and backups.'
},

// ===== Complete Sentence → MC =====

{
  questionText: 'The __ __ plane is responsible for configuring, monitoring, and logging events in network devices.',
  questionType: 'multiple_choice',
  options: ['data', 'control', 'management', 'forwarding'],
  correctAnswer: 'management',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The management plane handles configuring, monitoring, and logging events.'
},

{
  questionText: 'Cisco\'s __ __ is designed to enhance WAN connections and prioritize application performance.',
  questionType: 'multiple_choice',
  options: ['DNA Center', 'SD-WAN', 'Meraki', 'ISE'],
  correctAnswer: 'SD-WAN',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Cisco SD-WAN enhances WAN connections and prioritizes application performance.'
},

{
  questionText: 'The __ __ acts as the centralized brain in an SDN environment, making routing decisions.',
  questionType: 'multiple_choice',
  options: ['router', 'switch', 'controller', 'firewall'],
  correctAnswer: 'controller',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The SDN controller acts as the centralized brain, making routing decisions.'
},

{
  questionText: 'Cisco Meraki simplifies management through a __ __ dashboard.',
  questionType: 'multiple_choice',
  options: ['local', 'cloud-based', 'command-line', 'hardware'],
  correctAnswer: 'cloud-based',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Cisco Meraki simplifies management through a cloud-based dashboard.'
},

{
  questionText: 'Cisco DNA Center enables businesses to __ __ routine network tasks, reducing errors.',
  questionType: 'multiple_choice',
  options: ['manually configure', 'automate', 'eliminate', 'outsource'],
  correctAnswer: 'automate',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Cisco DNA Center enables businesses to automate routine network tasks.'
},

{
  questionText: 'Port security violations result in __________ all future incoming traffic on the violated port.',
  questionType: 'multiple_choice',
  options: ['encrypting', 'forwarding', 'discarding', 'logging'],
  correctAnswer: 'discarding',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Port security violations result in discarding all future incoming traffic.'
},

{
  questionText: '__________ allows multiple devices to communicate with the Internet using a single public IP address.',
  questionType: 'multiple_choice',
  options: ['Static NAT', 'Dynamic NAT', 'PAT', 'ARP'],
  correctAnswer: 'PAT',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'PAT allows multiple devices to share one public IP address.'
},

{
  questionText: 'PAT requires the __________ keyword to support multiple inside local IP addresses using a single public IP address.',
  questionType: 'multiple_choice',
  options: ['nat', 'overload', 'static', 'dynamic'],
  correctAnswer: 'overload',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'PAT uses the "overload" keyword.'
},

{
  questionText: 'Static NAT requires a __________ mapping between each inside local IP address and a public IP address.',
  questionType: 'multiple_choice',
  options: ['many-to-one', 'one-to-many', 'one-to-one', 'dynamic'],
  correctAnswer: 'one-to-one',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Static NAT requires one-to-one mapping.'
},

{
  questionText: 'The Python library used for SSH-based automation is __________.',
  questionType: 'multiple_choice',
  options: ['Telnetlib', 'Netmiko', 'PySNMP', 'Flask'],
  correctAnswer: 'Netmiko',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Netmiko is the Python library for SSH-based network automation.'
},

// ===== Matching - SDN terms =====

{
  questionText: 'Match each SDN/network term with its correct description.',
  questionType: 'matching',
  options: [],
  correctAnswer: '',
  matchingPairs: [
    { left: 'SDN Controller', right: 'Centralized software for network management' },
    { left: 'Control Plane', right: 'Makes routing and switching decisions' },
    { left: 'Management Plane', right: 'Configures and monitors devices' },
    { left: 'Data Plane', right: 'Forwards packets to their destinations' },
    { left: 'WLC', right: 'Manages Wi-Fi access points centrally' },
    { left: 'API', right: 'A programming interface for automation' }
  ],
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'These match SDN and network management terms with their descriptions.'
},

// ===== Matching - Cisco DNA Center vs Traditional =====

{
  questionText: 'Match each network management feature with either Cisco DNA Center (A) or Traditional Device Management (B).',
  questionType: 'matching',
  options: [],
  correctAnswer: '',
  matchingPairs: [
    { left: 'Implements changes via an SSH terminal', right: 'Traditional Device Management' },
    { left: 'Manages device configuration on a per-device basis', right: 'Traditional Device Management' },
    { left: 'Monitors the cloud for software updates', right: 'Cisco DNA Center' },
    { left: 'Security is managed near the perimeter with firewalls', right: 'Traditional Device Management' },
    { left: 'Uses CLI templates to apply consistent configuration to multiple devices', right: 'Cisco DNA Center' },
    { left: 'Uses NetFlow to analyze potential security threats throughout the network', right: 'Cisco DNA Center' }
  ],
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'DNA Center uses cloud monitoring, CLI templates, and NetFlow. Traditional uses SSH, per-device config, and perimeter firewalls.'
},

// ===== TPK23: Program Flow and Control =====

{
  questionText: 'What is Cisco DNA Center licensing?',
  questionType: 'multiple_choice',
  options: [
    'It is completely free',
    'Cisco DNA Center uses a subscription license that can last 1, 3, or 5 years for automation, monitoring, and security features',
    'It requires a one-time purchase',
    'It is open source'
  ],
  correctAnswer: 'Cisco DNA Center uses a subscription license that can last 1, 3, or 5 years for automation, monitoring, and security features',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'DNA Center uses subscription licenses lasting 1, 3, or 5 years.'
},

{
  questionText: 'What is SD-WAN?',
  questionType: 'multiple_choice',
  options: [
    'A type of LAN cable',
    'SD-WAN is a modern, cloud-managed WAN solution to manage WAN connections in different locations',
    'A wireless protocol for Bluetooth',
    'A database management system'
  ],
  correctAnswer: 'SD-WAN is a modern, cloud-managed WAN solution to manage WAN connections in different locations',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'SD-WAN is a modern, cloud-managed WAN solution for managing WAN connections.'
},

{
  questionText: 'Why is Python considered a powerful tool for managing and automating network devices?',
  questionType: 'multiple_choice',
  options: [
    'It only works with Cisco devices',
    'It simplifies complex networks tasks and Python scripts can execute repetitive tasks quickly and accurately, reducing human errors',
    'It replaces all network hardware',
    'It is the only programming language that exists'
  ],
  correctAnswer: 'It simplifies complex networks tasks and Python scripts can execute repetitive tasks quickly and accurately, reducing human errors',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Python simplifies networks tasks and executes repetitive tasks quickly with accuracy.'
},

{
  questionText: 'What is Netmiko?',
  questionType: 'multiple_choice',
  options: [
    'A firewall appliance',
    'A Python library designed for automation that works mainly with SSH',
    'A Cisco router model',
    'An antivirus program'
  ],
  correctAnswer: 'A Python library designed for automation that works mainly with SSH',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Netmiko is a Python library for automation, designed to work mainly with SSH.'
},

{
  questionText: 'What is Telnetlib?',
  questionType: 'multiple_choice',
  options: [
    'A hardware device',
    'A Python library used for automating Telnet connections',
    'A type of encryption',
    'A Cisco IOS command'
  ],
  correctAnswer: 'A Python library used for automating Telnet connections',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Telnetlib is a Python library for automating Telnet connections.'
},

{
  questionText: 'What is the function of Paramiko in network automation?',
  questionType: 'multiple_choice',
  options: [
    'It manages firewalls',
    'Paramiko handles secure SSH communication, often for file transfers or running commands',
    'It creates network diagrams',
    'It monitors bandwidth usage'
  ],
  correctAnswer: 'Paramiko handles secure SSH communication, often for file transfers or running commands',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Paramiko handles secure SSH communication for file transfers or running commands.'
},

{
  questionText: 'Why is learning Python networks libraries important for network engineers?',
  questionType: 'multiple_choice',
  options: [
    'It is not important at all',
    'It enables them to automate tasks, monitor networks, and manage devices more efficiently',
    'It replaces the need for network knowledge',
    'It is only useful for software developers'
  ],
  correctAnswer: 'It enables them to automate tasks, monitor networks, and manage devices more efficiently',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Python libraries enable network engineers to automate, monitor, and manage devices efficiently.'
},

{
  questionText: 'Why is understanding Python code more important than memorizing it when automating networks?',
  questionType: 'multiple_choice',
  options: [
    'Memorization is always more important',
    'When engineers understand how the code works, they can modify variables, commands, and logic to suit their own network',
    'Python code never changes so memorization is fine',
    'All networks use the exact same configuration'
  ],
  correctAnswer: 'When engineers understand how the code works, they can modify variables, commands, and logic to suit their own network',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Understanding code allows engineers to adapt and modify it for different networks.'
},

// ===== MCQ =====

{
  questionText: 'What is the main advantage of using network automation?',
  questionType: 'multiple_choice',
  options: [
    'Simplifies manual device configuration',
    'Eliminates all hardware needs',
    'Ensures consistent and efficient management',
    'Improves traditional SDN protocols'
  ],
  correctAnswer: 'Ensures consistent and efficient management',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Network automation ensures consistent and efficient network management.'
},

{
  questionText: 'What is the key function of the control plane in networks?',
  questionType: 'multiple_choice',
  options: [
    'Logging and monitoring events',
    'Directly forwarding user data',
    'Managing routing decisions',
    'Encrypting data payloads'
  ],
  correctAnswer: 'Managing routing decisions',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The control plane manages routing decisions using protocols like OSPF and STP.'
},

{
  questionText: 'Which protocol is commonly used for logging events in network devices?',
  questionType: 'multiple_choice',
  options: ['NTP', 'SNMP', 'Syslog', 'Telnet'],
  correctAnswer: 'Syslog',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Syslog is commonly used for logging events in network devices.'
},

{
  questionText: 'Which tool provides a GUI-based dashboard for managing network settings?',
  questionType: 'multiple_choice',
  options: ['Cisco DNA Center', 'Telnetlib', 'Netmiko', 'REST API'],
  correctAnswer: 'Cisco DNA Center',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Cisco DNA Center provides a GUI-based dashboard for managing network settings.'
},

{
  questionText: 'What is the primary function of the data plane?',
  questionType: 'multiple_choice',
  options: [
    'Route packets based on control plane decisions',
    'Monitor device health',
    'Handle logging events',
    'Update routing tables'
  ],
  correctAnswer: 'Route packets based on control plane decisions',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'The data plane routes/forwards packets based on control plane decisions.'
},

{
  questionText: 'Which Python library is used for SSH-based automation?',
  questionType: 'multiple_choice',
  options: ['SNMP', 'Telnetlib', 'PySNMP', 'Netmiko'],
  correctAnswer: 'Netmiko',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Netmiko is the Python library for SSH-based automation.'
},

{
  questionText: 'What type of license does Cisco DNA Center require?',
  questionType: 'multiple_choice',
  options: ['Open source', 'Subscription-based', 'Freeware', 'Lifetime ownership'],
  correctAnswer: 'Subscription-based',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Cisco DNA Center requires a subscription-based license.'
},

{
  questionText: 'Which Cisco platform uses cloud-based management?',
  questionType: 'multiple_choice',
  options: ['Cisco Meraki', 'Cisco DNA Center', 'Firewall', 'Wireless LAN Controller'],
  correctAnswer: 'Cisco Meraki',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'Cisco Meraki uses cloud-based management.'
},

{
  questionText: 'Which automation feature is available on Cisco DNA Center but not on traditional networks?',
  questionType: 'multiple_choice',
  options: [
    'Manual VLAN creation',
    'Centralized policy-based configuration',
    'Device logging via Syslog',
    'Direct hardware troubleshooting'
  ],
  correctAnswer: 'Centralized policy-based configuration',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Cisco DNA Center offers centralized policy-based configuration not available in traditional management.'
},

{
  questionText: 'Which Python library is best suited for automating Telnet-based tasks?',
  questionType: 'multiple_choice',
  options: ['Netmiko', 'Telnetlib', 'Paramiko', 'NAPALM'],
  correctAnswer: 'Telnetlib',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Telnetlib is best suited for automating Telnet-based tasks.'
},

// ===== TPK25 in Unit 24 context =====

{
  questionText: 'What is the primary advantage of using MikroTik for network management?',
  questionType: 'multiple_choice',
  options: [
    'It only supports wireless networks',
    'It provides efficient network management, configuration, and core routing functionality',
    'It is completely free with no licensing',
    'It replaces all Cisco equipment automatically'
  ],
  correctAnswer: 'It provides efficient network management, configuration, and core routing functionality',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'MikroTik provides efficient network management, configuration, and core routing.'
},

{
  questionText: 'Why is it important to set a strong admin password when first logging into a MikroTik router?',
  questionType: 'multiple_choice',
  options: [
    'It is optional and not needed',
    'To secure the router and prevent unauthorized access',
    'To change the router brand name',
    'To increase internet speed'
  ],
  correctAnswer: 'To secure the router and prevent unauthorized access',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'A strong admin password secures the router and prevents unauthorized access.'
},

{
  questionText: 'What is the purpose of using the "sticky learn" feature in port security?',
  questionType: 'multiple_choice',
  options: [
    'To block all MAC addresses',
    'The sticky learn feature dynamically learns source MAC addresses and adds them to the running configuration, making configuration easier',
    'To encrypt MAC addresses',
    'To delete all learned MAC addresses'
  ],
  correctAnswer: 'The sticky learn feature dynamically learns source MAC addresses and adds them to the running configuration, making configuration easier',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'Sticky learn dynamically learns MAC addresses and adds them to the running config.'
},

{
  questionText: 'How does DHCP snooping handle DHCP server messages received on untrusted ports?',
  questionType: 'multiple_choice',
  options: [
    'It forwards them normally',
    'DHCP server messages received on untrusted ports are automatically discarded because they indicate a possible rogue DHCP server',
    'It logs them but allows them through',
    'It encrypts them before forwarding'
  ],
  correctAnswer: 'DHCP server messages received on untrusted ports are automatically discarded because they indicate a possible rogue DHCP server',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'medium',
  explanation: 'DHCP server messages on untrusted ports are discarded as they may indicate a rogue server.'
},

{
  questionText: 'Why is the "/system package" always checked during an installation on MikroTik?',
  questionType: 'multiple_choice',
  options: [
    'It is optional and can be skipped',
    'It ensures core functionality',
    'It manages DNS only',
    'It configures DHCP only'
  ],
  correctAnswer: 'It ensures core functionality',
  department: 'networks',
  topic: 'Unit 24: Cisco Dev Net',
  difficulty: 'easy',
  explanation: 'The /system package ensures core functionality of RouterOS.'
},



];

// ============================================================
// IMPORT FUNCTION
// ============================================================

const importQuestions = async () => {
  const client = await pool.connect();

  try {
    console.log('✅ Connected to PostgreSQL');
    console.log(`📦 Preparing to import ${questions.length} questions...`);

    let imported = 0;
    let skipped = 0;
    let errors = 0;

    for (const q of questions) {
      try {
        const options = q.questionType === 'matching' ? [] : (q.options || []);
        const matchingPairs = q.questionType === 'matching' ? (q.matchingPairs || []) : [];

        await client.query(
          `INSERT INTO questions (
            "questionText",
            "questionType",
            options,
            "correctAnswer",
            "matchingPairs",
            department,
            topic,
            difficulty,
            explanation
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
          [
            q.questionText,
            q.questionType,
            JSON.stringify(options),
            q.correctAnswer || '',
            JSON.stringify(matchingPairs),
            q.department || 'programming',
            q.topic || 'General',
            q.difficulty || 'medium',
            q.explanation || ''
          ]
        );

        imported++;

        if (imported % 50 === 0) {
          console.log(`⏳ Progress: ${imported}/${questions.length} imported...`);
        }

      } catch (err) {
        console.error(`❌ Error inserting question: "${q.questionText.substring(0, 60)}..."`);
        console.error(`   Reason: ${err.message}`);
        errors++;
      }
    }

    console.log('\n============================================================');
    console.log('🎉 Import Complete!');
    console.log(`✅ Successfully imported: ${imported} questions`);
    console.log(`⚠️  Skipped (errors):    ${errors} questions`);
    console.log('============================================================');

    // Summary by topic
    const topicSummary = {};
    for (const q of questions) {
      topicSummary[q.topic] = (topicSummary[q.topic] || 0) + 1;
    }

    console.log('\n📊 Questions by Topic:');
    for (const [topic, count] of Object.entries(topicSummary)) {
      console.log(`   ${topic}: ${count} questions`);
    }

    // Summary by type
    const typeSummary = {};
    for (const q of questions) {
      typeSummary[q.questionType] = (typeSummary[q.questionType] || 0) + 1;
    }

    console.log('\n📊 Questions by Type:');
    for (const [type, count] of Object.entries(typeSummary)) {
      console.log(`   ${type}: ${count} questions`);
    }

  } catch (err) {
    console.error('❌ Fatal error during import:', err);
  } finally {
    client.release();
    process.exit(0);
  }
};

importQuestions();