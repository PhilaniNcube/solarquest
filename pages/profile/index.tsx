import { withPageAuth, User } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
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
  error: string;
  profile: ProfileType;
}) {

   console.log("Profile", profile);

  if (user)
    return (
      <div className="px-4 my-24 min-h-[60vh]">
        <div className="max-w-7xl py-16 mx-auto">
          <article className="w-full max-w-[500px] bg-gray-100 py-4 px-4 rounded shadow">
            <h3 className="text-xl font-bold">
              Name:{" "}
              <span className="font-medium text-xl">
                {profile.first_name} {profile.last_name}
              </span>
            </h3>
            <p className="text-sm">Email: {profile.email}</p>
          </article>
          <div className="md:w-1/2 mt-4 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
          {/**Stepper * */}
          <Stepper />
          {/***Navigation Controls** */}
          <StepperControl />

          </div>

        </div>
      </div>
    );
  return (



    <div className="flex h-screen justify-center items-center">
      {" "}
      <p className="text-center text-5xl font-bold">Welcome: {error}</p>
    </div>
  );
}

export const getServerSideProps = withPageAuth({ authRequired: true, async getServerSideProps(){

  let { data: profiles, error } = await supabase.from("profiles").select("*").single();

  return {
    props: {
      profile: profiles
    }
  }
}  })
