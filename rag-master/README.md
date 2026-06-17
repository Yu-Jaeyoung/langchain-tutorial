# rag-master 학습 기록

`rag-master` 책을 학습하며 작성한 코드와 실습 노트북을 정리한 폴더입니다.

## 구조

```text
rag-master/
├── docker-compose.yml
├── README.md
├── chapter01-langchain-overview/
│   ├── 00-gpu-cuda-check.ipynb
│   ├── 01-openai-compatible-local-llm-call.ipynb
│   ├── 02-langchain-prompt-model-parser-chain.ipynb
│   ├── 03-langchain-batch-and-stream.ipynb
│   ├── 04-langchain-sequential-composed-chain.ipynb
│   ├── 05-langchain-parallel-runnableparallel.ipynb
│   ├── 06-langchain-prompt-templates-and-placeholders.ipynb
│   ├── 07-few-shot-prompt-and-semantic-selector.ipynb
│   ├── 08-json-output-parser-and-retry.ipynb
│   ├── 09-pydantic-output-parser-and-validation.ipynb
│   ├── 10-simple-json-output-parser-streaming.ipynb
│   ├── 11-json-output-parser-pydantic-schema.ipynb
│   ├── 12-chat-prompt-conversation-history.ipynb
│   ├── 13-in-memory-chat-message-history.ipynb
│   ├── 14-runnable-message-history-and-langgraph-memory.ipynb
│   ├── 15-message-trimming-and-summarization.ipynb
│   └── 16-langgraph-memory-trimming-and-summary.ipynb
└── chapter02-rag-basics-and-practice/
    ├── README.md
    ├── 01-cosine-similarity.ipynb
    └── 02-langchain-embeddings-similarity-search.ipynb
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
- `chapter01-langchain-overview/11-json-output-parser-pydantic-schema.ipynb`: `JsonOutputParser`와 Pydantic 스키마를 사용한 구조화 JSON 출력
- `chapter01-langchain-overview/12-chat-prompt-conversation-history.ipynb`: `ChatPromptTemplate`에 대화 이력을 전달해 이전 맥락 유지
- `chapter01-langchain-overview/13-in-memory-chat-message-history.ipynb`: `InMemoryChatMessageHistory`를 사용한 대화 이력 저장과 전달
- `chapter01-langchain-overview/14-runnable-message-history-and-langgraph-memory.ipynb`: `RunnableWithMessageHistory`와 LangGraph `InMemorySaver`를 사용한 자동 대화 이력 관리
- `chapter01-langchain-overview/15-message-trimming-and-summarization.ipynb`: `trim_messages`와 요약 체인을 사용한 대화 이력 축약
- `chapter01-langchain-overview/16-langgraph-memory-trimming-and-summary.ipynb`: LangGraph checkpoint 기반 대화 이력 관리, trimming, summarization
- `chapter02-rag-basics-and-practice/`: chapter02 검색 증강 생성 기초와 실습
- `chapter02-rag-basics-and-practice/01-cosine-similarity.ipynb`: NumPy로 벡터 간 코사인 유사도 계산
- `chapter02-rag-basics-and-practice/02-langchain-embeddings-similarity-search.ipynb`: LangChain 임베딩과 코사인 유사도를 사용한 문서 검색
