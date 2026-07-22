# chapter04 검색과 응답을 최적화하는 RAG 고도화 전략

`rag-master` chapter04 검색과 응답을 최적화하는 RAG 고도화 전략을 학습하며 작성한 노트북을 정리하는 폴더입니다.

## 파일 설명

- `01-parent-child-document-retrieval.ipynb`: Chroma에 부모·자식 문서를 영속화한 계층적 문서 검색
- `02-multi-query-retrieval.ipynb`: LLM이 생성한 다중 질의로 검색 결과를 통합하는 MultiQuery 검색
- `03-hyde-hypothetical-document-retrieval.ipynb`: 가상 답변 문서를 생성해 유사 문서를 찾는 HyDE 검색 파이프라인
- `04-postgresql-bm25-sparse-retrieval.ipynb`: PostgreSQL 한국어 전문검색과 증분 색인으로 구현한 BM25 희소 검색
- `05-pgvector-hnsw-dense-retrieval.ipynb`: MRL 임베딩 차원 축소와 pgvector HNSW 인덱스를 사용한 밀집 검색
- `06-bm25-pgvector-ensemble-retrieval.ipynb`: PostgreSQL BM25와 pgvector HNSW 검색 결과를 결합한 앙상블 검색
- `07-qwen3-reranker-ensemble-retrieval.ipynb`: BM25·pgvector 앙상블 후보를 Qwen3 리랭커로 재순위화하는 2단계 검색
