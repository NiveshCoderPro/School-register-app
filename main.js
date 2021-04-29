var number_of_students_array = [];

function submit() {
    var name1 = document.getElementById("input1").value;
    var name2 = document.getElementById("input2").value;
    var name3 = document.getElementById("input3").value;
    var name4 = document.getElementById("input4").value;
    number_of_students_array.push(name1);
    number_of_students_array.push(name2);
    number_of_students_array.push(name3);
    number_of_students_array.push(name4);
    console.log(number_of_students_array);
    document.getElementById("display_name").innerHTML = number_of_students_array;
    document.getElementById("sub").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}
function sorting() {
    number_of_students_array.sort();
    document.getElementById("display_name").innerHTML = number_of_students_array;
}