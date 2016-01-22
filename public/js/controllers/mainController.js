// MAIN CONTROLLER
function mainController($scope, listVilleService) {

  $scope.title = "Hondartzak";
  $scope.villes = [
    {nom: "Biarritze", video: "https://www.youtube.com/embed/ru7SHhfRftU?autoplay=1", photo1: "http://locations-studios-biarritz-victoriasurf.e-monsite.com/medias/images/visuel1.jpg", photo2: "http://etudegaredumidi-biarritz.notaires.fr/supplement/364028/PHOTOS/721/000060.jpg", photo3: "http://www.atlantikoa.com/wp-content/uploads/2012/07/hu-2bd.jpg"},
    {nom: "Donostia", video: "https://www.youtube.com/embed/k341rzauQpg?autoplay=1", photo1: "http://www.staydu.com/wp-content/uploads/2013/05/San-Sebasti%C3%A1n-Donostia.jpg", photo2: "http://www.topopyrenees.com/wp-content/uploads/2010/05/littoral_basque_espagnol_073-619x410.jpg", photo3: "http://image-photos.linternaute.com/image_photo/750/plage-la-concha-san-sebastian-4-1343968870-1690148.jpg"},
    {nom: "Lekeitio", video: "https://www.youtube.com/embed/t3Ra_GJUzBg?autoplay=1", photo1:"http://blog.laroutegourmandedesbasques.com/wp-content/uploads/2015/06/Ile-San-Nicolas-Lekeitio.jpg", photo2: "http://fotolector.diariovasco.com/2014/data/media/1/Isla_San_Nicolas_-Lekeitio.jpg", photo3: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Lekeitio_harbour.jpg"},
    {nom: "Orio", video: "https://www.youtube.com/embed/SblTNCEnhIw?autoplay=1", photo1:"http://www.caminosantiagogipuzkoa.com/modulos/usuariosFtp/conexion/fr_imagenes734a.jpg", photo2: "http://data-4c21db65c81f6.s3.amazonaws.com/eltiempo/playas/new/images/ply2585_imgIMG-133.jpg", photo3: "http://www.fotoviajero.com/image/733-cliffs-between-orio-and-zarautz_big.jpg"},
    {nom: "Mundaka", video: "https://www.youtube.com/embed/l0RTQl4dP00?autoplay=1", photo1:"http://www.spotsurf.fr/wp-content/uploads/2015/05/spot-de-surf-mundaka.jpg", photo2: "http://revistablue.com/wp-content/uploads/2013/07/playas5_laga.jpg", photo3: "https://euskalaltxorretanbarrena.files.wordpress.com/2013/04/dsc01827.jpg"},
    {nom: "Bakio", video: "https://www.youtube.com/embed/7bSgKMIBSk8?autoplay=1", photo1:"http://fotos.elcorreo.com/201110/img_5107.jpg", photo2: "http://i.ytimg.com/vi/rZ2ieKbneGc/maxresdefault.jpg", photo3: "http://data-4c21db65c81f6.s3.amazonaws.com/eltiempo/playas/new/images/ply2615_imgBI-116.jpg"},
    {nom: "Zarautz", video: "https://www.youtube.com/embed/D6loP8PXAOk?autoplay=1", photo1:"http://www.fotoviajero.com/image/550-plage-de-zarautz_big.jpg", photo2: "http://fotos.diariovasco.com/201005/getaria-4643.atardecer-desde-zarautz.2010-05-21.jpg", photo3: "http://www.campingitxaspe.com/images/paginas_p/grandes/4e51e514fe158ffd2a425f0f64eccbfd.jpg"},
    {nom: "Bermeo", video: "https://www.youtube.com/embed/W7DCtgBgmjw?autoplay=1", photo1:"http://www.urunehotela.com/blog/wp-content/uploads/laga.jpg", photo2: "http://www.enrutapress.com/companysdeviatge/wp-content/uploads/2011/10/07082011175.jpg", photo3: "http://www.urunehotela.com/blog/wp-content/uploads/bermeo_puerto.jpg"},
    {nom: "Zumaia", video: "https://www.youtube.com/embed/Ob6vjOFnVfo?autoplay=1", photo1:"http://www.2tout2rien.fr/wp-content/uploads/2014/01/le-flysh-de-zumaia-7.jpg", photo2: "http://fotos.diariovasco.com/201302/acantilados-flysh-de-zumaia-11.jpg", photo3: "http://fr.costavasca.org/costavasca_fr/usuariosftp/conexion/fr_imagenes101a.jpg"},
    {nom: "Getaria", video: "https://www.youtube.com/embed/HDL7qxG84Wk?autoplay=1", photo1:"http://saiazgetaria.com/wp-content/uploads/2013/02/getariakohondartza1.jpg", photo2: "http://www.spainisculture.com/export/sites/cultura/multimedia/galerias/destinos/guetaria_t2000410a.jpg_1306973099.jpg", photo3: "http://static.panoramio.com/photos/large/97258970.jpg"},
    {nom: "Ondarroa", video: "https://www.youtube.com/embed/UG73XWkFx3A?autoplay=1", photo1:"http://playascalas.com/wp-content/2011/05/playas-nudistas-del-pais-vasco2.jpg", photo2: "http://www.eitb.eus/multimedia/images/2013/06/06/1139370/arrigorri_felix_idigoras_foto610x342.jpg", photo3: "http://static.flickr.com/18/89910558_e51c07fd15_o.jpg"},
    {nom: "Hondarribia", video: "https://www.youtube.com/embed/xVt4T2VvH_g?autoplay=1", photo1:"https://upload.wikimedia.org/wikipedia/commons/7/75/Fontarrabie_depuis_Hendaye_2012.jpg", photo2: "http://www.abc.es/Media/201308/02/fuenterrabia--644x362.jpg", photo3: "http://www.euskoguide.com/images/hondarribia/hondarribia-beach.jpg"},
  ];
  
  var data = {};
  var image = document.querySelector('.image')
  var video = document.querySelector('.video')

  function initialize() {
    var mapProp = {
      center:new google.maps.LatLng(data.coord.lat,data.coord.lon),
      zoom:8,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var myMap = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
      position: {lat: data.coord.lat, lng: data.coord.lon},
      map: myMap,
      title: 'Aurkitu duzu!'
    });
  }

  $scope.change = function(){
    $scope.villes.forEach(function(ville){
      if (ville.nom == $scope.selectedNameVille){
        $scope.selectedVille = ville;
        getInfos(ville);
        return;
      }
    });

  }

  function getInfos(ville){
    listVilleService.getWeather(ville.nom).then(function(response){
      data = response.data;
      $scope.temp = Math.round(data.main.temp);
      $scope.meteo = data.weather[0].main;
      $scope.wind = data.wind.speed;
      image.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      video.src =  ville.video;
      initialize();
      $scope.myValue = true;
    }, function(){
      console.log('error'); 
    });




    var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante



$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
                        
        if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
    }
    else{ // sinon, on le remet à 0 (première image)
        i = 0;
    }

    $img.css('display', 'none');

    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');

    slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 3000); // on définit l'intervalle à 3000 millisecondes (7s)
}

slideImg(); // enfin, on lance la fonction une première fois

  }

}






