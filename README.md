# Hvordan brugte jeg docker til et express projekt.
Jeg har lavet en Dockerfile, som indeholder den information, som Docker skal bruge til, at lave en container, som kan kører af sig selv. </br>
I min dockerfile https://github.com/simo215d/Express_Docker_Test1/blob/master/Dockerfile har jeg valg node:12, som mit image. </br>
Image er en blueprint, som docker bruger som indeholder i dette tilfælde node installeret, så man kan bruge node kommandoer.</br>
Nederst i min Dockerfile, har jeg den kommando, som skal starte min server: CMD [ "npm" , "start" ].</br>
Jeg bruger ikke: CMD [ "node", "server.js" ], fordi jeg bruger express og express har sagt at kommanoen hedder npm start i en eller anden fil.</br>

# Sådan kan du lave build og run en container med docker
Når man så vil builde et image, hvor vi kan kører en container fra så kan man bruge denne kommando:</br>
docker build -t <your username>/express-docker-test .</br>
Når man vil køre den skriver man: docker run -p <pulic_port>:<private_port> -d <your username>/express-docker-test</br></br>
Men man kan gøre det lettere hvis man tilføjer en docker-compose.yml fil, som findes her: https://github.com/simo215d/Express_Docker_Test1/blob/master/docker-compose.yml</br>
Så behøver man kun denne kommando:</br>
docker-compose up -d</br>
Jeg sætter -d på til sidst for at få kontrollen tilbage i terminalen. (ellers virker det ikke for mig).</br>
Så bør containeren køre og man kan gå til http://localhost:8000/ og se hjemmesiden. Porten kan man også finde i sin .yml fil.</br>
