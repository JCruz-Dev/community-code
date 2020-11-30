import styled from '@emotion/styled';

const NewsletterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0px;
  ${({ theme }) => theme.Mediaquery.small} {
    position: absolute;
    top: -100px;
    margin: auto auto;
    width: 720px;
  }
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    margin-bottom: 22px;
  }
  transition: all 0.5s ease;
`;
const NewsletterContainerStyled = styled.form`
  width: max-content;
  height: max-content;
  padding: 18px 18px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.Mediaquery.small} {
    flex-direction: row;
  }
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(29, 29, 29, 0.15);
  box-sizing: border-box;
  box-shadow: 0px 1px 30px rgba(29, 29, 29, 0.1);
  border-radius: 10px;
  label {
    input {
      width: 300px;
      height: 51px;
      ${({ theme }) => theme.Mediaquery.small} {
        width: 350px;
        margin-top: 0px;
        margin-right: 20px;
      }
      background: #ffffff;
      border: 1px solid rgba(29, 29, 29, 0.21);
      box-sizing: border-box;
      border-radius: 8px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #948e8e;
      padding-left: 10px;
    }
  }
  button {
    display: none;
    align-items: center;
    justify-content: center;
    width: 300px;
    ${({ theme }) => theme.Mediaquery.small} {
      width: 130px;
      margin-top: 0px;
    }
    height: 50px;
    margin-top: 8px;
    border: none;
    background: #e11c38;
    border-radius: 8px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;

const NewsletterShared: React.FC = () => {
  return (
    <NewsletterStyled>
      <span>Suscríbete a nuestro newsletter</span>
      <NewsletterContainerStyled>
        <label htmlFor="newsletter">
          <input type="text" name="newsletter" id="newsletterID" placeholder="Ingresa tu correo" />
        </label>
        <button type="submit" name="newsletterSubmit" id="newsletterSubmitID">
          Registrarme
        </button>
      </NewsletterContainerStyled>
    </NewsletterStyled>
  );
};

export default NewsletterShared;
