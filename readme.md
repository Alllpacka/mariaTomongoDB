# mongoDB Nachschauer

## conversion
Mit dem Python Script `converter.py` im `conversion` Folder ist die Migration von MariaDB zu MongoDB möglich

## api
Die API für die Webansicht ist mithilfe von FastAPI geschrieben und befindet sich in `api/api.py` die [Dokumentation](http://localhost:8000/docs) zu dieser lässt sich im Browser ansehen

## web ui
Das WebUI ist mit NextJS und NextUI geschrieben und ist nach dem Starten auf dieser [Adresse](https://localhost:3000) erreichbar

## docker
Die Conversion, API und WebUI lassen sich durch separate Container starten  