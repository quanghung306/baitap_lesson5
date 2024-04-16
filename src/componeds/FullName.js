import React from 'react'
const fullName = (firstName, lastName) => {
  return firstName + ' ' + lastName;
};
const fName  ='Nguyen Quang';
const lName ='Hung';
const FullName = () => {
  return (
    <div>
      <p>First Name: {fName}</p>
      <p>Last Name: {lName}</p>
      <p>Full Name: {fullName(fName, lName)}</p>
    </div>
  );
};

export default FullName
