# 7-finished

Als alles goed gegaan is, heb je nu een werkend cluster met een werkende demo app!
Controleer dit met het commando:

```
kubectl get pods
```

Alle pods moeten nu de status "Running" hebben:

![](/images/running.png)

En als je nu met je browser naar het juiste adres gaat:

https://[je gekozen DNS label].westeurope.cloudapp.azure.com dan zie je als het goed is een werkende app:

![](/images/screenshot1.png)

## Tijdelijk uitschakelen om credits te sparen

Als je het cluster "aan laat staan" gaan de kosten van de onderliggende VM's (de Kubernetes nodes) af van het maandelijkse tegoed. Wanneer je de handleiding hebt gevolgd, dan heb je 1 node (type D2) en die kost ongeveer 85 euro per maand. Mocht je het cluster niet gebruiken, dan kun je tijdelijk die node(s) stoppen om zo tegoed te besparen.

Als je gaat kijken bij de resource groups, zul je zien dat er nog een "extra" resource group is bijgekomen. Deze heet "MC*[naam van je resource group]*[naam van je cluster]\_westeurope". Als je in deze group gaat kijken vind je daar de verschillende onderdelen van ons aangemaakte Kubernetes cluster.

Als je dan klikt op de Virtual Machine Scale Set, dan heb je bovenin de mogelijkheid om de scale set (en dus de onderliggende Virtual Machines) te stoppen (ook wel de-allocate genoemd).

![](images/pause.png)

Het cluster blijft bestaan (sterker nog de Master Node draait gewoon door), maar er gaat geen bedrag meer van het maandelijkse tegoed af.

Kijk eventueel in de video, daar komt het ook in voor: [Pauzeren van het cluster](https://web.microsoftstream.com/video/7dd8991f-300c-4010-b0c7-9bc3234d78ff?st=291)

Niet vergeten om de scaleset weer te starten als je het cluster gaat gebruiken!

## Verwijderen van het cluster

Als je het cluster helemaal wilt verwijderen (inclusief de Container Registry), dan is het het makkelijkst om via de Azure Portal de complete Resource Group te verwijderen.

![](/images/deleterg.png)

Lokaal kun je nu ook de Kubectl context weggooien:

```
kubectl config delete-context Azure-on-Kubernetes
```

[Terug naar het Workshop Script](/handson.md)
