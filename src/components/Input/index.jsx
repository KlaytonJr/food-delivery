import React from 'react'

function Input({ label, placeholder, type, value, onChange, className }) {
  return (
    <div className={className + ' w-full flex flex-col'}>
        <label className="text-start px-2 w-full text-slate-800 font-semibold" >{ label }</label>
        <input 
            value={value}
            placeholder={placeholder}
            type={type || "text"}
            className="w-full h-10 border-2 border-amber-400 rounded-lg px-2 mt-1 box-border" 
            onChange={event => onChange(event.target.value)}
        />
    </div>
  )
}

export default Input