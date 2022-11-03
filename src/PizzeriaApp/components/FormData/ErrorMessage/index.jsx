import React from 'react'
import { errorsMessage } from '../../../../utils/validateFields.utils';
export default function ErrorMessage ({field}) {
  return (
    <small className="px-[10px] width-full text-red-500 text-[1rem]">{errorsMessage[field]}</small>
  )
}

