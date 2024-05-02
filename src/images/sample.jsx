let s = "A man, a plan, a canal: Panama"


let copy = ""
for(let i=0; i<s.length; i++){
     copy = copy + s[i]
}

if(copy === s){
    console.log("palindrome")
} else {
    console.log("not palindrome")
}