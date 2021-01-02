# 주의
- 이 레포지토리는 vscode에 최적화 되어 있습니다.
- 이 레포지토리는 api전용 서버로 .ts 파일을 ts-node 를 사용해 직접 실행하며 .js 파일로 내보내지 않습니다.

# 설치
- npm i
- root 폴더에 정해진 양식의 .config.json 파일을 다운로드 해야합니다.

# 테스트
- npm run test
- npm run test:watch (자동 새로고침)

# 개발서버
- npm run dev (자동 새로고침)
- VSCODE debugger 사용을 원할시 두가지 방법이 있음
  - vscode 디버그 패널에서 `debug` 선택 후 run (자동 새로고침)
  - vscode 에서 package.json 연 후 script 블럭 위의 `debug` 클릭 -> `dev` 선택
