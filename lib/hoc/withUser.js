import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { userInfo } from '@/api/authentication/userInfo';

export default function withUser(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const {role} = userInfo();
    const userIsPermitted = (role === 'USER' || role === 'SUPERADMIN' || role === 'MANAGER');

    useEffect(() => {
      if (!userIsPermitted) {
        router.push('/404');
      }
    }, [userIsPermitted, router]);

    return <Component {...props} />;
  };
}