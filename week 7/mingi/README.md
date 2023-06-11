# TodoList

![image](https://github.com/BangDori/FE-JavaScript-Study/assets/44726494/a865ed4f-f0f6-4396-91ac-3d05a57c94c1)

## 기능
1. 타이머 기능
2. 투두리스트
	- 추가 (Enter, Button)
	- ToggleBox
	- 삭제
	- 수정
	- 중복 체크, 공백 체크
	- 전체 삭제

3. View
	- 모두 보기
	- 남은 일
	- 끝낸 일

## 피드백
<details>
  <summary>2023-06-09</summary>

	- 홈페이지 접속시 바로 시간 업데이트 되도록
	- 수정 시, 엔터키 입력 됐을 때 비활성화
	- 수정 시, 중복
	- 카테고리 버튼 클릭시, 활성화 이벤트 이동 (selected)
	- 설계문제
		- 최상위 app.js -> timer / todos / event
		- 시계 timer.js
		- 할일 기능 -> 추가/토글/수정/삭제 todos.js
		- 렌더 -> All/Active/Completed/Clear (Selected) event.js

</details>
 

## 후기
 - 아직 생성되지 않은 태그에 대한 이벤트리스너
 - 설계가 중요하다
 - Map 자료구조로 했는데 다음에는 배열로 해보자
 - html,css가 주어진 상태에서 js만 짜다보니까 재밋다
 - html로 출력할 때 렌더링 메서드가 중요하다.
