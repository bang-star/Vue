# Vue

## Vue 설치

`npm install vue` 명령어를 통해 설치할 수 있지만, 윈도우에서는 vue version을 확인할 수 없다. 폴더 내에서만 뷰가 설치된 상태이기 때문이다.

이러한 문제를 해결하기 위해서는 `npm install -g @vue/cli`을 통해 전역적으로 vue를 설치해주어야 한다.

<br />

## Vue devtools 설치

크롬 브라우저 환경에서 뷰 컴포넌트를 확인할 수 있는 도구이다.

 - 설치 주소: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

<br />

## Framework

어플리케이션을 구축 및 배포하는 표준 방법을 제공하며 소프트웨어 응용 프로그램, 제품 및 솔루션의 개발을 용이하게 하기 위해 더 큰 소프트웨어 플랫폼의 일부로 특정 기능을 제공하는 보편적이고 재사용 가능한 소프트웨어 환경입니다.

그 중에서도 웹 프레임워크(Web framework) 또는 웹 애플리케이션 프레임워크(Web application framework)는 웹 서비스 개발을 위한 프레임워크다.

> 프레임워크는 소프트웨어를 구축할 수 있는 구조입니다. 기초 역하을 하므로 처음(Scratch)부터 완전히 시작하지 않습니다. 프레임워크는 일반적으로 특정 프로그래밍 언어와 연결되며 다야한 유형의 작업에 적합합니다.

> 생산성 - 시간이 절약되고 오류 위험이 줄어듭니다. 처음부터 모든 것을 작성할 필요가 없으므로 오류가 발생할 가능성이 적습니다.

- 더 안전한 코드(secure code)
- 더 간단한 테스트 및 디버깅(simpler test, debugging)
- 중복 코드 방지(avoid duplicate code)
- 깨끗하고 쉽게 적용 가능한 코드(clean, adaptable code)
- 프로젝트에 특정한 코드 작성에 집중(focusing on specific code)
- 확장성(extensibility)

<br />

## SPA(Single Page Application)

SPA(단일 페이지 응용 프로그램)은 웹 브라우저가 전체 새 페이지를 로드하는 기본 방법 대신 웹 서버의 새 데이터로 현재 웹 페이지를 동적으로 다시 작성하여 사용자와 상호 작용하는 웹 응용 프로그램 또는 웹 사이트입니다. 목표는 웹 사이트를 네이티트 앱처럼 느끼게 하는 더 빠른 전환입니다.

SPA에서는 페이지 새로 고침이 발생하지 않습니다. 대신에 필요한 모든 HTML, JavaScript 및 CSS 코드는 단일 로드되어 페이지에 추가됩니다.

 - 대표 SPA : Vue.js, ReactJS, SVELTE, AngularJS


### SPA vs MPA

SPA(단일 페이지 응용 프로그램)은 웹 브라우저가 전체 새 페이지를 로드하는 기본 방법 대신 웹 서버의 새 데이터로 현재 웹 페이지를 업데이트한다.

1. SPA

    - 웹에 필요한 모든 정적 리소스를 최초 한 번에 다운로드
    - SEO(Search Engine Optimization)에 취약
    - 첫 로딩이 비교적 느림
    - 웹 사용자 경험(UX)
    - 서버의 템플릿 연산을 클라이언트 분산으로, 성능 우위
    - 컴포넌트별 개발 우위(재사용성)

2. MPA

    - 새로운 페이지를 요청할 때마다 정적 리소스가 다운로드
    - SEO(Search Engine Optimization)에 유리(완성된 HTML 파일)
    - 첫 로딩이 매우 빠름
    - 페이지 라우팅(주소)가 바뀔 때 마다 재요청
    - 서버렌더링으로 인한 성능 이슈 가능성

<br />

## Vanilla JS

Vue, React, Angular와 같은 web framework 또는 jQuery와 같은 라이브러리 대신 자바스크립트를 순수하게 사용하는 방법


- 컴퓨터 소프트웨어 및 때로는 컴퓨터 하드웨어 또는 알고리즘과 같은 기타 컴퓨팅 관련 시스템이 원래 형태에서 커스터마이징 되지 않은 경우

- "바닐라"는 "보통"보다는 "기본"을 더 의미

- 라이브러리 또는 써드파티 플러그인을 쓰지 않는 경우

<br />

## Vue.js 란?

Vue는 사용자 인터페이스를 만들기 위한 프로그레시브 프레임워크입니다. 다른 단일형 프레임워크와 달리 Vue는 점진적 채택할 수 있도록 설계하였습니다. 핵심 라이브러리는 뷰 레이어만 초점을 맞추어 다른 라이브러리나 기존 프로젝트와의 통합이 매우 쉽습니다. 그리고 Vue는 현대적 도구 및 지원하는 라이브러리와 함께 사용한다면 정교한 단일 페이지 응용프로글매을 완벽하게 지원할 수 있습니다.

 - 웹을 개발하는 프레임워크 중 하나!
 - React.js, Vue.js, Angular JS
 - JQuery

<br />

## Hello, Vue World

1. 프로젝트 만들기 - vue cli

2. 프로젝트 만들기 - vue ui