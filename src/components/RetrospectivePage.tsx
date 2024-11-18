const RetrospectivePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">프로젝트 회고</h1>
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">S-FLEX</h2>

          <h3 className="text-xl font-semibold mb-2">진행 과정</h3>
          <p className="text-lg mb-4">
            React를 배우고 넷플릭스 클론코딩을 통해 React로 처음부터 끝까지 개발을 진행해 보았습니다.
          </p>

          <h3 className="text-xl font-semibold mb-2">배운 점</h3>
          <ul className="list-disc pl-6 text-lg mb-4">
            <li>Recoil을 통해 상태 관리를 하는 방법을 배웠습니다.</li>
            <li>`styled-components`를 사용하여 CSS를 적용하는 방법을 배웠습니다. </li>
            <li>리액트에서 컴포넌트를 분리하여 재사용성을 높이고, 가독성을 향상시킬 수 있었습니다.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">어려움과 해결책</h3>
          <p className="text-lg mb-4">
            초기에는 React 컴포넌트 구조와 상태 관리 방식을 이해하는 것과 긴 코드를 재사용 가능하도록 컴포넌트를
            분리하는 것에 어려움을 느꼈습니다. 이에 코드를 먼저 작성해보고, 분리할 수 있는 부분을 선별하여 컴포넌트를
            분리하는 연습을 진행했습니다.
          </p>

          <h3 className="text-xl font-semibold mb-2">결과 및 반성</h3>
          <p className="text-lg mb-4">
            배포하는 과정에서 GitHub에서 제공하는 배포 기능을 이용했더니, Node.js로 구현한 로그인 기능이 제대로 동작하지
            않았습니다. 이 부분을 고려해서 다른 방식으로 배포를 진행했으면 더 원활하게 동작했을 것 같습니다. 앞으로 배포
            방법에 있어 더 안정적이고 효율적인 방법을 찾아 개선할 필요가 있다고 느꼈습니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">운동 감자</h2>

          <h3 className="text-xl font-semibold mb-2">진행 과정</h3>
          <p className="text-lg mb-4">
            초기 기획 단계에서는 사용자의 요구 사항을 충족하는 기본적인 쇼핑몰 기능을 정의했습니다. 그 후, React로 UI를
            구성하고, Redux를 사용하여 상태 관리를 구현했습니다.
          </p>
          <h3 className="text-xl font-semibold mb-2">배운 점</h3>
          <ul className="list-disc pl-6 text-lg mb-4">
            <li>Redux를 사용하여 전역 상태를 관리하는 방법을 배웠습니다.</li>
            <li>API 요청을 통해 데이터를 동적으로 처리하는 방법을 익혔습니다.</li>
            <li>상품 목록을 동적으로 렌더링하고, 사용자 경험을 향상시키는 방법을 배웠습니다.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">어려움과 해결책</h3>
          <p className="text-lg mb-4">
            상태 관리에서 어려움을 겪었고, 특히 Redux를 제대로 활용하기까지 시간이 많이 걸렸습니다. 여러 번의 리팩토링을
            통해 안정적인 상태 관리 구조를 만들었습니다.
          </p>
          <h3 className="text-xl font-semibold mb-2">결과 및 반성</h3>
          <p className="text-lg mb-4">
            쇼핑몰 기능은 기본적인 수준에서 잘 구현되었으나, 성능 개선이나 사용자 경험을 더욱 향상시킬 필요가 있습니다.
            특히, 검색 기능을 더 강력하게 개선하고 싶습니다.
          </p>
        </div>
      </section>

      {/* 프로젝트 3 */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">프로젝트 3: 블로그</h2>
          <p className="text-lg mb-4">
            이 프로젝트는 개인 블로그를 만들어 콘텐츠 관리와 검색 기능을 추가하는 것이었습니다.
          </p>
          <h3 className="text-xl font-semibold mb-2">진행 과정</h3>
          <p className="text-lg mb-4">
            블로그 프로젝트에서는 Markdown을 이용한 글 작성 기능과 게시글 관리 시스템을 구현했습니다. 또한, 검색 기능을
            추가하여 사용자들이 더 쉽게 원하는 글을 찾을 수 있도록 했습니다.
          </p>
          <h3 className="text-xl font-semibold mb-2">배운 점</h3>
          <ul className="list-disc pl-6 text-lg mb-4">
            <li>Markdown을 사용하여 글을 작성하고, 이를 HTML로 변환하는 방법을 배웠습니다.</li>
            <li>React Router를 사용하여 페이지 간의 이동을 구현했습니다.</li>
            <li>검색 기능을 추가하여 더 나은 사용자 경험을 제공할 수 있었습니다.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">어려움과 해결책</h3>
          <p className="text-lg mb-4">
            검색 기능을 처음 구현할 때, 어떻게 최적화할지 고민이 많았습니다. 결국 API 요청을 비동기적으로 처리하고,
            사용자 입력에 따라 실시간으로 검색 결과를 보여주는 방법으로 해결했습니다.
          </p>
          <h3 className="text-xl font-semibold mb-2">결과 및 반성</h3>
          <p className="text-lg mb-4">
            블로그는 기본적인 검색 기능과 콘텐츠 관리를 잘 구현했지만, UI/UX 개선이 필요한 상태입니다. 또한, 블로그의
            관리 기능을 더 확장할 필요가 있습니다.
          </p>
        </div>
      </section>

      {/* 프로젝트 4 */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">프로젝트 4: 날씨 앱</h2>
          <p className="text-lg mb-4">
            이 프로젝트는 날씨 정보를 제공하는 간단한 날씨 앱을 만드는 것이었습니다. OpenWeather API를 사용하여 사용자의
            위치에 맞는 날씨를 실시간으로 표시했습니다.
          </p>
          <h3 className="text-xl font-semibold mb-2">진행 과정</h3>
          <p className="text-lg mb-4">
            사용자의 위치 정보를 가져오고, API를 호출하여 날씨 정보를 받아오는 방식으로 개발을 진행했습니다. 또한,
            사용자에게 직관적인 인터페이스를 제공하기 위해 디자인에 신경 썼습니다.
          </p>
          <h3 className="text-xl font-semibold mb-2">배운 점</h3>
          <ul className="list-disc pl-6 text-lg mb-4">
            <li>OpenWeather API를 활용하여 날씨 정보를 실시간으로 가져오는 방법을 배웠습니다.</li>
            <li>React에서 외부 API와 통신하는 방법을 익혔습니다.</li>
            <li>날씨 데이터를 사용자에게 시각적으로 잘 전달하는 방법을 배웠습니다.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">어려움과 해결책</h3>
          <p className="text-lg mb-4">
            API 호출 시 CORS 문제를 겪었으나, `proxy` 설정을 통해 해결했습니다. 또한, 사용자의 위치 정보를 어떻게
            정확하게 얻을 수 있을지 고민하다가 `navigator.geolocation`을 활용해 해결했습니다.
          </p>
          <h3 className="text-xl font-semibold mb-2">결과 및 반성</h3>
          <p className="text-lg mb-4">
            날씨 앱은 잘 작동하지만, 다양한 기능 추가가 필요합니다. 예를 들어, 주간 날씨 예보나 다른 국가의 날씨 정보
            제공 등을 고려할 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RetrospectivePage;
