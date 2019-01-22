
const validAnagram = (str1, str2) => {
    let str1KeyValue ={}
    let str2KeyValue ={}
    if(str1.length != str2.length){
        return false;
    }
    for (let index = 0; index < str1.length; index++) {
       let charCode = str1.charCodeAt(index);
        str1KeyValue[charCode] = (str1KeyValue[charCode] + 1||1);
    }
    for (let index = 0; index < str1.length; index++) {
        let charCode = str2.charCodeAt(index);
         str2KeyValue[charCode] = (str2KeyValue[charCode] + 1||1);
     }
     for (var key in str1KeyValue) {
        if (str1KeyValue.hasOwnProperty(key)) {
            if(str1KeyValue[key] != str2KeyValue[key]){
                return false;
            }
        }
    }
    return true;
}   



console.log(validAnagram("",""))//true;
console.log(validAnagram("aaz","zza"))//false;
console.log(validAnagram("anagram","nagaram"))//true;
console.log(validAnagram("rat","car"))//false;
console.log(validAnagram("awesome","awesom"))//flase;
console.log(validAnagram("qwerty","qeywrt"))//true;
console.log(validAnagram("texttwisttime","timetwisttext"))//true;