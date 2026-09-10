import { PersonalInfo, EducationItem, LicenseItem, ExperienceItem, CompetencyItem, TrainingItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: '송경은',
  englishName: 'Gyeong-eun Song',
  role: '초등특수학급 담임교사',
  grade: '특수학교교사 (공립)',
  school: '서울백운초등학교',
  districtOffice: '서울특별시북부교육지원청',
  cityOffice: '서울특별시교육청',
  position: '담임교사',
  payGrade: '20호봉 (2026년 기준)',
  appointmentDate: '2019.03.01',
  totalExperience: '10년차',
  email: 'kessong77@sen.go.kr',
};

export const educations: EducationItem[] = [
  {
    degree: '특수교육학 석사 (초등특수교육)',
    institution: '단국대학교 특수교육대학원',
    major: '특수교육 전공 (초등특수교육)',
    period: '2021.03 ~ 2023.08',
    graduationDate: '2023.08 학위 취득',
    credits: '42.00학점',
    gpa: '4.41 / 4.5',
    details: [
      '초등특수교육 교육과정 및 개별화교육계획(IEP) 연구',
      '전공 심화 학점 42학점 이수 및 전 학기 우수 평점(4.41/4.5) 달성',
      '특수교육공학 및 에듀테크 기반 수업 설계 연구',
    ],
  },
  {
    degree: '특수교육학 학사',
    institution: '대학(교) 졸업 (나사렛대학교 사범계열)',
    major: '특수교육 전공',
    period: '2008.03 ~ 2012.02',
    graduationDate: '2012.02 졸업',
    details: [
      '특수학교(초등) 정교사 2급 자격 무시험 검정 취득',
      '초등특수교육 교육과정, 장애아동 진단 및 평가, 통합교육론 이수',
    ],
  },
];

export const licenses: LicenseItem[] = [
  {
    title: '특수학교(초등) 정교사 1급',
    issuer: '서울특별시교육청',
    issueDate: '2021.08.23',
    type: '1급 정교사',
  },
  {
    title: '특수학교(초등) 정교사 2급',
    issuer: '나사렛대학교',
    issueDate: '2012.02.09',
    type: '2급 정교사',
  },
];

export const experiences: ExperienceItem[] = [
  {
    organization: '서울백운초등학교',
    period: '2024.03.01 ~ 현재',
    role: '초등특수학급 담임교사',
    isCurrent: true,
    description: '개별화교육지원팀 운영, 초등 특수학급 담임 및 통합학급 협력교수',
    highlights: [
      '생성형 AI 및 캔바(Canva)를 결합한 개별화 맞춤형 학습지 개발 및 적용',
      '하루 10분 감정 리추얼을 통한 학급 내 사회정서학습(SEL) 정착',
      '통합학급 담임교사와의 원활한 협력교수 및 긍정적 행동지원(PBS) 실천',
    ],
  },
  {
    organization: '서울시 교육청 관내 초등학교',
    period: '2019.03.01 ~ 2024.02.29',
    role: '특수학급 담임교사 (공립)',
    isCurrent: false,
    description: '공립 초등특수교사 최초 임용 후 특수학급 운영 및 기초학력 지도',
    highlights: [
      '읽기·쓰기·셈하기(3R) 기초학력 부진 특수교육대상학생 집중 지원',
      '특수학교(초등) 정교사 1급 자격 취득(2021.08)',
      '단국대 특수교육대학원 석사 과정 병행 및 우수 졸업(평점 4.41)',
      '학부모 심층 상담 및 위기 행동 중재 지원 체계 구축',
    ],
  },
];

