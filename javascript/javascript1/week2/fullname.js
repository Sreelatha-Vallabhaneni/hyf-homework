// ****************** Flight booking fullname function **************************

function getFullname(firstname, surname) {
    const fullName = `${firstname} ${surname}`;
    return fullName;
}
const fullName1 = getFullname('Benjamin', 'Hughes');
const fullName2 = getFullname('sreelatha', 'vallabhaneni');
console.log(fullName1);
console.log(fullName2);

//*************** Formal fullname ******************************

function getFormalFullname(firstname, surname, useFormalName) {
    const fullName = `${firstname} ${surname}`;
    const formalName = `Lord ${fullName}`;
    const fullAndFormalNameCond = firstname === ' ' ? 'Enter first name' : surname === ' ' ? 'Enter surname' : useFormalName === true ? formalName : fullName;
    return fullAndFormalNameCond;

}
console.log(getFormalFullname('Sreelatha', 'Vallabhaneni', true));
console.log(getFormalFullname(' ', ' '));
