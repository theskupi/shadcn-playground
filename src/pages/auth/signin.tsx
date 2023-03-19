
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@component/server/auth";
import Link from "next/link";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="w-full rounded-lg bg-white p-8 md:w-1/2 lg:w-1/3">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Log in to MLS - MicroLearning System
        </h1>
        <h2>
          Log into your account
        </h2>
        <div className="flex flex-col items-center gap-4">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className="w-full rounded bg-red-600 py-2 px-4 font-bold text-white hover:bg-red-700 md:w-3/4"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}