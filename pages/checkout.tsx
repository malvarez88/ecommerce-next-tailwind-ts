import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectBasketItems } from "../state/basket";

const Checkout = () => {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  const [itemsInBasket, setItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item); //if the item exist it will increase the result count. Every product will be an array of products
      return results;
    }, {} as { [key: string]: Product[] });
    setItemsInBasket(groupedItems);
  }, [items]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#e7ecee]">
      <Head>
        <title>Bag - iCommerce</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>
        {items.length > 0 && (
            <div className="mx-5 md:mx-8">
                {Object.entries(itemsInBasket).map(([key, items]) => (
                    <CheckoutProduct key={key} items={items} id={key} />
                ))}
            </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;