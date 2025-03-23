class Car {
    constructor(year) {
        this.year = year;
    }

    getAge(currentYear) {
        return currentYear - this.year;
    }
}

function calculateCarAge() {
    let carYear = document.getElementById("carYear").value;
    let currentYear = new Date().getFullYear();

    if (carYear === "" || carYear > currentYear || carYear < 1886) {
        document.getElementById("result").innerText = "Please enter a valid year.";
        return;
    }

    let myCar = new Car(parseInt(carYear));
    let ageOfCar = myCar.getAge(currentYear);

    document.getElementById("result").innerText = `The car is ${ageOfCar} years old.`;
}