import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <div>
          <p>닉네임:</p>
          <input
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
          />
        </div>
        <div>
          <p>내용:</p>
          <input
            type="text"
            placeholder="최대 100글자까지 작성할 수 있습니다."
          />
        </div>
        <div>
          <label>누구에게 보내실 건가요?</label>
          <select>
            <option>최원장</option>
            <option>권혁우</option>
            <option>윤창식</option>
            <option>유한빈</option>
          </select>
        </div>
        <button>팬레터 등록</button>
      </form>
    </div>
  );
}

export default Form;
