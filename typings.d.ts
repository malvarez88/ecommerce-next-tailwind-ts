interface Category {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "category";
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}

interface Product {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
  title: string;
  price: number;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  category: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
}

//console.log(products from stripe)
interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: string;
  price: {
    unit_amount: number;
  };
}

//all theese filds with underscores we will not see it in sanity, only when we fetch the categories.
//there is no need to export this because next just get it. Good for yoy and for me Next =)

//this is how its send fron sanity
// "result":[4 items
// 0:{3 items
// "_id":"491e5bce-0e2f-43bf-9921-67c0f0c98692"
// "slug":{2 items
// "_type":"slug"
// "current":"iphone"
// }
// "title":"iPhone"
// }
// 1:{3 items
// "_id":"52bc7ef4-bb34-472e-83dd-0ebb88ee3b91"
// "slug":{2 items
// "_type":"slug"
// "current":"mac"
// }
// "title":"Mac"
// }
// 2:{3 items
// "_id":"58ef40af-e5ab-4cfd-a5a6-914467348557"
// "slug":{2 items
// "_type":"slug"
// "current":"apple-watch"
// }
// "title":"Apple Watch"
// }
// 3:{3 items
// "_id":"b8c653f0-37ef-448a-8b50-e7e96a34195b"
// "slug":{2 items
// "_type":"slug"
// "current":"ipad"
// }
// "title":"iPad"
// }
// ]
