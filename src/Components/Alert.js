import React from 'react'

export default function (props) {
  // This function is for Capitalize the first word of message type i.e. Success
  const Capitalize= (word)=>{
    if (typeof word !== 'string' || !word.trim()) {
      return ''; // Return empty string if word is not a string or is empty
    }
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    // In this code it works like --  If props.alert is null then it gives props.alert otherwise 
    // the code written after &&
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
  </div>
  )
}