export const competencies: CompetencyItem[] = [
  {
    id: 'ai-edtech',
    number: '01',
    title: 'AI 및 디지털 에듀테크 활용 수업',
    subtitle: 'Digital EdTech & AI Literacy in Special Education',
    summary:
      '생성형 AI와 캔바(Canva)를 활용하여 장애학생 개별 학습 수준에 최적화된 맞춤형 학습지와 직관적 교수자료를 신속하게 제작하며, 데이터 리터러시를 결합한 미래형 특수교육을 실천합니다.',
    iconName: 'Sparkles',
    points: [
      '생성형 AI 프롬프트 엔지니어링을 통한 쉬운 읽기 자료(Easy-Read) 및 낱말 카드 생성',
      'Canva 디자인 툴을 활용한 시각 지원(Visual Cue) 및 고대비 맞춤형 교수자료 제작',
      '특수교육 현장의 디지털 기기(태블릿, 인터랙티브 보드) 연계 자기주도 학습 환경 조성',
      '학생별 학습 데이터 수집 및 데이터 리터러시 기반 성취도 모니터링',
    ],
    actionItems: [
      '생성형 AI 맞춤 학습지 자동화 제작',
      '멀티모달 시각 자료 및 AAC 보완대체의사소통 연계',
      '데이터 기반 개별화 학습 성취도 분석',
    ],
    tags: ['생성형 AI', 'Canva', '데이터 리터러시', '에듀테크', '맞춤형 학습지'],
  },
  {
    id: 'sel-pbs',
    number: '02',
    title: '사회정서학습(SEL) & 긍정적 행동중재(PBS)',
    subtitle: 'Social Emotional Learning & Positive Behavior Support',
    summary:
      '행동중재 전문가 과정을 기반으로 개별화 행동지원 플랜(PBS)을 설계하고, 하루 10분 감정 리추얼을 통해 학생이 스스로 감정을 인식하고 건강하게 조절하는 포용적 학급을 운영합니다.',
    iconName: 'HeartHandshake',
    points: [
      '행동의 기능(기능평가 FBA) 분석을 바탕으로 한 개별화 긍정적 행동지원 플랜(PBS) 수립',
      '매일 아침 감정 체크인(Emotion Check-in) 및 하루 10분 감정 리추얼로 심리적 안정감 제공',
      '학교 안 미술치료 및 공감 대화 기법을 적용한 정서 표현 훈련',
      '자폐성장애 및 발달장애 학생의 도전적 행동 예방 및 대체행동 교수',
    ],
    actionItems: [
      '긍정적행동지원(PBS) 기반 생활지도',
      '감정 신호등 및 시각적 이완 코너(Calm-down Corner) 구축',
      '통합학급 연계 또래 공감 및 포용 프로젝트 운영',
    ],
    tags: ['행동중재(PBS)', '하루 10분 감정 리추얼', '사회정서학습(SEL)', '미술치료', 'FBA'],
  },
  {
    id: 'curriculum-mastery',
    number: '03',
    title: '특수교육 교육과정 & 기초학력 지도',
    subtitle: 'Curriculum Assessment & Basic Skills Mastery',
    summary:
      '초등 과정 중심 평가와 3R(읽기·쓰기·셈하기) 기초학력 지도 노하우를 바탕으로, 장애학생 인권 보장, 성교육, 학부모 상담을 체계적으로 연계하여 전인적 성장을 견인합니다.',
    iconName: 'BookOpenCheck',
    points: [
      '초등 기본 교육과정 및 공통 교육과정 재구성을 통한 실생활 중심 배움 설계',
      '읽기 유창성, 파닉스, 기초 셈하기 부진학생을 위한 다감각(Multi-sensory) 학습 지원',
      '장애학생 맞춤형 성교육 및 인권 친화적 학급 환경 조성',
      '전문적인 학부모 상담 스킬 및 가족 지원을 통한 교사-가정 간 신뢰 구축',
    ],
    actionItems: [
      '과정 중심 상시 평가 및 포트폴리오 피드백 체계화',
      '3R 기초학력 진단 및 단계별 개별화 클리닉 운영',
      '학교상담 기법 적용 학부모 정기 상담 세션',
    ],
    tags: ['기초학력(3R)', '과정 중심 평가', '장애학생 인권·성교육', '학부모 상담', 'IEP'],
  },
];

