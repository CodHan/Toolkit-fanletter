import styled from 'styled-components';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import KimKangMin from 'components/page/KimKangMin';
import KimGunWu from 'components/page/KimGunWu';
import ParkJaeHoon from 'components/page/ParkJaeHoon';
import JangSungYup from 'components/page/JangSungYup';
import Form from './Form';
import { useState, useEffect } from 'react';

function Nav() {
  const [data, setData] = useState([
    {
      createdAt: '2023-11-03T02:07:09.423Z',
      nickname: 'Dr. Clint Christiansen',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg',
      content:
        '카리나1 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.',
      writedTo: '김강민',
      id: '1',
    },
    {
      createdAt: '2023-11-02T23:13:18.491Z',
      nickname: 'Chad Graham',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg',
      content:
        '지젤1 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.',
      writedTo: '김건우',
      id: '2',
    },
    {
      createdAt: '2023-11-02T11:25:37.026Z',
      nickname: 'Tommy Abshire',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg',
      content:
        '윈터1 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur.',
      writedTo: '박재훈',
      id: '3',
    },
    {
      createdAt: '2023-11-02T16:06:34.150Z',
      nickname: 'Max Mayert',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg',
      content:
        '닝닝1 Sint qui eligendi repudiandae placeat maiores repudiandae assumenda repudiandae. Distinctio commodi iste. Qui architecto iusto.',
      writedTo: '장성엽',
      id: '4',
    },
    {
      createdAt: '2023-11-03T05:40:17.575Z',
      nickname: 'Olga Christiansen',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg',
      content:
        '카리나2 Molestiae saepe reiciendis saepe natus quo occaecati. Vel vero illum quo. Ducimus maiores porro optio illum officia nam. Cum possimus aut consequatur eaque libero ad nihil pariatur officiis.',
      writedTo: '김강민',
      id: '5',
    },
  ]);
  console.log(data);

  return (
    <div>
      <BrowserRouter>
        <NavParents>
          <NavUl>
            <Navli>
              <Link to="/KimKangMin">
                <NavStyleButton>김강민</NavStyleButton>
              </Link>
            </Navli>

            <Navli>
              <Link to="/KimGunWu">
                <NavStyleButton>김건우</NavStyleButton>
              </Link>
            </Navli>

            <Navli>
              <Link to="/ParkJaeHoon">
                <NavStyleButton>박재훈</NavStyleButton>
              </Link>
            </Navli>

            <Navli>
              <Link to="/JangSungYup">
                <NavStyleButton>장성엽</NavStyleButton>
              </Link>
            </Navli>
          </NavUl>
        </NavParents>
        <Form data={data} setData={setData} />

        <Routes>
          <Route path="/KimKangMin" element={<KimKangMin data={data} />} />
          <Route path="/KimGunWu" element={<KimGunWu data={data} />} />
          <Route path="/ParkJaeHoon" element={<ParkJaeHoon data={data} />} />
          <Route path="/JangSungYup" element={<JangSungYup data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Nav;

const NavParents = styled.div`
  display: flex;
  background-color: aquamarine;
  height: 40px;
  width: 350px;
  border: 2px solid aquamarine;
  margin: 5px auto 0 auto;
  border-radius: 10px;
  justify-content: center;
`;
const NavUl = styled.ul`
  display: flex;
`;
const Navli = styled.li`
  padding: 7px;
`;
const NavStyleButton = styled.button`
  background-color: #0c6fcd;
  border: 1px solid #0c6fcd;
  border-radius: 3px;
  color: #cd0c22;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.2s;
  }
`;
