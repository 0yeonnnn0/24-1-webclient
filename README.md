# Function Converter

### 2024 1학기 국민대학교 웹클라이언트 컴퓨팅 과제입니다.

Function Converter는 함수를 위한 이름을 제공하고, 이름에 따라 함수를 만들어주는 인공지능 코딩 서비스입니다.


함수에 적합한 함수 명을 찾지 못했을 때,

함수 명에 적합한 함수를 만들고 싶을 때.

더 이상 고민하지 말고 Function Converter를 찾아주세요!

## Description

### Func2Name

Func2Name은 함수를 입력하면 함수명을 추천해주는 기능입니다. 

작명이 필요한 함수를 입력하고 기다리면 ChatGPT가 추천하는 함수명을 확인할 수 있습니다.

### Name2Func

Name2Func은 이미 함수명을 지어놨지만 해당 함수에 필요한 코드가 없는 경우 사용할 수 있는 기능입니다.
 입력한 함수명과 사용하는 프레임워크, 그리고 기타 고려할 사항들을 입력하면, Function Converter가 당신에게 필요한 기능을 가진 함수를 생성해줍니다.

## Features

- 입력한 함수에 맞는 함수 명 추천
- 입력한 함수 명에 맞는 함수 생성
- 로그인/회원가입, 마이페이지 등 회원 기능

## 사용 예시

### Func2Name

<img width="840" alt="Func2Name_example" src="https://github.com/0yeonnnn0/24-1-webclient/assets/101052631/c3b8400f-ad53-4e54-9487-c46b1a34a88b">

유저가 /login에 들어왔을 때 보여줄 React Component를 작성

이를 Func2Name의 함수 부분에 넣고, Convert 버튼을 누르게 되면 해당 코드와 관련있는 함수 명을 추천

### Name2Func

<img width="840" alt="Name2FuncExample" src="https://github.com/0yeonnnn0/24-1-webclient/assets/101052631/7db27b96-a09f-434c-b718-110acd33cca9">

Function Name으로 "ConvertBtn", Framework으로 "React.js", 기타 고려사항을 넣어서 필요한 컴포넌트를 제작해달라고 요청했을 시, 해당 코드 명에 맞는 컴포넌트를 제작해서 반환

## Author

| **김동연** |
| :------: |
| [<img src="https://github.com/0yeonnnn0/24-1-webclient/assets/101052631/4e34a3a8-6aed-4a5a-9ba5-6cbe6338686f" height=190 width=150> <br/> @0yeonnnn0](https://github.com/0yeonnnn0) |

## Getting Started

- http://functionconverter.duckdns.org/

  위 URL에서 Function Converter를 실행하실 수 있습니다!

## Stacks

### Front-end

- React.js
- Tailwind CSS

### Back-end

- Node.js
- express.js
- Firebase Auth
- OpenAI ChatGPT
- AWS EC2

## Build

1. 소스 코드를 클론합니다.

```
git clone https://github.com/0yeonnnn0/24-1-webclient.git
```

2. 프로젝트 디렉토리로 이동합니다.

```
cd [24-1-webclient]
```

3. 의존성을 설치합니다.

```
npm i
```

4. 애플리케이션을 실행하고 해당 포트로 이동합니다.(localhost:8080)

```
npm run start:server
```
