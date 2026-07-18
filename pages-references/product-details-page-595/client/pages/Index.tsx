import { DemoResponse } from "@shared/api";
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Heart,
  Minus,
  Plus,
  Search,
  ShoppingCart,
} from "lucide-react";

const images = [
  "https://images.pexels.com/photos/18224279/pexels-photo-18224279.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/18224279/pexels-photo-18224279.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/18224279/pexels-photo-18224279.jpeg?auto=compress&cs=tinysrgb&w=600&sat=-100",
  "https://images.pexels.com/photos/18224279/pexels-photo-18224279.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
  "https://images.pexels.com/photos/18224279/pexels-photo-18224279.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop&sat=-40",
];

const specifications = [
  ["Driver Size", "40mm Dynamic"],
  ["Battery Life", "30 hours"],
  ["Frequency Response", "20Hz – 20kHz"],
  ["Charging Time", "2 hours"],
  ["Impedance", "32Ω"],
  ["Bluetooth Version", "5.0"],
  ["Sensitivity", "98dB/mW"],
  ["Weight", "250g"],
];

export default function Index() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState("Ivory");
  const [quantity, setQuantity] = useState(1);
  const [saved, setSaved] = useState(false);
  const [added, setAdded] = useState(false);
  const mainImage = useMemo(() => images[selectedImage], [selectedImage]);

  const colors = [
    { name: "Carbon", className: "bg-[#292c31]" },
    { name: "Ivory", className: "bg-[#e9dcd7]" },
    { name: "Sky", className: "bg-[#6297d8]" },
    { name: "Stone", className: "bg-[#7a7b75]" },
    { name: "Sage", className: "bg-[#718c63]" },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-4 py-5 text-[#171d29] sm:px-8 sm:py-10 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1216px]">
        <section className="rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.02)] sm:p-5 lg:p-8">
          <div className="grid gap-9 lg:grid-cols-[594px_minmax(0,1fr)] lg:gap-9">
            <div className="min-w-0">
              <div className="group relative aspect-[594/665] overflow-hidden rounded-xl bg-[#f3f2f0]">
                <img src={mainImage} alt="Premium wireless headphones" className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-[1.02]" />
                <button aria-label="Zoom product image" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#202632] shadow-sm transition hover:scale-105"><Search size={16} /></button>
              </div>
              <div className="mt-5 grid grid-cols-5 gap-3 sm:gap-5">
                {images.map((image, index) => (
                  <button key={index} onClick={() => setSelectedImage(index)} aria-label={`View product image ${index + 1}`} className={`aspect-[1.05] overflow-hidden rounded-xl bg-[#f2f1ef] transition ${selectedImage === index ? "ring-2 ring-[#3155f6] ring-offset-2" : "hover:opacity-80"}`}>
                    <img src={image} alt="" className={`h-full w-full object-cover mix-blend-multiply ${index === 2 ? "brightness-50" : ""}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex max-w-[546px] flex-col pt-2 lg:py-5">
              <div>
                <h1 className="max-w-xs text-[30px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[34px]">Premium Wireless<br />Headphones</h1>
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="tracking-[-1px] text-[#f4c430]">★★★★★</span><span className="text-[#4f5661]">4.5</span><span className="text-[#9aa0a9]">(1247 reviews)</span>
                </div>
                <div className="mt-4 flex items-center gap-3"><span className="text-xl font-bold tracking-[-0.03em]">$299.99</span><span className="text-sm text-[#a6a8ad] line-through">$400.00</span><span className="text-xs font-medium text-[#e76c67]">25% OFF</span></div>
                <p className="mt-5 max-w-[490px] text-sm leading-[1.65] text-[#656b75]">Experience crystal-clear audio with our premium wireless headphones featuring advanced noise cancellation, 30-hour battery life, and premium comfort design. Perfect for music lovers, professionals, and anyone who demands the best audio experience.</p>
              </div>

              <div className="mt-8 space-y-6">
                <fieldset><legend className="mb-3 text-sm font-semibold">Color</legend><div className="flex gap-2.5">{colors.map((color) => <button key={color.name} onClick={() => setSelectedColor(color.name)} aria-label={color.name} className={`grid h-6 w-6 place-items-center rounded-full ${color.className} ${selectedColor === color.name ? "ring-2 ring-[#3155f6] ring-offset-2" : ""}`}>{selectedColor === color.name && <span className="h-1.5 w-1.5 rounded-full bg-white" />}</button>)}</div></fieldset>
                <fieldset><legend className="mb-3 text-sm font-semibold">Size</legend><div className="flex gap-2">{["Small", "Medium", "Large"].map((size) => <button key={size} onClick={() => setSelectedSize(size)} className={`rounded-md border px-4 py-2 text-xs font-medium transition ${selectedSize === size ? "border-[#6682cf] bg-[#f5f7ff] text-[#3453a4] ring-1 ring-[#6682cf]" : "border-[#ebedf0] hover:border-[#bfc7d7]"}`}>{size}</button>)}</div></fieldset>
                <div><span className="mb-3 block text-sm font-semibold">Quantity</span><div className="flex h-10 w-[124px] overflow-hidden rounded-md border border-[#e5e7eb]"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity" className="grid w-10 place-items-center text-[#6b7280] hover:bg-[#f7f8fa]"><Minus size={14} /></button><span className="grid flex-1 place-items-center border-x border-[#e5e7eb] text-sm">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity" className="grid w-10 place-items-center text-[#6b7280] hover:bg-[#f7f8fa]"><Plus size={14} /></button></div></div>
              </div>

              <div className="mt-8 flex gap-3"><button onClick={() => setAdded(true)} className="h-12 flex-1 rounded-md bg-[#3155f6] text-sm font-medium text-white shadow-[0_5px_13px_rgba(49,85,246,0.2)] transition hover:bg-[#2448e9]">{added ? "Added to Cart" : "Purchase Now"}</button><button aria-label="Add to cart" className="grid h-12 w-12 place-items-center rounded-md border border-[#e5e7eb] transition hover:bg-[#f7f8fa]"><ShoppingCart size={19} strokeWidth={1.7} /></button><button onClick={() => setSaved(!saved)} aria-label="Save product" className={`grid h-12 w-12 place-items-center rounded-md border transition ${saved ? "border-[#ffb1b1] bg-[#fff6f6] text-[#e85e5e]" : "border-[#e5e7eb] hover:bg-[#f7f8fa]"}`}><Heart size={19} fill={saved ? "currentColor" : "none"} strokeWidth={1.7} /></button></div>
              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-[#737881]"><CheckCircle2 size={15} className="text-[#20b76c]" fill="currentColor" stroke="white" />Secure checkout with encrypted payment processing</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 sm:p-8">
          <h2 className="text-2xl font-bold tracking-[-0.035em]">Specifications</h2>
          <div className="mt-7 grid gap-x-12 md:grid-cols-2">
            {specifications.map(([label, value]) => <div key={label} className="flex items-center justify-between border-b border-[#edf0f2] py-4 text-sm"><span className="text-[#535a64]">{label}</span><span className="font-medium text-[#2c313b]">{value}</span></div>)}
          </div>
        </section>
      </div>
    </main>
  );
}
