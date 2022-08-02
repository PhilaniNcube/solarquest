import { withPageAuth, User, supabaseClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import Stepper from "../../components/Stepper/Stepper";
import StepperControl from "../../components/Stepper/StepperControl";
import { ProfileType } from "../../Types";
import supabase from "../../utils/supabase";

export default function Profile({
  user,
  error,
  profile
}: {
  user: User;
  error: Error;
  profile: ProfileType;
}) {

   console.log("Profile", profile);

  if (user)
    return (
      <>

        <ProfileHeader profile={profile} />
      </>
    );
  return (



    <main className="flex h-screen justify-center items-center">
      {" "}
      <p className="text-center text-5xl font-bold">Error: {error.message}</p>
    </main>
  );
}

export const getServerSideProps = withPageAuth({ authRequired: true, async getServerSideProps(){

  let { data: profiles, error } = await supabaseClient.from("profiles").select("*").single();

  return {
    props: {
      profile: profiles,
      error
    }
  }
}
})
