// create a function to insert num to the textvew.
//  create equal function for = sign to perform once clicked. 
//  create function to clear the textview when C is selected.
//  create function to delete one the last selected item
//   - create a variable equal to the textview.value
//   - make textview.value equal to new variable and use substring to take one off the end (0, exp.length-1)
 
function insert(num) {
    document.form.textview.value += num
}

function equals() {
var i = document.form.textview.value
if(i){
document.form.textview.value = eval(i)
}
}

function C() {

}

function back() {
    
}