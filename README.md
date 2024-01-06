# 과제 내용

## 로그인 컴포넌트 개발
* react를 사용하여 개발했습니다.
* 최소 input 2개, button 1개로 구성되어 있습니다.

## 기능 소개
![image](https://github.com/rhdmswls12/login/assets/71330240/ac2815bf-bad0-402b-abdc-d2695b4cc7fd)
* 첫 화면인 로그인 페이지입니다.
* 각각 이메일 주소와 비밀번호 입력을 통해 로그인 합니다.

![image](https://github.com/rhdmswls12/login/assets/71330240/755bf52d-26c7-4246-bc95-c068f121413b)
* 올바른 메일 형식을 갖추지 않은 경우 위와 같이 경고문이 뜨도록 했습니다.


![image](https://github.com/rhdmswls12/login/assets/71330240/e03d71d1-a743-4da6-976f-1c16eba2b601)
* 소문자, 대문자, 숫자 조합이 아니거나 첫 글자가 알파벳이 아닌 경우 위와 같이 경고문이 뜨도록 했습니다.
  
![image](https://github.com/rhdmswls12/login/assets/71330240/ea4e54f1-f54b-40b8-9f0c-e8dc71412555)
* 더미 데이터로 아이디는 'abc@gmail.com', 비밀번호는 'Apple123'으로 설정하였고, 해당 값들을 입력하면 위와 같이 메인 페이지로 이동할 수 있습니다.

![image](https://github.com/rhdmswls12/login/assets/71330240/4767ed37-7561-4f63-a1f4-8d0422b0c833)
* 로컬 스토리지에 단순하게 아이디인 'abc@gmail.com'를 저장해 사용자가 다시 접속해도 로그인 과정 없이 바로 메인 페이지로 이동할 수 있도록 했습니다.
* 로컬 스토리지에 저장되어 있는 아이디 값 삭제 시 다시 접속했을 때 로그인 화면을 접하게 됩니다.
