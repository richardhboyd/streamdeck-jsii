```text
docker container prune --force
docker image prune --force
docker volume prune --force
docker build -t test-deck .
docker create --name extract test-deck:latest
docker cp extract:/app/dist ./dist
```

```text
npm install -g jsii-pacmak && npm install && npm run build
npx jsii-pacmak -t python
python3 -m venv .env
source .env/bin/activate
pip install ./dist/python/acme.hello-jsii-1.0.0.tar.gz
pip install jsii
python3 ./tests/python/index.py
deactivate
rm -rf .env
rm -rf ./tests/python/dependencies
```