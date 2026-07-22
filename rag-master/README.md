# rag-master 학습 기록

`rag-master` 책을 학습하며 작성한 코드와 실습 노트북을 정리한 폴더입니다.

## 구조

```text
rag-master/
├── .dockerignore
├── .env.example
├── Dockerfile.pgvector
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
├── chapter02-rag-basics-and-practice/
│   ├── README.md
│   ├── 01-cosine-similarity.ipynb
│   ├── 02-langchain-embeddings-similarity-search.ipynb
│   ├── 03-web-document-loading.ipynb
│   ├── 04-pdf-document-loading-and-splitting.ipynb
│   ├── 05-csv-document-loading.ipynb
│   ├── 06-text-splitting-and-semantic-chunking.ipynb
│   ├── 07-chroma-vectorstore-retrieval.ipynb
│   └── 08-streamlit-rag-chatbot.ipynb
├── chapter03-multimodal-rag-complex-data-processing/
│   ├── README.md
│   ├── 01-multimodal-pdf-rag-pipeline.ipynb
│   └── sample.pdf
├── chapter04-advanced-rag-retrieval-response-optimization/
│   ├── README.md
│   ├── 01-parent-child-document-retrieval.ipynb
│   ├── 02-multi-query-retrieval.ipynb
│   ├── 03-hyde-hypothetical-document-retrieval.ipynb
│   ├── 04-postgresql-bm25-sparse-retrieval.ipynb
│   ├── 05-pgvector-hnsw-dense-retrieval.ipynb
│   ├── 06-bm25-pgvector-ensemble-retrieval.ipynb
│   └── 07-qwen3-reranker-ensemble-retrieval.ipynb
└── chapter05-graph-rag-with-knowledge-graphs/
    ├── README.md
    ├── 01-graphrag-lm-studio-setup.ipynb
    ├── 02-graphrag-knowledge-graph-indexing.ipynb
    ├── 03-graphrag-global-local-search.ipynb
    ├── 04-neo4j-graphrag-knowledge-graph-import.ipynb
    ├── 05-neo4j-local-global-graph-rag.ipynb
    └── How_to_invest_money.txt
```

## 파일 설명