export const trainingCourses: TrainingItem[] = [
  // 1. AI · 에듀테크 & 미래교육 (7개)
  {
    id: 't-ai-01',
    title: '2026 AI와 함께하는 포용적 사회정서학습교실 직무연수',
    hours: 15,
    institution: '서울특별시교육청',
    category: 'ai-edtech',
    year: '2026',
    description: 'AI 도구와 결합한 특수학급 및 통합학급의 포용적 감정 코칭 및 사회정서 프로그램 실천',
  },
  {
    id: 't-ai-02',
    title: '어서와, 데이터 AI 리터러시 맛집은 처음이지',
    hours: 15,
    institution: '티처빌',
    category: 'ai-edtech',
    year: '2025',
    description: '교육 데이터 수집 및 분석 기초, 교실 속 AI 리터러시 함양을 위한 실무 지도법',
  },
  {
    id: 't-ai-03',
    title: '특수교사의 디지털기술 활용 수업 역량 강화',
    hours: 8,
    institution: '국립특수교육원',
    category: 'ai-edtech',
    year: '2024',
    description: '보완대체의사소통(AAC), 보조공학기기, 태블릿 기반 특수교육 수업 실습',
  },
  {
    id: 't-ai-04',
    title: '생성형 AI와 캔바를 활용한 나만의 학습지 만들기',
    hours: 15,
    institution: '서울시청자미디어센터',
    category: 'ai-edtech',
    year: '2024',
    description: 'ChatGPT, Midjourney 프롬프트 및 Canva 레이아웃을 접목한 특수교육 맞춤형 워크시트 제작',
  },
  {
    id: 't-ai-05',
    title: '실전 AI! 인공지능으로 미래 교육을 디자인하다',
    hours: 15,
    institution: '티처빌',
    category: 'ai-edtech',
    year: '2024',
    description: '프롬프트 디자인, AI 보조교사 챗봇 세팅, 수업 시나리오 기획 및 실행',
  },
  {
    id: 't-ai-06',
    title: '미래교육을 위한 데이터 입문하기, 가장 쉬운 빅데이터',
    hours: 15,
    institution: '티처빌',
    category: 'ai-edtech',
    year: '2023',
    description: '학습 로그 및 교육 통계 데이터 해석 기법, 증거기반(Evidence-based) 지도 방안',
  },
  {
    id: 't-ai-07',
    title: '교원을 위한 인공지능(AI) 첫걸음',
    hours: 5,
    institution: '티처빌',
    category: 'ai-edtech',
    year: '2023',
    description: '인공지능의 원리와 윤리, 교육 현장 도입을 위한 기본 소양',
  },

  // 2. 행동중재, 상담 & 사회정서학습 (6개)
  {
    id: 't-sel-01',
    title: '교사와 학생 모두를 위한 사회정서학습, 하루 10분 감정 리추얼',
    hours: 15,
    institution: '아이스크림',
    category: 'sel-pbs',
    year: '2024',
    description: '교사와 학생의 정서적 소진 예방, 교실 속 매일 10분 감정 단어 및 이완 리추얼 운영',
  },
  {
    id: 't-sel-02',
    title: '2023 행동중재 전문가 되기(기본) 직무연수',
    hours: 15,
    institution: '서울특별시교육청',
    category: 'sel-pbs',
    year: '2023',
    description: '기능적 행동평가(FBA), 개별화 긍정적 행동지원(PBS) 계획서 수립 및 위기 중재 프로토콜',
  },
  {
    id: 't-sel-03',
    title: '공감·동행을 위한 학교상담기법',
    hours: 15,
    institution: '국립특수교육원',
    category: 'sel-pbs',
    year: '2022',
    description: '경청과 반영적 질문, 해결중심 단기상담, 학교 부적응 학생 심리적 라포 형성',
  },
  {
    id: 't-sel-04',
    title: '교사를 위한 학교 안 미술치료 활동',
    hours: 15,
    institution: '서울특별시교육청',
    category: 'sel-pbs',
    year: '2022',
    description: '비언어적 감정 표현, 점토 및 콜라주 기법을 활용한 특수아동 내면 탐색 및 스트레스 완화',
  },
  {
    id: 't-sel-05',
    title: '교원을 위한 자폐성장애학생 부모 상담 방법',
    hours: 10,
    institution: '국립특수교육원',
    category: 'sel-pbs',
    year: '2021',
    description: '자폐스펙트럼 장애 특성 이해, 부모의 수용 단계별 맞춤 소통과 가정 연계 행동지원',
  },
  {
    id: 't-sel-06',
    title: '미션! 알짜 학부모 상담 스킬',
    hours: 15,
    institution: '서울특별시교육청',
    category: 'sel-pbs',
    year: '2020',
    description: '신뢰감을 주는 상담 화법, 갈등 예방 및 협력적 교육 파트너십 구축 전략',
  },

  // 3. 특수교육 수업전문성 & 학급경영 (7개)
  {
    id: 't-cur-01',
    title: '2021년 하계 특수학교(초등) 정교사 1급 자격연수',
    hours: 100,
    institution: '강남대학교 교육대학원',
    category: 'curriculum-mgmt',
    year: '2021',
    description: '특수교육 정책, 초등 특수교과 지도 전문성, 통합학급 협력교수, 학급 경영 전반 심화 (100시간)',
  },
  {
    id: 't-cur-02',
    title: '슬기쌤의 슬기로운 열두 달 학급경영 (고학년)',
    hours: 30,
    institution: '아이스크림',
    category: 'curriculum-mgmt',
    year: '2023',
    description: '월별 특수학급 운영 루틴, 초등 고학년 특수교육 대상학생 자립 및 생활지도 체계',
  },
  {
    id: 't-cur-03',
    title: '(특수) 알·쓸·신·특 (알면 쓸 수 있고 신장되는 특수교육 전문성)',
    hours: 15,
    institution: '중앙교육연수원',
    category: 'curriculum-mgmt',
    year: '2022',
    description: '개별화교육계획(IEP) 작성 지침, 특수교육 관련 법령, 진로직업 전환교육 실무',
  },
  {
    id: 't-cur-04',
    title: '15色 보석같은 수업 레시피',
    hours: 15,
    institution: '국립특수교육원',
    category: 'curriculum-mgmt',
    year: '2021',
    description: '장애유형별 수업 흥미 유발 및 감각통합 연계 활동 수업 레시피 적용',
  },
  {
    id: 't-cur-05',
    title: '통통통, 통합교육으로 통하는 통로',
    hours: 15,
    institution: 'EBS',
    category: 'curriculum-mgmt',
    year: '2020',
    description: '일반교사와 특수교사의 원활한 협력교수 모델(Co-teaching)과 장애이해교육 활성화',
  },
  {
    id: 't-cur-06',
    title: '현장에서 들려주는 특수교육 수업 설계/활용/레시피 시리즈',
    hours: 60,
    institution: 'EBS',
    category: 'curriculum-mgmt',
    year: '2020~2022',
    description: '국어·수학·통합교과 초등특수 실천 중심 수업 설계 및 교재교구 제작 역량 (총 60시간 이수)',
  },
  {
    id: 't-cur-07',
    title: '특수교육 수업전문성 향상 / 역량강화 시리즈',
    hours: 60,
    institution: '국립특수교육원',
    category: 'curriculum-mgmt',
    year: '2019~2023',
    description: '초등 과정 중심 평가, 장애학생 인권 보호 및 기초학력 부진 지도 전문성 강화 (총 60시간 이수)',
  },
];

export const educationalPhilosophies = [
  {
    title: 'AI & 에듀테크 기반의 개별화',
    subtitle: 'Digital Equity for Every Learner',
    desc: '기술은 장애학생의 장벽을 낮추는 가장 강력한 도구입니다. 생성형 AI와 디지털 교수자료를 통해 학생 개개인의 인지적 속도와 강점에 꼭 맞춘 배움을 실현합니다.',
  },
  {
    title: '하루 10분 감정 리추얼 & 긍정적 행동지원(PBS)',
    subtitle: 'Nurturing Emotional Safety & Regulation',
    desc: '마음의 안정이 먼저 이루어질 때 진정한 배움이 시작됩니다. 감정을 억누르는 대신 인식하고 표현하는 루틴을 통해 자존감과 자기조절력을 키웁니다.',
  },
  {
    title: '한 명도 소외되지 않는 완전한 통합교육',
    subtitle: 'Inclusive Community with Empathy & Trust',
    desc: '특수학급을 넘어 일반학급과 학교 공동체 전체가 다양성을 편견 없이 받아들이고, 서로의 손을 맞잡는 따뜻한 통합의 통로를 만듭니다.',
  },
];
