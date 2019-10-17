import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  
  return (
    <Link {...props}>
      {React.cloneElement(child, { active: router && router.pathname === props.href, theme: props.theme })}
    </Link>
  )
};
