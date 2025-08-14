# Database Course Setup with Docker

This setup includes all the databases required for your course:
- MongoDB v4.4.1
- PostgreSQL v13.0
- Neo4j v4.1.3
- Redis v6.0.8

## Quick Start

### Start all databases:
```bash
docker-compose up -d
```

### Stop all databases:
```bash
docker-compose down
```

### View running containers:
```bash
docker-compose ps
```

### View logs:
```bash
docker-compose logs [service-name]
```

## Database Connection Details

### MongoDB
- **Host:** localhost
- **Port:** 27017
- **Username:** admin
- **Password:** password
- **Connection URL:** `mongodb://admin:password@localhost:27017/`

**Connect via CLI:**
```bash
docker exec -it mongodb mongosh -u admin -p password --authenticationDatabase admin
```

### PostgreSQL
- **Host:** localhost
- **Port:** 5432
- **Username:** admin
- **Password:** password
- **Database:** testdb
- **Connection URL:** `postgresql://admin:password@localhost:5432/testdb`

**Connect via CLI:**
```bash
docker exec -it postgresql psql -U admin -d testdb
```

### Neo4j
- **Web Interface:** http://localhost:7474
- **Bolt Port:** 7687
- **Username:** neo4j
- **Password:** password
- **Connection URL:** `bolt://localhost:7687`

**Connect via CLI:**
```bash
docker exec -it neo4j cypher-shell -u neo4j -p password
```

### Redis
- **Host:** localhost
- **Port:** 6379
- **No authentication required**

**Connect via CLI:**
```bash
docker exec -it redis redis-cli
```

## Useful Commands

### Individual service management:
```bash
# Start specific service
docker-compose up -d mongodb

# Stop specific service
docker-compose stop postgresql

# Restart service
docker-compose restart neo4j

# View service logs
docker-compose logs -f redis
```

### Data persistence:
All data is stored in Docker volumes, so your data will persist between container restarts.

### Clean up (removes all data):
```bash
docker-compose down -v
```

## Troubleshooting

If you encounter port conflicts, you can modify the ports in the `docker-compose.yml` file.

For example, to change MongoDB port from 27017 to 27018:
```yaml
ports:
  - "27018:27017"
```

Then connect using port 27018 instead.
