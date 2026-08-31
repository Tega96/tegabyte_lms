# Backend Roadmap
1. Zone 1: Foundation
    - Engineering Baseline 
        - Choose one language.
        - Runtime
        - Git
        - Cli 
        - Linux Basics
        - Debugging
    * Web + Networking + Http
        - Client/Server
        - DNS 
        - IP + Ports
        - TCP
        - TLS/HTTPS
        - Understanding what request means. eg Http request method, path, headers, body. And also Http response status, Header, Body
    * Runtime + Server Model
        - Middleware
        - Handler
        - Concurrency
        - Async I/O
2. Zone 2: 
    * HTTP APIs + CRUD
    - API
        - REST - controllers, repositories
        - Routing
        - CRUD 
        - Resources
        - Status Codes
    - CRUD
        - Validation (no pakages for now)
        - Errors 
        - Pagination
        - Filtering
        - Idempotency
        - OpenAPI
        - Compatibility

    3. Business Logic + Architecture
        - Domain rules
        - Controller / Repositories
        - Use case
        - Repository
        - Layers
        - Services

    4. Relational DB + SQL
        - Schema
        - Relations
        - Primary Keys
        - Foreign keys

    5.  DB Correctness + Performance
        - Transactions
        - Indexes
        - Pooling
        - Query
        - Consistency
        - Query plans
        - Roll back
    7. Auth + Security
        - Authorization
        - Authentication
        - Resource Access
        - AuthN, AuthZ, Sessions/ JWT Secretes
        - Token
        - Sessions/Token
        - OAuth/OIDC
        - Input Security
        - Secrete
        - OWASP
        - Hashing 
        - Audit

    8. Testing
        - Unit - Domain rules
        - Integration Tests - DB + APIs
        - API/E2E - Contract

3. Zone 3: Intermediate - Ship
    * Real- world Integrations
        - Object storage
        - Email
        - payment
        - Webhooks
        - External APIs
    * Deployment + CI/CD
        - Containers
        - Env Config
        - Reverse Proxy
        - Migrations
        - Docker
        * CI/CD
        - Commits
        - Tests
        - Builds
        - Deploy 
        - Health
        - Rollback
        - Github Actions
    * Observablity
        -  Logs
        - Metrics
        - Traces
        - Alerts
        - Dashboards
4. Zone 4
    * Performance and caching
        - Cache hit
        - Cache miss
        - Store with TTL
        - Redis 
    * Jobs + Messaging
        - Email
        - File Generation
        - External API
        - Blocked Response
        - Queue
        - Worker
        - Fast Response
        - Background Jobs
        - RabbitMQ, SQS, Kafka
    * Reliability + Resilience
        - Timeout
        - Retry + Backoff + Jitter
        - Circuit Breaker
        - Rate limit
        - Backpressure
        - Graceful Degradation
    
    * Scale
        - Horizontal scale
        - Load balancing
        - Stateless Apps
        - Read Replicas
        - CPU, Memory, Connections, Saturations

    * Specialized systems
        * Communication
        - GraphQL 
        - Websokect
        - SSE
        - gRPC
        * Data Systems
        - Document
        - Search
        - Time Series
        - Key Value
        - Vector
4. Advanced section
    * MicroServices
        - Boundaries first
        - Extract when justified
        - APIs Gateway
        - Service-owned Data
        - Independent Deploy
    * Distributed Systems
        - Replication
        - Partitioning
        - Contract
        - Schema Evolution
        - Distribute Transactions
        - Event-Driven Architechture
        - Latency 
        - Timeouts 
        - Duplicates
        - Partial failure
        - Consistency


    * Cloud Native + Orchestration. 
        - Orchestration
        - AutoScaling
        - IaC 
        - Deployment Safety
        - Multi-Zone 
        - Cost 
        -- Kubernetes

    * Specialized system: System design basics. 
        - Requirements
        - API + Data
        - Correctness
        - Observe
        - Find bottlenecks
        - Scale
        - Distribute only if justified. 