# seohompy

#### 프로젝트 개요: seohompy는 나 자신을 소개하고, 개발자로 성장하기 위해 어떤 과정을 거쳤는지, 어떤 프로젝트를 진행했는지 정리한 포트폴리오 블로그입니다. 이 블로그는 React, TypeScript, Tailwind CSS, Supabase, 그리고 Vercel을 활용해 개발되었으며, 개발자로서의 역량과 성장을 한눈에 확인할 수 있는 공간을 제공하고자 합니다.
---

## 목차

- [기능](#기능)
- [사용 기술](#사용-기술)
- [프로젝트 구조](#프로젝트-구조)
- [기여](#기여)
- [라이선스](#라이선스)

---

## 기능

1 . Main & About 컴포넌트:

| < Main > | < About > |
|:------------:|:----------:|
| <img src="https://velog.velcdn.com/images/leeeee/post/7bdc3eae-1c8d-428f-93f2-97ff49714370/image.png" alt="main" width="500"/> | <img src="https://velog.velcdn.com/images/leeeee/post/6dcb136e-f13b-44bd-ab59-bfdcb1e93af0/image.png" alt="about" width="500"/> |


- 메인 컴포넌트: 사이트에 처음 접속 시 렌더링되는 기본 컴포넌트입니다. 사용자가 스크롤을 내리면 네비게이션 바(nav)가 화면의 최상단에 도달할 때 고정되며, 이후 네비게이션 기능을 제공합니다.
- About 컴포넌트: 나를 소개하는 컴포넌트로, 카드 형식으로 제공됩니다. 사용자가 카드를 클릭하면 카드가 뒤집히면서 해당 카드의 내용이 표시됩니다.


2 . Skill & Project 컴포넌트:

| **< Skill >** | **< Project >** |
|:---------:|:-----------:|
| ![Skill](https://velog.velcdn.com/images/leeeee/post/62bd4282-555c-40a5-8bab-3fac7f44d63d/image.png) | ![Project](https://velog.velcdn.com/images/leeeee/post/20c1084a-fd2e-4939-b00a-238f801ade94/image.png) |

- **Skill 컴포넌트**: `About` 섹션에 포함되는 컴포넌트로, 지금까지 사용해본 기술 스택을 정리한 페이지입니다. 각 기술을 선택하면 해당 기술 및 스택에 대한 정보가 강조되어 표시됩니다. 이 기능은 사용자가 기술을 선택할 때 더 명확한 정보를 제공하기 위해 추가되었습니다.
- **Project 컴포넌트**: 그동안 진행한 프로젝트를 정리한 페이지로, 각 프로젝트에 대한 간단한 설명과 함께 GitHub 주소 및 배포 주소를 확인할 수 있습니다. 이를 통해 사용자가 참여한 프로젝트의 내용과 작업을 쉽게 살펴볼 수 있습니다.



3 .  Education & Connect 컴포넌트:

| **Education** | **Connect** |
|:-------------:|:-----------:|
| ![Education](https://velog.velcdn.com/images/leeeee/post/fd1c126a-7bd3-4960-8765-b417883ce270/image.png) | ![Connect](https://velog.velcdn.com/images/leeeee/post/c04bae31-aee5-42e1-9280-d78712faaf78/image.png) |

- **Education 컴포넌트**: 지금까지의 학습 기록을 정리한 컴포넌트입니다. 대학교에서의 학업부터 짧은 프로젝트 캠프, 그리고 예정된 캠프까지 포함되어 있습니다. 짧지만 의미 있는 경험들을 담은 일대기입니다.
- **Connect 컴포넌트**: 나와 연결할 수 있는 방명록 컴포넌트입니다. 방명록을 작성하거나, 벨로그, GitHub, 이메일 등을 통해 다양한 방법으로 나와 소통할 수 있습니다.

---

## 사용 기술

### 프론트엔드

- React: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리.
- TypeScript: JavaScript의 상위 집합으로 타입을 지원하는 언어.
- Tailwind CSS: 클래스 기반의 유연한 스타일링을 제공하는 CSS 프레임워크.
- Vercel: 서버리스 배포 플랫폼으로, 프로젝트를 손쉽게 배포하고 관리할 수 있도록 지원합니다.

백엔드

- Supabase: 프로젝트와 방명록 관리를 위해 사용한 데이터베이스.

---

## 프로젝트 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂education
 ┃ ┣ 📂main
 ┃ ┣ 📂navigation
 ┃ ┗ 📂skill
 ┃ ┃ 
 ┣ 📂components
 ┃ ┣ 📜Card.tsx
 ┃ ┣ 📜EducationSection.tsx
 ┃ ┣ 📜Guestbook.tsx
 ┃ ┣ 📜ProjectCard.tsx
 ┃ ┣ 📜SkillfulSection.tsx
 ┃ ┗ 📜TopBar.tsx
 ┣ 📂pages
 ┃ ┣ 📜About.tsx
 ┃ ┣ 📜Connect.tsx
 ┃ ┣ 📜Education.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜NavComponent.tsx
 ┃ ┗ 📜Project.tsx
 ┣ 📂styles
 ┃ ┣ 📜index.css
 ┃ ┗ 📜swiper.css
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┣ 📜supabaseClient.ts
 ┗ 📜vite-env.d.ts
```

---

### ☄️ 트러블 슈팅


[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=leeeee)](https://velog.io/@leeeee/%EB%82%98%EC%9D%98-%EB%AF%B8%EB%8B%88%ED%99%88%ED%94%BC-nav-%EB%AC%B4%ED%95%9C%EB%A1%9C%EB%94%A9)
 

---

### 기여

커뮤니티의 기여를 환영합니다. 레포지토리를 포크하고 개선 사항이나 버그 수정을 위한 풀 리퀘스트를 제출해주시면 감사하겠습니다 :)

---

### 라이선스

프로젝트는 MIT 라이선스를 따릅니다. 자세한 사항은 LICENSE 파일을 참조하세요.

Vercel 배포 주소: [seohompy](https://seohompy.vercel.app/)