- `.dockerignore`: Docker 빌드 컨텍스트에서 로컬 데이터와 민감 설정 제외
- `.env.example`: Docker Compose와 실습 노트북에서 사용하는 환경변수 템플릿
- `Dockerfile.pgvector`: pgvector에 `mecab-ko`, `textsearch_ko` 한국어 전문검색 확장을 추가한 이미지
- `docker-compose.yml`: Unsloth, ChromaDB, pgAdmin, pgvector, Neo4j 로컬 실행 환경 설정
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
- `chapter02-rag-basics-and-practice/02-langchain-embeddings-similarity-search.ipynb`: LangChain 임베딩, 코사인 유사도, 인스트럭션 기반 문서 검색
- `chapter02-rag-basics-and-practice/03-web-document-loading.ipynb`: `WebBaseLoader`와 `BeautifulSoup`를 사용한 웹 문서 로드
- `chapter02-rag-basics-and-practice/04-pdf-document-loading-and-splitting.ipynb`: PDF 로더 비교와 텍스트 청크 분할
- `chapter02-rag-basics-and-practice/05-csv-document-loading.ipynb`: `CSVLoader`와 pandas를 사용한 CSV 문서 로드
- `chapter02-rag-basics-and-practice/06-text-splitting-and-semantic-chunking.ipynb`: 문자 기반 텍스트 분할과 임베딩 기반 시맨틱 청킹
- `chapter02-rag-basics-and-practice/07-chroma-vectorstore-retrieval.ipynb`: ChromaDB 벡터스토어 적재와 인스트럭션 기반 유사도 검색
- `chapter02-rag-basics-and-practice/08-streamlit-rag-chatbot.ipynb`: ChromaDB 기반 RAG 체인과 Streamlit 챗봇 UI 구성
- `chapter03-multimodal-rag-complex-data-processing/`: chapter03 멀티 모달 RAG를 활용한 복합 데이터 처리
- `chapter03-multimodal-rag-complex-data-processing/01-multimodal-pdf-rag-pipeline.ipynb`: PDF 텍스트, 표, 이미지 요약 기반 멀티모달 RAG 파이프라인
- `chapter03-multimodal-rag-complex-data-processing/sample.pdf`: chapter03 멀티모달 PDF RAG 파이프라인 입력 자료
- `chapter04-advanced-rag-retrieval-response-optimization/`: chapter04 검색과 응답을 최적화하는 RAG 고도화 전략
- `chapter04-advanced-rag-retrieval-response-optimization/01-parent-child-document-retrieval.ipynb`: Chroma에 부모·자식 문서를 영속화한 계층적 문서 검색
- `chapter04-advanced-rag-retrieval-response-optimization/02-multi-query-retrieval.ipynb`: LLM이 생성한 다중 질의로 검색 결과를 통합하는 MultiQuery 검색
- `chapter04-advanced-rag-retrieval-response-optimization/03-hyde-hypothetical-document-retrieval.ipynb`: 가상 답변 문서를 생성해 유사 문서를 찾는 HyDE 검색 파이프라인
- `chapter04-advanced-rag-retrieval-response-optimization/04-postgresql-bm25-sparse-retrieval.ipynb`: PostgreSQL 한국어 전문검색과 증분 색인으로 구현한 BM25 희소 검색
- `chapter04-advanced-rag-retrieval-response-optimization/05-pgvector-hnsw-dense-retrieval.ipynb`: MRL 임베딩 차원 축소와 pgvector HNSW 인덱스를 사용한 밀집 검색
- `chapter04-advanced-rag-retrieval-response-optimization/06-bm25-pgvector-ensemble-retrieval.ipynb`: PostgreSQL BM25와 pgvector HNSW 검색 결과를 결합한 앙상블 검색
- `chapter04-advanced-rag-retrieval-response-optimization/07-qwen3-reranker-ensemble-retrieval.ipynb`: BM25·pgvector 앙상블 후보를 Qwen3 리랭커로 재순위화하는 2단계 검색
- `chapter05-graph-rag-with-knowledge-graphs/`: chapter05 지식 그래프를 활용한 그래프 RAG
- `chapter05-graph-rag-with-knowledge-graphs/01-graphrag-lm-studio-setup.ipynb`: LM Studio 완성·임베딩 모델을 GraphRAG와 연동하고 입력 문서를 준비하는 환경 설정
- `chapter05-graph-rag-with-knowledge-graphs/02-graphrag-knowledge-graph-indexing.ipynb`: GraphRAG 인덱싱 파이프라인으로 엔티티·관계·커뮤니티 리포트를 생성하고 산출물을 검증
- `chapter05-graph-rag-with-knowledge-graphs/03-graphrag-global-local-search.ipynb`: GraphRAG 커뮤니티 리포트 기반 글로벌 검색과 엔티티 기반 로컬 검색의 질문 유형별 비교
- `chapter05-graph-rag-with-knowledge-graphs/04-neo4j-graphrag-knowledge-graph-import.ipynb`: GraphRAG Parquet 산출물을 Neo4j 노드·관계·커뮤니티로 일괄 적재하고 결과를 검증
- `chapter05-graph-rag-with-knowledge-graphs/05-neo4j-local-global-graph-rag.ipynb`: Neo4j 엔티티 벡터 인덱스를 사용한 로컬 검색과 커뮤니티 리포트 Map-Reduce 글로벌 검색
- `chapter05-graph-rag-with-knowledge-graphs/How_to_invest_money.txt`: Chapter 5 GraphRAG 지식 그래프 구축용 Project Gutenberg 영문 원문
