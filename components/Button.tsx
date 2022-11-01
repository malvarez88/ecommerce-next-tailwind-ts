import React from 'react'
interface Props {
    title: string;
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}

const Button = ({title}: Props) => {
  return (
    <button>

    </button>
  )
}

export default Button