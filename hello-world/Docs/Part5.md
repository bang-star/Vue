# Part5

## 싱글 파일 컴포넌트

### 싱글 파일 컴포넌트

많은 Vue 프로젝트에서, 전역 컴포넌트는 Vue.component를 사용해 정의되고, 다음에 모든 페이지의 container 엘리먼트를 대상으로 하는 new Vue({el: '#container'})가 정의됩니다.

- 전역 정의: 모든 구성 요소에 대해 고유한 이름을 지정하도록 강요됩니다.
- 문자열 템플릿: 구문 강조가 약해 여러 줄로 된 HTML에 보기 안좋은 슬래시가 많이 필요합니다.
- CSS 지원 없음: HTML 및 javascript 가 컴포넌트로 모듈화 되어 있으나 CSS가 빠져 있는 것을 말합니다.
- 빌드 단계 없음: Pug (이전의 Jade) 및 Babel 과 같은 전처리기가 아닌 HTML 및 ES5 JavaScript로 제한됩니다.