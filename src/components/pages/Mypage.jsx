import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as H from '../style/commonsStyle/Header.style';
import { useDispatch, useSelector } from 'react-redux';
import { __getUser, __updateUser } from '../../redux/modules/authSlice';
import { useNavigate } from 'react-router-dom';

function Mypage() {
  const [updateNickName, setUpdateNickName] = useState();
  const [file, setFile] = useState();
  const [changeImage, setChangeImage] = useState();
  const [updateMod, setUpdateMod] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const { user, error } = useSelector((state) => state.authSlice);
  //새로고침, error대응
  useEffect(() => {
    dispatch(__getUser());
  }, []);
  if (error) {
    alert(error.response.data.message);
    navigate('/');
    localStorage.removeItem('token');
  }
  const handleCancelBtn = () => {
    const confirm = window.confirm(
      '변경 취소 하시겠습니까? 변경사항이 저장되지 않습니다.'
    );
    if (confirm) {
      setUpdateMod(false);
      setChangeImage();
    }
    return;
  };
  //이미지 클릭
  const imageUpdate = () => {
    fileInputRef.current.click();
  };
  //input 실행
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const reder = new FileReader();
    reder.onload = () => {
      if (reder.readyState === 2) {
        setChangeImage(reder.result);
      }
    };
    reder.readAsDataURL(e.target.files[0]);
  };
  //수정완료 버튼
  const handleUpdateBtn = () => {
    if (!updateNickName) {
      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('nickname', user.nickname);
      dispatch(__updateUser(formData));
    } else {
      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('nickname', updateNickName);
      dispatch(__updateUser(formData));
    }
  };
  return (
    <>
      <H.HeaderNav>
        <H.LinkStyle to={'/mainpage'}>HOME</H.LinkStyle>
        <H.MYPAGE>
          <H.LinkStyle to={'/mypage'}>MY PAGE</H.LinkStyle>
          <H.LogOutLink to={'#'}>LOGOUT</H.LogOutLink>
        </H.MYPAGE>
      </H.HeaderNav>
      <Section>
        <Container>
          {/* 업데이트 모드일때 onClick이 있는 프로필을 보여준다. */}
          {updateMod ? (
            // 계정의 아바타가 없을때 기본이미지
            !user.avatar ? (
              <UserImage
                src={
                  changeImage
                    ? changeImage
                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAAA+Pj6+vr7o6OhLS0vCwsJfX18lJSXl5eUgICAbGxvb29vLy8suLi4xMTGysrLv7++Li4ugoKB5eXmDg4NoaGgODg5GRkbV1dWZmZmnp6cUFBT29va4uLg2NjZVVVUD9+FsAAACvklEQVR4nO3c61KjMBiAYQ6thFMpikBPtvd/ldZZVyEkthHSIfg+P9kxfK+7UxhK1vMAAAAAAAAAAAAAAAAAAAAALFK+VQhjm6eMQ9U589HrZq1IFRKxn2Bojb1IVOcUbTZu3bLwdcJpJh8KtacsylEL77QL+9FEsw9E+nPuRi38pF94PdHsA2v9OZ9GLUzMSLZjqpeOvXhEjNh3z1lNGNP75CqDR8QEvU+u0FbM6jExq+6x38TEWV98mFfMYTCgdpWnTSJL5xWTDgbcaP6yfrhAziVGRX0hrdyMqZSL6G/DZh1TKBfZuBmz+Ssxx9fnjnpeMXV3ttfjzRiRnTre5hXz1p0tE7djetehOd8BxMQQ83vEyIixgBgZMRYQIzubxVwmmVzhYhZz7h47Pa+DD61vFtO0gRVtYxbj/5tj/Xy6HvL77o6x7P6YL/HgmbvDMZHXSEccjmk8eRGHY/wlxjRJIkxjxODx4iSEacx1jqYXU+dZbHjRbOXnvhOJW7OYTZzldS+mKl2+AygrYoh5eMzp/4Nz52KK6+1lP6YO850wiwlySwKzGLHLw/6nWZOmiW8W4ytfcBnvc477rzPXOfrXmW8LuAP45nTMUTrgcMzRq6UjDsfUXikdcTjm452Olzr6UDdmMWlkSWoW03yO/9L9s0U8nfni7u2MAjEWECMjxgJiZMRYQIxsiTFZ2bGdV8y2O9sdbzU1VVc0r5ioN1xzM0ZpLjEqfyBmUW/PLuq95szNGM2uuvwy+E6+mFdMMXj34KLf8BjLZrdLQ2ay8JzvAIwtcWdT/03v5BExierNd3YDfiFmJGsxP1xI64lmH5C/l+gYt+281P+axm/P18j1/xjG7Tr3sigoFM7tYZrJVQ7tWXXOIBr5/wFc7UKFfHX7B39vlavOOW7/PAAAAAAAAAAAAAAAAAAAALAs7zYDXJ9MBjCuAAAAAElFTkSuQmCC'
                }
                alt="프로필 이미지"
                onClick={imageUpdate}
              />
            ) : (
              //계정의 아바타가 있으면 설정한 이미지
              <UserImage
                src={changeImage ? changeImage : user.avatar}
                alt="프로필 이미지"
                onClick={imageUpdate}
              />
            )
          ) : //리드모드일때 onClick이 없는 이미지만 보여줌
          !user.avatar ? (
            <UserImage
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAAA+Pj6+vr7o6OhLS0vCwsJfX18lJSXl5eUgICAbGxvb29vLy8suLi4xMTGysrLv7++Li4ugoKB5eXmDg4NoaGgODg5GRkbV1dWZmZmnp6cUFBT29va4uLg2NjZVVVUD9+FsAAACvklEQVR4nO3c61KjMBiAYQ6thFMpikBPtvd/ldZZVyEkthHSIfg+P9kxfK+7UxhK1vMAAAAAAAAAAAAAAAAAAAAALFK+VQhjm6eMQ9U589HrZq1IFRKxn2Bojb1IVOcUbTZu3bLwdcJpJh8KtacsylEL77QL+9FEsw9E+nPuRi38pF94PdHsA2v9OZ9GLUzMSLZjqpeOvXhEjNh3z1lNGNP75CqDR8QEvU+u0FbM6jExq+6x38TEWV98mFfMYTCgdpWnTSJL5xWTDgbcaP6yfrhAziVGRX0hrdyMqZSL6G/DZh1TKBfZuBmz+Ssxx9fnjnpeMXV3ttfjzRiRnTre5hXz1p0tE7djetehOd8BxMQQ83vEyIixgBgZMRYQIzubxVwmmVzhYhZz7h47Pa+DD61vFtO0gRVtYxbj/5tj/Xy6HvL77o6x7P6YL/HgmbvDMZHXSEccjmk8eRGHY/wlxjRJIkxjxODx4iSEacx1jqYXU+dZbHjRbOXnvhOJW7OYTZzldS+mKl2+AygrYoh5eMzp/4Nz52KK6+1lP6YO850wiwlySwKzGLHLw/6nWZOmiW8W4ytfcBnvc477rzPXOfrXmW8LuAP45nTMUTrgcMzRq6UjDsfUXikdcTjm452Olzr6UDdmMWlkSWoW03yO/9L9s0U8nfni7u2MAjEWECMjxgJiZMRYQIxsiTFZ2bGdV8y2O9sdbzU1VVc0r5ioN1xzM0ZpLjEqfyBmUW/PLuq95szNGM2uuvwy+E6+mFdMMXj34KLf8BjLZrdLQ2ay8JzvAIwtcWdT/03v5BExierNd3YDfiFmJGsxP1xI64lmH5C/l+gYt+281P+axm/P18j1/xjG7Tr3sigoFM7tYZrJVQ7tWXXOIBr5/wFc7UKFfHX7B39vlavOOW7/PAAAAAAAAAAAAAAAAAAAALAs7zYDXJ9MBjCuAAAAAElFTkSuQmCC"
              alt="프로필 이미지"
            />
          ) : (
            <UserImage src={user.avatar} alt="프로필 이미지" />
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <UserInfoSection>
            {updateMod ? (
              <>
                <NickNameArea
                  defaultValue={user.nickname}
                  onChange={(e) => setUpdateNickName(e.target.value)}
                />
                <UpdateBtn onClick={handleUpdateBtn}>수정완료</UpdateBtn>
                <CancelBtn onClick={handleCancelBtn}>취소</CancelBtn>
              </>
            ) : (
              <>
                <NickName>{user.nickname}</NickName>
                <UpdateBtn
                  onClick={() => {
                    setUpdateMod(true);
                  }}
                >
                  수정하기
                </UpdateBtn>
              </>
            )}
          </UserInfoSection>
        </Container>
      </Section>
    </>
  );
}

export default Mypage;

const Section = styled.div`
  display: flex;
  height: 919px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

const Container = styled.div`
  border-radius: 10px;
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  background-color: darkgrey;
`;
const UserImage = styled.img`
  border: 1px solid black;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;
const UserInfoSection = styled.div`
  display: flex;
  height: 150px;
  flex-direction: column;
  margin-top: 25px;
`;
const NickNameArea = styled.textarea`
  width: 400px;
  height: 50px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  background: black;
  color: white;
`;
const UpdateBtn = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 15px;
  background-color: black;
  color: #ccc;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #464646;
    transition: 0.2s;
  }
`;
const NickName = styled.p`
  width: 400px;
  height: 50px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  background: black;
  color: white;
`;
const CancelBtn = styled.button`
  width: 400px;
  height: 50px;
  margin-top: 15px;
  background-color: black;
  color: #ccc;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #464646;
    transition: 0.2s;
  }
`;
