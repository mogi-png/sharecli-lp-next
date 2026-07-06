import Container from "@/components/ui/Container";

const medicineCategories = [
  {
    category: "美容内服・美肌ケア",
    note: "シミ・くすみ・肌荒れなど、美容内服について相談できます。",
    items: ["美容内服5合剤", "タチオン", "ハイチオール", "シナール", "ユベラ", "トラネキサム酸"],
    tag: "bg-[#FFF0F6] text-[#B85C7A]",
  },
  {
    category: "メディカルダイエット",
    note: "医師管理のもと、体重・体型のお悩みをサポートします。",
    items: ["リベルサス", "ビクトーザ", "サクセンダ", "ウゴービ", "防風通聖散"],
    tag: "bg-[#EEF6FC] text-[#2272AE]",
  },
  {
    category: "AGA・薄毛ケア",
    note: "薄毛・抜け毛のお悩みをオンラインで相談できます。",
    items: ["フィナステリド", "デュタステリド", "ミノキシジル（内服）", "ミノキシジル（外用）"],
    tag: "bg-[#EBF7F5] text-[#1E7A6E]",
  },
  {
    category: "ED・男性のお悩み",
    note: "EDなどのデリケートなお悩みも、プライバシーに配慮して相談できます。",
    items: ["シルデナフィル", "タダラフィル", "バルデナフィル"],
    tag: "bg-[#EEF2F7] text-[#3A5578]",
  },
  {
    category: "その他の相談メニュー",
    note: "上記以外のお悩みもLINEからお気軽にご相談ください。",
    items: ["低用量ピル", "睡眠改善薬", "ビタミン補給", "その他内服薬・サプリメント"],
    tag: "bg-[#F0F3F6] text-[#4A5E72]",
  },
];

export default function MedicineMenu() {
  return (
    <section className="bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale py-10 lg:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase">
            MENU
          </p>
          <h2 className="mt-2 font-heading text-[24px] leading-[1.35] font-black text-brand-ink sm:text-[28px] lg:text-[34px]">
            診察結果に応じて
            <span className="text-brand-pink-deep">相談できるお薬例</span>
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-brand-ink-soft">
            AGA・美容内服・メディカルダイエット・EDなど、目的に合わせて医師と相談できます。
            <br />
            以下は取扱いのあるお薬の一例です。
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {medicineCategories.map(({ category, note, items, tag }, idx) => (
            <div
              key={category}
              className={`rounded-2xl border border-brand-pink-light bg-white p-5 shadow-[0_6px_18px_-8px_rgba(255,111,160,0.18)] ${idx === medicineCategories.length - 1 && medicineCategories.length % 2 !== 0 ? "sm:col-span-2 sm:max-w-[calc(50%-8px)]" : ""}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`rounded-full px-3 py-0.5 text-[11px] font-bold ${tag}`}>
                  {category}
                </span>
              </div>
              <p className="mb-2 text-[11.5px] text-brand-ink-soft">{note}</p>
              <ul className="flex flex-col gap-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-brand-ink">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-brand-pink-light bg-white/70 px-5 py-4">
          <p className="text-[11.5px] leading-relaxed text-brand-ink-soft">
            ※ 上記は取扱い例の一部です。診察結果、既往歴、服用中のお薬、体質等により処方できない場合があります。<br />
            ※ 自由診療です。効果・副作用には個人差があります。<br />
            ※ お薬の詳細・費用・副作用・禁忌等は、診察時またはLINE登録後の案内をご確認ください。
          </p>
        </div>
      </Container>
    </section>
  );
}
