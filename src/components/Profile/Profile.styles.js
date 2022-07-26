import styled from "styled-components";

const ProfileStyled = styled.div`
margin-bottom: 30px;
padding: 15px;
.description { 
    font-size: 20px;
    color: #1c2e60;
    text-align: center;
};
.avatar {
    width: 260px;
}
.name {
    font-size: 22px;
    font-weight: 700;
}
`

const StatsStyled = styled.ul`
display: flex;
justify-content: space-around;
padding: 0;
  margin: 0;
  list-style: none;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100px;
    height: 80px;
    outline: 1px solid grey;
  }
  .label {

  }
  .quantity {
    font-weight: 700;
    font-size: 22px;
  }
`

export { ProfileStyled, StatsStyled };