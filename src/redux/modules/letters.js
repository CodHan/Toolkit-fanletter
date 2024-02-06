//리듀서는 두개의 매개변수를 받는다. state,action
//state의 초기값을 세팅한다. initialState
//액션 타입 정의
//팬레터 추가
const ADD_LETTER = 'letters/ADD_LETTER';
//팬레터 삭제
const DELETE_LETTER = 'letters/DELETE_LETTER';
//팬레터 수정
const UPDATE_LETTER = 'letters/UPDATE_LETTER';
const initialState = [
  {
    createdAt: '2024. 2. 2. 오후 11:04:42',
    nickname: '💪🏻내가 김강민이다',
    avatar:
      'data:image/jpeg;base64,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',
    content:
      '몸에 문신은 17살 무렵 15일에 걸쳐 300만원 들여서 했다고 한다. 당시 주먹 때문에 이름을 날리고 있었으며 중학교 졸업 후 고등학교에 진학하지 않았는데 싸움을 거는 사람이 많자 상대에게 위압감을 주어 싸움을 피할 목적으로 시술받았다고 한다. 2달 정도 걸릴줄알았는데 생각보다 문신이 잘되는 몸이었다고. 이 때문에 본인의 아버지에게 야구방망이로 몇대 맞았다고한다. 철든 뒤에는 항상 후회한다고 밝혔다. 최근 들어서 문신을 제거하는 시술을 받기 시작했다.',
    writedTo: '김강민',
    id: '1',
  },
  {
    createdAt: '2024. 1. 18. 오후 11:18:42',
    nickname: '나 김건우 3대 810kg다.',
    avatar:
      'data:image/jpeg;base64,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',
    content:
      '운동을 시작하기 전에는 60kg 대의 몸무게였지만, 학창시절부터 강함과 몸에 대한 갈망을 목표로 보디빌딩을 시작하여 현재의 100kg 대의 몸을 만들었다고 한다, 나바 소속 보디빌더 김강민과 동갑이고, 평소 서로의 유튜브에 꾸준히 출연하며 친한 모습을 보인다,3대 중량은 영상에서 확인된 중량을 기준으로 벤치 프레스 200kg + 스쿼트 310kg + 데드리프트 300kg 총합 810kg이다.',
    writedTo: '김건우',
    id: '2',
  },
  {
    createdAt: '2023. 12. 25. 오전 09:00:10',
    nickname: '나 올림피아 10등',
    avatar:
      'data:image/jpeg;base64,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',
    content: '이하 생략.',
    writedTo: '박재훈',
    id: '3',
  },
  {
    createdAt: '2024. 1. 1. 오후 01:10:42',
    nickname: '개그맨',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFMaBVr1NjpG9lbC_6rZvXLHK1_RgvaeIVQ&usqp=CAU',
    content:
      '유튜브 채널에서 우스꽝스러운 모습을 보이지만 운동 지식에 조예가 깊고 , 상당한 브레인이다,3대 운동 중량은 벤치 180kg+스쿼트 280kg+데드리프트 280kg으로 총합 740kg',
    writedTo: '장성엽',
    id: '4',
  },
  {
    createdAt: '2024. 1. 18. 오후 11:18:42',
    nickname: '무서운 사람 아니에요',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAod_NvYmc68mHB6ljlsYxTHGWb5og0isFNA&usqp=CAU',
    content:
      'G63 AMG를 소유중이며 브라부스 튜닝을 했다고 한다 또한 람보르기니 우루스와 페라리 F8 트리뷰토도 소유중이다, 과거에는 직수로 가져온 중고차인 R8스파이더를 소유했으며 지금은 판매한 것으로 알려져있다, 그외에도 8천만원의 롤렉스 요트마스터 금통시계를 소유하고 있고 최근에는 1억이 넘는 바쉐론 콘스탄틴 시계도 구입하였다고 한다.',
    writedTo: '김강민',
    id: '5',
  },
];
export const addLetter = (payload) => {
  return { type: ADD_LETTER, payload };
};
export const deleteLetter = (payload) => {
  return { type: DELETE_LETTER, payload };
};
export const updateLetter = (payload) => {
  return { type: UPDATE_LETTER, payload };
};

//리듀서 함수
const letters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      const newLetter = action.payload;
      return [newLetter, ...state];
    case DELETE_LETTER:
      const letterId = action.payload;
      return state.filter((item) => item.id !== letterId);
    case UPDATE_LETTER:
      const { id, update } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, content: update };
        }
        return item;
      });
    default:
      return state;
  }
};

export default letters;
