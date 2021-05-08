import React from 'react'

type Props = {
  tag: '1' | '2' | '3' | '4' | '5' | '6';
  level: '1' | '2' | '3' | '4' | '5' | '6';
}

const Headings:React.FC<Props> = ({tag, level, children}) => {
  const Tag = `h${tag}` as keyof JSX.IntrinsicElements;

  return (
    <Tag style={{
      fontSize: `${10 * (6 - parseInt(level)) * 1.6}px`,
      lineHeight: '1',
    }}>
      {children}
    </Tag>
  )
}

export default Headings
