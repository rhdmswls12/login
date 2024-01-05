import styled from "styled-components";
import { useState } from "react";

// 더미 데이터
const user = {
  id: 'abc@gmail.com',
  password: 'Apple123'
}

const LoginTemplateBlock = styled.div`
  width: 512px;
  height: 568px;
  position: relative;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: auto auto;
  margin-top: 60px;
`
const HeadBlock = styled.div`
  width: 100%;
  height: 100px;
`
const Head = styled.h1`
  padding: 50px;
`
const Content = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const ContentTitle = styled.h3`
  margin-top: 40px;
`
const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  width: 200px;
  margin: 0 auto;
  margin-top: 15px;
  text-align: left;
`
const ErrorMessage = styled.div`
  font-size: 10px;
  color: red;
  font-weight: bold;
  margin-top: 12px;
`
const IdInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
  &:hover {
    outline: 1.5px solid green;
  }
`
const PwdInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
  &:hover {
    outline: 1.5px solid green;
  }
`
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 4px;
  border: none;
  background: lightgreen;
  &:hover {
    background: green;
    color: #fff;
    cursor: pointer;
  }
`

export default function LoginTemplate({setIsLogin}) {
  const [id, setId] = useState('')
  const [pwd, setPwd] = useState('')

  const [emailValid, setEmailValid] = useState(false) // 이메일 유효한지 확인하는 state
  const [pwdValid, setPwdValid] = useState(false) // 비밀번호 유효한지 확인하는 state

  const onChangeId = e => {
    // 올바른 메일 형식인지 확인하기
    setId(e.target.value)
    
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if(regex.test(id)) {
      setEmailValid(true) // 정규 표현식 통과 시 true로 설정
    } else {
      setEmailValid(false) 
    }
  }
  const onChangePwd = e => {
    // 소문자, 대문자, 숫자 조합 (최소 1개씩)이며 시작 문자가 알파벳인지 확인하기
    setPwd(e.target.value)
    const startRegex = /^[a-zA-Z]/
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/
    if(startRegex.test(pwd) && regex.test(pwd)) {
      setPwdValid(true)
    } else {
      setPwdValid(false)
    }
  }
  const onSubmit = e => {
    e.preventDefault(); // submit 관련 태그 고유의 동작 중단시키기
    if (id === user.id && pwd === user.password) {
      console.log(id)
      setIsLogin(true)
      localStorage.setItem('id', id)
    } else {
      setIsLogin(false)
      alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
    }
  }  
  return (
    <>
    <LoginTemplateBlock>
      <HeadBlock>
        <Head>CodeBrain</Head>
      </HeadBlock>
      <Content>
        <ContentTitle>로그인</ContentTitle>
        <Title>이메일 주소</Title>
        <IdInput type="text" placeholder="test@gmail.com" value={id} onChange={onChangeId}></IdInput>
        {
          !emailValid && id.length > 0 ? 
          <ErrorMessage>올바른 이메일 주소 형식으로 입력하세요.</ErrorMessage>
          : null
        }
        <Title>비밀번호</Title>
        <PwdInput placeholder="영문 소문자, 대문자, 숫자 조합" value={pwd} type="password" onChange={onChangePwd}></PwdInput>
        {
          !pwdValid && pwd.length > 0 ?
          <ErrorMessage>영문으로 시작해야 하며 소문자, 대문자, 숫자를 최소 1개씩 포함해야 합니다.</ErrorMessage>
          : null
        }
        <Button onClick={onSubmit}>로그인</Button>
      </Content>
    </LoginTemplateBlock>
    </>
  )
}