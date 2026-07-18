import { Download, ExternalLink } from "lucide-react";

const products = [
  {
    name: "Nike Air Force 1",
    details: "Color - 1x",
    size: "Size 7",
    price: "$700",
    tone: "from-[#ddd0ed] via-[#f8e7e0] to-[#b8c9ec]",
    accent: "#f0c1b1",
  },
  {
    name: "Nike Runner 250",
    details: "Red - 1x",
    size: "Size 8",
    price: "$500",
    tone: "from-[#ead7cc] via-[#faeee8] to-[#d8d3cb]",
    accent: "#dc7a5e",
  },
];

const totals = [
  ["Subtotal (3 items)", "$1200"],
  ["Shipping", "$15.25"],
  ["Tax", "$14"],
  ["Discount", "Free"],
];

function ShoeThumbnail({ tone, accent }: { tone: string; accent: string }) {
  return (
    <div className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-lg bg-gradient-to-br ${tone}`}>
      <div className="absolute -bottom-0.5 left-2 h-6 w-14 rotate-[-20deg] rounded-[55%_35%_35%_30%] bg-white shadow-[0_4px_5px_rgba(31,41,55,0.22)]" />
      <div className="absolute bottom-[14px] left-[17px] h-3 w-10 rotate-[-20deg] rounded-tl-[90%] rounded-tr-[35%]" style={{ backgroundColor: accent }} />
      <div className="absolute bottom-[20px] left-[23px] h-[2px] w-5 rotate-[-20deg] bg-white/85" />
      <div className="absolute bottom-[16px] left-[26px] h-[2px] w-5 rotate-[-20deg] bg-white/85" />
    </div>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-white px-5 py-14 text-[#1f2937] sm:px-8 md:py-20 lg:px-12 lg:py-[102px]">
      <section className="mx-auto w-full max-w-[870px]">
        <header className="max-w-[500px]">
          <h1 className="text-[34px] font-semibold leading-[1.08] tracking-[-1.5px] sm:text-[48px] sm:leading-[52px]">Thanks For Ordering</h1>
          <p className="mt-4 max-w-[460px] text-sm leading-6 tracking-[-0.2px] text-[#6b7280] sm:text-base">
            Your order has been confirmed and will shipping soon. A confirmation email has been sent to your email.
          </p>
        </header>

        <div className="mt-12 sm:mt-16">
          <div className="flex flex-col gap-5 border-b border-[#e5e7eb] py-6 lg:h-[92px] lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-x-7 lg:gap-y-2">
            <div className="flex flex-wrap gap-x-7 gap-y-3 lg:gap-x-7">
              <div className="flex gap-1 text-base leading-6 tracking-[-0.2px]"><span className="text-[#6b7280]">Order ID:</span><strong className="font-semibold">TGA80456542</strong></div>
              <div className="flex gap-1 text-base leading-6 tracking-[-0.2px]"><span className="text-[#6b7280]">Order Date:</span><strong className="font-semibold">12 June 2025</strong></div>
              <div className="flex gap-1 text-base leading-6 tracking-[-0.2px]"><span className="text-[#6b7280]">Order status:</span><strong className="font-semibold">Delivered</strong></div>
            </div>
            <button className="inline-flex h-11 shrink-0 items-center justify-center gap-1 self-start rounded-lg border border-[#d1d5db] bg-white px-4 text-base font-medium tracking-[-0.2px] shadow-sm transition-colors hover:bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] focus:ring-offset-2 lg:self-auto">
              Download Invoice <Download aria-hidden="true" size={20} strokeWidth={1.8} />
            </button>
          </div>

          <div>
            {products.map((product) => (
              <article key={product.name} className="flex min-h-[120px] flex-col justify-between gap-5 border-b border-[#f3f4f6] py-6 sm:flex-row sm:items-center sm:gap-[22px]">
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <ShoeThumbnail tone={product.tone} accent={product.accent} />
                  <div className="min-w-0">
                    <h2 className="text-base font-medium leading-6 tracking-[-0.2px]">{product.name}</h2>
                    <div className="mt-1 flex items-center gap-1 text-xs leading-4 tracking-[-0.2px] text-[#6b7280]">
                      <span>{product.details}</span><span className="h-[3px] w-[3px] rounded-full bg-[#d1d5db]" /><span>{product.size}</span>
                    </div>
                    <p className="mt-1 text-sm font-semibold leading-5 tracking-[-0.2px] text-[#374151]">{product.price}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-4 self-end text-sm font-medium leading-5 tracking-[-0.2px] text-[#6b7280] sm:self-auto sm:gap-8">
                  <button className="transition-colors hover:text-[#1f2937] focus:outline-none focus:underline">View Order</button>
                  <span className="h-6 border-l border-[#e5e7eb]" />
                  <button className="inline-flex items-center gap-1 transition-colors hover:text-[#1f2937] focus:outline-none focus:underline">Similar Product <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} /></button>
                </div>
              </article>
            ))}
          </div>

          <div className="border-b border-[#e5e7eb] py-6 pb-7 sm:space-y-5">
            {totals.map(([label, value]) => (
              <div className="flex items-start justify-between gap-6 py-2 text-base leading-6 tracking-[-0.2px] sm:py-0" key={label}>
                <span className="text-[#374151]">{label}</span><span className="font-medium text-[#1f2937]">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex min-h-[84px] items-center justify-between gap-6 py-7 text-lg leading-7 tracking-[-0.2px]">
            <span className="font-semibold">Total</span><strong className="font-bold">$1229.25</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
