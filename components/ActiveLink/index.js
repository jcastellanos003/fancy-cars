import { useRouter } from 'next/router'
import Link from 'next/link';

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  
  return (
    <Link {...props}>
      {React.cloneElement(child, { active: router.pathname === props.href, theme: props.theme })}
    </Link>
  )
};

export default ActiveLink;
