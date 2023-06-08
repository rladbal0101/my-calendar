import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 50px);
  height: 500px;
  `;

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  `;

const CalendarTable = styled.table`
  border: 1px solid #333;
  /* border-radius: 5px; */
  width: 100%;
  height: 100%;
  border-collapse: collapse;

  & th, td {
    border: 1px solid black;
  }
`;

function MainPage(props) {


  return (
    <Wrapper>
      <Container>
        <p>6월</p>
        {/* 달력부분 */}
        <CalendarTable>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
          <tr>
            <td colSpan={4}></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
          </tr>
          <tr>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td></td>
          </tr>
        </CalendarTable>
      </Container>
    </Wrapper>
  );
}

export default MainPage;