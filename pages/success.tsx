import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { useMediaQuery } from "react-responsive";

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;
  const [mounted, seteMounted] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  useEffect(()=> {
    seteMounted(true)
  },[]);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)"});

  const ShowOrderSumary = isTabletOrMobile ? showOrder : true;

  return (
    <div>
      <Head>
        <title>Thank you - iCommerce</title>
      </Head>
      <Head>
        <title>Thank you! - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto max-w-xl">
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer pt-4 transition lg:hidden">
            <Image
              alt=""
              src="https://rb.gy/vsvv2o"
              // layout="fill"
              // objectFit="contain"
              width={100}
              height={100}
            />
          </div>
        </Link>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-9">
        <section className="order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <Link href="/">
            <div className="relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex">
              <Image //check this logo
                style={{ width: "auto", height: "auto" }}
                alt=""
                src="https://rb.gy/vsvv2o"
                // layout="fill"
                // objectFit="contain"
                width={600}
                height={450}
              />
            </div>
          </Link>
          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <CheckIcon />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Order #{session_id?.slice(-5)}
              </p>
              <h4 className="text-lg">
                Thank you{" "}
                {/* {session ? session_id.user?.name?.split(" ")[0] : "Guest"} */}
              </h4>
            </div>
          </div>
          <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <p>Your order is confirmed</p>
              <p className="text-sm text-gray-600">
                We’ve accepted your order, and we’re getting it ready. Come back
                to this page for updates on your shipment status.
              </p>
            </div>
            <div className="pt-3 text-sm">
              <p className="font-medium text-gray-600">
                Other tracking number:
              </p>
              <p>CNB21441622</p>
            </div>
          </div>
          <div className="my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14">
            <p>Order updates</p>
            <p className="text-sm text-gray-600">
              You’ll get shipping and delivery updates by email and text.
            </p>
          </div>
          <div>
            <p className="hidden lg:inline">
              Need help? Contact us
            </p>
            {mounted && (
              <Button
              title="Continue Shopping"
              onClick={()=> router.push('/')}
              width={isTabletOrMobile ? 'w-full' : undefined}
              padding="py-4"
              />
            )}
          </div>
        </section>
        {mounted && (
          <section>
            <div>
              <div>
                <button>
                  <ShoppingCartIcon className="h-6 w-6" />
                  <p>Show order sumary</p>
                  {ShowOrderSumary ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Success;
