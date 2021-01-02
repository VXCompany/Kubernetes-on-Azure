# 2-database

[Terug naar het Workshop Script](/handson.md)

### Deployment van MongoDB

```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm install wherefore-mongodb-release --set auth.rootPassword=[kies een wachtwoord] bitnami/mongodb
```

### Seed van de database

Onze database heet "wfat" (WhereFore Art Thou) en krijgt wat demo data en een database user voor de connectie vanuit de API. Deze eerste stappen zorgen voor een Mongo client container die via de MongoDB Shell ingelogd is als "root":

```
export MONGODB_ROOT_PASSWORD=$(kubectl get secret wherefore-release-mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)

kubectl run wherefore-release-mongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:4.4.3-debian-10-r0 --command -- bash

mongo admin --host "wherefore-release-mongodb" --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD
```

Hierna kun je de inhoud van de seed-db.txt (workshop/deployment/seed-db.txt) in de Mongo Shell copy-pasten. Je krijgt dan de vraag om een wachtwoord te kiezen voor de database user en dit wachtwoord heb je in de stap hierna nog een keer nodig.

### Secret (MongoDB credentials)

De API maakt gebruik van een secret om in te kunnen loggen op de database (het secret is namelijk in de API container als environment variable beschikbaar). In dit secret zit ook het wachtwoord wat je in de Seed stap hebt gekozen.

```
kubectl create secret generic mongodb-creds --from-literal=username=wfat --fro
m-literal=password=[gekozen password in de Seed stap]
```

[Terug naar het Workshop Script](/handson.md)
