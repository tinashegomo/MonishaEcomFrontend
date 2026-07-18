import { Eye, Heart, ShoppingCart, Star, Trash2 } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "skyflyer",
    name: "SkyFlyer Drone",
    price: "$199.00",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/36072793/pexels-photo-36072793.jpeg?auto=compress&cs=tinysrgb&w=900",
    position: "center",
  },
  {
    id: "earbuds",
    name: "Wireless Earbuds Pro",
    price: "$59.00",
    rating: 5,
    image:
      "https://images.pexels.com/photos/3921827/pexels-photo-3921827.jpeg?auto=compress&cs=tinysrgb&w=900",
    position: "center",
  },
  {
    id: "perfume",
    name: "Rose Essence Perfume",
    price: "$45.00",
    rating: 4,
    image:
      "https://images.pexels.com/photos/32645088/pexels-photo-32645088.jpeg?auto=compress&cs=tinysrgb&w=900",
    position: "center",
  },
  {
    id: "speaker",
    name: "Minimalist Smart Speaker",
    price: "$89.00",
    rating: 3.5,
    image:
      "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=900",
    position: "center",
  },
];

function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center -space-x-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= Math.floor(value) ? "fill-yellow-400 text-yellow-400" : star - value === 0.5 ? "fill-yellow-400/60 text-yellow-400" : "hidden"}`}
          strokeWidth={1.75}
        />
      ))}
    </div>
  );
}

export default function Index() {
  const [savedProducts, setSavedProducts] = useState(products);
  const [notice, setNotice] = useState("");

  const removeProduct = (id: string) => {
    setSavedProducts((items) => items.filter((product) => product.id !== id));
  };

  const addToCart = (name: string) => {
    setNotice(`${name} added to cart`);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-28 xl:px-[7rem]">
      <section className="mx-auto max-w-[1216px]">
        <header className="max-w-[640px]">
          <h1 className="text-[42px] font-semibold leading-[1.08] tracking-[-1.5px] text-gray-800 sm:text-5xl sm:leading-[52px]">
            Your Wishlist
          </h1>
          <p className="mt-4 max-w-[600px] text-sm leading-5 tracking-[-0.2px] text-gray-500 sm:text-base sm:leading-6">
            Save items you love and create collections for future inspiration. Discover new arrivals and explore curated edits to find your perfect pieces.
          </p>
        </header>

        {savedProducts.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-10 min-[560px]:grid-cols-2 min-[960px]:grid-cols-4 min-[960px]:gap-7">
            {savedProducts.map((product) => (
              <article key={product.id} className="group min-w-0">
                <div className="relative h-[274px] overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                    style={{ objectPosition: product.position }}
                  />
                  {product.id === "perfume" && (
                    <div className="absolute inset-x-2 bottom-2 flex h-12 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                      <button aria-label={`Favorite ${product.name}`} className="grid w-12 place-items-center border-r border-gray-200 text-gray-700 transition hover:bg-gray-50">
                        <Heart className="h-5 w-5" strokeWidth={1.7} />
                      </button>
                      <button onClick={() => addToCart(product.name)} className="flex flex-1 items-center justify-center gap-2 text-sm font-medium tracking-[-0.2px] text-gray-700 transition hover:bg-gray-50">
                        <ShoppingCart className="h-5 w-5" strokeWidth={1.7} />
                        Add to cart
                      </button>
                      <button aria-label={`Preview ${product.name}`} className="grid w-12 place-items-center border-l border-gray-200 text-gray-700 transition hover:bg-gray-50">
                        <Eye className="h-5 w-5" strokeWidth={1.7} />
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => removeProduct(product.id)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:border-gray-400 hover:bg-gray-50"
                  >
                    <Trash2 className="h-6 w-6" strokeWidth={1.5} />
                  </button>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-start justify-between gap-3 text-base font-medium leading-6 tracking-[-0.2px]">
                    <h2 className="text-gray-500">{product.name}</h2>
                    <p className="shrink-0 text-gray-800">{product.price}</p>
                  </div>
                  <Rating value={product.rating} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-xl border border-dashed border-gray-300 px-6 py-16 text-center">
            <h2 className="text-xl font-medium text-gray-800">Your wishlist is empty</h2>
            <p className="mt-2 text-gray-500">Saved pieces will appear here.</p>
            <button onClick={() => setSavedProducts(products)} className="mt-6 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">Restore items</button>
          </div>
        )}
      </section>

      {notice && <div role="status" className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-lg">{notice}</div>}
    </main>
  );
}
