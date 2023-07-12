import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { userInfo } from '@/api/authentication/userInfo';

export default function withManager(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const {role} = userInfo();
    const userIsPermitted = (role === 'SUPERADMIN' || role === 'MANAGER');

    useEffect(() => {
      if (!userIsPermitted) {
        router.push('/404');
      }
    }, [userIsPermitted, router]);

    return <Component {...props} />;
  };
}