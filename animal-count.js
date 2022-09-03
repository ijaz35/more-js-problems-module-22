
function animalCount(miles) {
    var densityOfAnimalIn1stTenMiles = 10;
    var densityOfAnimalIn2ndTenMiles = 50;
    var densityOfAnimalIn3rdTenMiles = 100;
    if (distanceInMiles <= 10) {
        var animalCountInFirstTenMiles = distanceInMiles * densityOfAnimalIn1stTenMiles;
        return (animalCountInFirstTenMiles);
    } else if (distanceInMiles <= 20) {
        var miles = distanceInMiles - 10;
        var animalCountInFirstTenMiles = densityOfAnimalIn1stTenMiles * 10;
        var animalCountInSecondTenMiles = miles * densityOfAnimalIn2ndTenMiles;
        var totalAnimalInSecondTenMiles = animalCountInFirstTenMiles + animalCountInSecondTenMiles;
        return (totalAnimalInSecondTenMiles);
    } else {
        var miles = distanceInMiles - 20;
        var animalCountInFirstTenMiles = densityOfAnimalIn1stTenMiles * 10;
        var animalCountInSecondTenMiles = densityOfAnimalIn2ndTenMiles * 10;
        var animalCountInThirdTenMiles = miles * densityOfAnimalIn3rdTenMiles;
        var totalAnimalInTirdTenMiles = animalCountInFirstTenMiles + animalCountInSecondTenMiles + animalCountInThirdTenMiles;
        return (totalAnimalInTirdTenMiles);
    }
}
var distanceInMiles = 35;
var totalAnimal = animalCount(distanceInMiles);
console.log(totalAnimal);
