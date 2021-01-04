# 2-database

[Terug naar het Workshop Script](/handson.md)

### Deployment van MongoDB

Voor de deployment van de MongoDB database gebruiken we een Helm Chart. Deze zorgt er voor, dat er ook automatisch een secret wordt aangemaakt met het juiste "root" wachtwoord. Kies hier zelf een wachtwoord voor:

```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm install wherefore-mongodb-release --set auth.rootPassword=[kies een wachtwoord] bitnami/mongodb
```

Na dit commande wordt de Helm Chart toegepast. We moeten wachten tot deze compleet is afgerond voor we naar de volgende stap kunnen. Met het volgende commando kun je controleren of de MongoDB gereed is (status moet "Running" zijn):

```
kubectl get pods
```

### Seed van de database

Onze database heet "wfat" (WhereFore Art Thou) en krijgt wat demo data en een database user voor de connectie vanuit de API. Deze eerste stappen zorgen voor een Mongo client container die via de MongoDB Shell ingelogd is als "root".

> Leuk om te weten: het wachtwoord voor deze "root" user wordt door het eerste export commando uit het secret gehaald. Als je hier goed naar kijkt, zie je dat deze base64 gedecodeerd wordt en dat kun je dus zelf ook met andere Kubernetes secrets doen.

```
export MONGODB_ROOT_PASSWORD=$(kubectl get secret wherefore-mongodb-release -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)

kubectl run wherefore-mongodb-release-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:4.4.3-debian-10-r0 --command -- bash

mongo admin --host "wherefore-mongodb-release" --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD
```

Hierna kun je de inhoud van de seed-db.txt (workshop/mongodb/seed-db.txt) in de Mongo Shell copy-pasten. Je krijgt dan de vraag om een wachtwoord te kiezen voor de database user en dit wachtwoord heb je in de stap hierna nog een keer nodig.

Type "exit" om de Mongo Shell te verlaten en nogmaals "exit" om de pod te verlaten (dit verwijdert de pod ook gelijk).

### Secret (MongoDB credentials)

De API maakt gebruik van een secret om in te kunnen loggen op de database (het secret is namelijk in de API container als environment variable beschikbaar). In dit secret zit ook het wachtwoord wat je in de Seed stap hebt gekozen en deze maken we nu zelf met de hand aan:

```
kubectl create secret generic mongodb-creds --from-literal=username=wfat --from-literal=password=[gekozen password in de Seed stap]
```

[Naar stap 3-buildpush](/workshop/3-buildpush.md)

[Terug naar het Workshop Script](/handson.md)
