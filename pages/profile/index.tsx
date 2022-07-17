import { withPageAuth, User } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export default function Profile({
  user,
  error,
}: {
  user: User;
  error: string;
}) {
  if (user)
    return (
      <div className="px-4">
        <p className="mt-44">
          [<Link href="/">Home</Link>] | [
          <Link href="/protected-page">supabaseServerClient</Link>]
        </p>
        <div>Hello {user.email}</div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  return (



    <div className="flex h-screen justify-center items-center">
      {" "}
      <p className="text-center text-5xl font-bold">Welcome: {error}</p>
    </div>
  );
}

export const getServerSideProps = withPageAuth({ authRequired: true });
