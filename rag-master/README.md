# rag-master 학습 기록

`rag-master` 책을 학습하며 작성한 코드와 실습 노트북을 정리한 폴더입니다.

## 구조

```text
rag-master/
├── docker-compose.yml
├── README.md
└── chapter01-langchain-overview/
    ├── 00-gpu-cuda-check.ipynb
    ├── 01-openai-compatible-local-llm-call.ipynb
    ├── 02-langchain-prompt-model-parser-chain.ipynb
    ├── 03-langchain-batch-and-stream.ipynb
    ├── 04-langchain-sequential-composed-chain.ipynb
    ├── 05-langchain-parallel-runnableparallel.ipynb
    ├── 06-langchain-prompt-templates-and-placeholders.ipynb
    ├── 07-few-shot-prompt-and-semantic-selector.ipynb
    ├── 08-json-output-parser-and-retry.ipynb
    ├── 09-pydantic-output-parser-and-validation.ipynb
    └── 10-simple-json-output-parser-streaming.ipynb
```

## 파일 설명

- `docker-compose.yml`: Unsloth 기반 로컬 Jupyter/LLM 실행 환경 설정
- `chapter01-langchain-overview/`: chapter01 랭체인 살펴보기
- `chapter01-langchain-overview/00-gpu-cuda-check.ipynb`: NVIDIA GPU, CUDA, PyTorch 연산 확인
- `chapter01-langchain-overview/01-openai-compatible-local-llm-call.ipynb`: OpenAI 호환 API로 로컬 LLM 직접 호출
- `chapter01-langchain-overview/02-langchain-prompt-model-parser-chain.ipynb`: LangChain의 프롬프트, 모델, 출력 파서를 연결한 기본 체인
- `chapter01-langchain-overview/03-langchain-batch-and-stream.ipynb`: LangChain 체인의 배치 실행과 스트리밍 출력
- `chapter01-langchain-overview/04-langchain-sequential-composed-chain.ipynb`: 체인을 순차적으로 연결해 설명 생성 후 번역 수행
- `chapter01-langchain-overview/05-langchain-parallel-runnableparallel.ipynb`: `RunnableParallel`을 사용한 한국어/영어 설명 병렬 생성
- `chapter01-langchain-overview/06-langchain-prompt-templates-and-placeholders.ipynb`: `PromptTemplate`, `ChatPromptTemplate`, `MessagesPlaceholder` 사용법
- `chapter01-langchain-overview/07-few-shot-prompt-and-semantic-selector.ipynb`: 퓨샷 프롬프트와 임베딩 기반 유사도 예제 선택
- `chapter01-langchain-overview/08-json-output-parser-and-retry.ipynb`: JSON 출력 파서와 잘못된 출력 재시도 파서
- `chapter01-langchain-overview/09-pydantic-output-parser-and-validation.ipynb`: `PydanticOutputParser`와 Pydantic 검증 로직을 사용한 구조화 출력
- `chapter01-langchain-overview/10-simple-json-output-parser-streaming.ipynb`: `SimpleJsonOutputParser`를 사용한 JSON 응답 스트리밍 파싱
