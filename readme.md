# mongoDB Nachschauer

## conversion
Mit dem Python Script `conversion/converter.py` ist die Migration von MariaDB zu MongoDB möglich

## api
Die API für die Webansicht ist mithilfe von FastAPI geschrieben und befindet sich in `api/app/api.py` die [Dokumentation](http://localhost:8000/docs) zu dieser lässt sich im Browser ansehen

## web ui
Das WebUI ist mit NextJS und NextUI geschrieben und ist nach dem Starten auf dieser [Adresse](https://localhost:3000) erreichbar

## docker
Die Conversion, API und WebUI lassen sich über das `docker-compose.yaml` File starten
```shell
docker compose up -d
```

und mit 
```shell
docker compose -down
```
wieder stoppen


wenn ein Error auftritt, können mithilfe des Commands
```shell
docker compose logs
```
oder
```shell
docker compose logs -f
```
die logs betrachtet werden