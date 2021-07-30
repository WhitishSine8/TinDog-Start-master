function isLeap(year) {

    /**************Don't change the code above****************/

    //Write your code here.    
    if (year % 4) {
        alert("It's a leap year");
        if (year % 100) {
            alert("It's not");
            if (year % 400) {
                alert("It's a leap year");
            } else {
                alert("It's not a leap year");
            }
        } else {
            alert("It's a leap year");
        }
    }