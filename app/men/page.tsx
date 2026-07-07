import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import MenHeader from "@/components/MenHeader";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import {
  HomeIcon,
  PhoneIcon,
  DoctorIcon,
  BoxIcon,
  CheckIcon,
  AlertIcon,
  HeadsetIcon,
  ChevronIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "シェアクリ｜男性向けオンライン診療 — AGA・ダイエットをスマホで相談",
  description:
    "AGA（薄毛）・メディカルダイエットなど、男性のお悩みをスマホから医師に相談。来院不要・自宅完結のオンライン診療。30秒アンケート回答でクーポンをご案内します。",
  robots: { index: false, follow: false },
};

// ─── 共通: ネイビー系ボタン ──────────────────────────────────────────────────

function MenButton({
  label = "30秒アンケートでクーポンを受け取る",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={siteConfig.lineUrl}
      className={`cta-button flex w-full animate-[pulse-cta_2.6s_ease-in-out_infinite] items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-[#1E3A5F] to-[#2272AE] px-5 py-4 text-base font-bold text-white shadow-[0_12px_24px_-8px_rgba(30,58,92,0.5)] ${className}`}
    >
      {label}
      <ChevronIcon className="h-[18px] w-[18px] shrink-0" />
    </a>
  );
}

// ─── 共通: セクション見出し (ネイビー系) ────────────────────────────────────

function MH({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-9 mx-auto max-w-2xl text-center lg:mb-12">
      <span className="section-label mb-3 inline-block rounded-full border border-[#C8D8EC] bg-[#EEF3FA] px-3.5 py-1 text-xs font-bold tracking-wider text-[#2272AE]">
        {eyebrow}
      </span>
      <h2 className="font-heading text-[22px] leading-snug font-bold text-[#263445] sm:text-[26px] lg:text-[32px]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-[#6B7A8D] lg:text-base">{description}</p>
      )}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const heroFeatures = [
  { icon: HomeIcon, label: "来院不要" },
  { icon: PhoneIcon, label: "スマホ完結" },
  { icon: DoctorIcon, label: "医師が診察" },
  { icon: BoxIcon, label: "自宅へ配送" },
];

function MenHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#EEF3FA] via-white to-[#F0F4F8]">
      <div className="grid lg:grid-cols-2 lg:items-stretch lg:min-h-[580px]">
        {/* 画像: SP上・PC右 */}
        <div className="relative h-[260px] w-full lg:order-2 lg:h-full lg:min-h-[580px]">
          <div className="absolute inset-0 bg-linear-to-br from-[#E8EEF5] via-[#EEF3FA] to-white" />
          <Image
            src="/images/men/hero-otaku-man-ready.png"
            alt="バックパックを手にスマホを確認する男性のアニメイラスト"
            fill
            priority
            quality={90}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center text-transparent lg:rounded-l-[48px]"
          />
        </div>

        {/* テキスト: SP下・PC左 */}
        <div className="flex items-center py-8 lg:order-1 lg:py-0">
          <Container wide className="lg:mx-0 lg:max-w-none lg:pr-0 lg:pl-10 xl:pl-16">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-lg lg:text-left">
              <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="badge inline-block rounded-full border border-[#C8D8EC] bg-white px-4 py-1.5 text-xs font-bold tracking-wider text-[#2272AE]">
                  来院不要・自宅完結
                </span>
                <span className="badge inline-block rounded-full bg-[#1E3A5F] px-4 py-1.5 text-xs font-bold tracking-wider text-white shadow-sm">
                  アンケート回答でクーポン発行
                </span>
              </div>

              <h1 className="font-heading text-[26px] leading-[1.35] font-black text-[#263445] sm:text-[32px] lg:text-[40px]">
                推しに、
                <br />
                <span className="text-[#1E3A5F]">かっこよくなって</span>
                <br />
                会いにいく。
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7A8D] lg:text-[15px]">
                AGA・メディカルダイエットなど、
                <br className="hidden sm:block" />
                気になる悩みをスマホから医師に相談。
                <br />
                通院不要・自宅から診察が完結します。
              </p>

              <div className="mt-6 lg:max-w-sm">
                <MenButton />
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#6B7A8D]">
                  アンケート回答後、対象の方にLINEでクーポンをご案内します。
                </p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#6B7A8D]">
                  相談だけでもOKです。
                </p>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-2 lg:max-w-sm">
                {heroFeatures.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-[10px] border border-[#D1DCE9] bg-white px-1 py-3 text-center shadow-[0_6px_14px_-8px_rgba(30,58,92,0.20)]"
                  >
                    <Icon className="mx-auto mb-1.5 h-[22px] w-[22px] text-[#2272AE]" />
                    <span className="block text-[11px] leading-tight font-bold text-[#263445]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

// ─── 共感セクション ─────────────────────────────────────────────────────────────

const worries = [
  "イベント前に、少しでも見た目を整えたい",
  "最近、髪のボリュームが気になってきた",
  "写真やチェキに写る自分の輪郭が気になる",
  "美容やクリニックに行くのは少しハードルが高い",
  "人に相談しづらい悩みを、こっそり相談したい",
  "仕事や趣味で忙しく、通院の時間が取りにくい",
];

function MenWorries() {
  return (
    <section className="bg-[#F0F4F8] py-10 lg:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label text-xs font-bold tracking-[0.2em] text-[#2272AE] uppercase">WORRY</p>
          <h2 className="mt-2 font-heading text-[26px] leading-[1.35] font-black text-[#263445] sm:text-[30px] lg:text-[36px]">
            こんな悩み、ありませんか？
          </h2>
        </div>
        <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-3">
          {worries.map((worry) => (
            <li
              key={worry}
              className="flex items-center gap-3 rounded-2xl border border-[#D1DCE9] bg-white px-5 py-4 text-[14.5px] font-medium leading-relaxed text-[#263445] shadow-sm"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF3FA] text-[#2272AE] text-xs font-black">
                •
              </span>
              {worry}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

// ─── コンセプトセクション ───────────────────────────────────────────────────────

function MenConcept() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* 画像: SP上・PC右 */}
          <div className="w-full lg:order-2 lg:flex-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-3xl bg-linear-to-br from-[#E8EEF5] via-white to-[#EEF3FA] shadow-md lg:max-w-none">
              <Image
                src="/images/men/mirror-grooming-man.png"
                alt="鏡の前で出かける前の身だしなみを整える男性のアニメイラスト"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top text-transparent"
              />
            </div>
          </div>

          {/* テキスト: SP下・PC左 */}
          <div className="w-full lg:order-1 lg:flex-1">
            <p className="section-label text-center text-xs font-bold tracking-[0.2em] text-[#2272AE] uppercase lg:text-left">
              CONCEPT
            </p>
            <h2 className="mt-2 text-center font-heading text-[26px] leading-[1.35] font-black text-[#263445] sm:text-[30px] lg:text-left lg:text-[36px]">
              <span className="text-[#1E3A5F]">"推し活前の</span>
              <br />
              <span className="text-[#1E3A5F]">身だしなみ"</span>
              という選択肢
            </h2>

            <p className="mt-4 text-center text-[14px] leading-relaxed text-[#6B7A8D] lg:text-left">
              ライブ、イベント、コラボカフェ、現場、遠征。
              <br />
              楽しみにしている日だからこそ、少しでも
              <br className="hidden sm:block" />
              自分に自信を持って向かいたい。
            </p>

            <p className="mt-4 text-center text-[14px] leading-relaxed text-[#6B7A8D] lg:text-left">
              シェアクリでは、AGAやメディカルダイエットなど、
              <br className="hidden sm:block" />
              気になるお悩みをスマホから医師に相談できます。
              <br />
              来院不要・自宅からのオンライン診療です。
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {["ライブ前", "イベント前", "現場前", "遠征前"].map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-[#C8D8EC] bg-white px-5 py-2 text-[13.5px] font-bold text-[#263445] shadow-sm"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── シェアクリのメリット ────────────────────────────────────────────────────────

const benefits = [
  {
    icon: HomeIcon,
    title: "来院不要",
    desc: "自宅や好きな場所からスマホで受診できます。",
  },
  {
    icon: DoctorIcon,
    title: "医師によるオンライン診察",
    desc: "資格を持つ医師がオンラインで問診・診察を担当します。",
  },
  {
    icon: BoxIcon,
    title: "お薬はご自宅へ配送",
    desc: "処方が決まったお薬をご自宅へお届けします。",
  },
  {
    icon: HeadsetIcon,
    title: "LINEから気軽にスタート",
    desc: "LINE登録だけで、まずは対象かどうか確認できます。",
  },
];

function MenBenefits() {
  return (
    <section className="bg-[#F0F4F8] py-10 lg:py-16">
      <Container>
        <MH
          eyebrow="FEATURES"
          title={
            <>
              <span className="text-[#1E3A5F]">シェアクリ</span>なら
              <br />
              自宅でスマホ診察
            </>
          }
          description="忙しい方も、人に相談しづらい悩みがある方も。通院なしで医師に相談できます。"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-[#D1DCE9] bg-white px-5 py-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF3FA] shadow-sm">
                <Icon className="h-[18px] w-[18px] text-[#2272AE]" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#263445]">{title}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#6B7A8D]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── PRICEセクション ────────────────────────────────────────────────────────────

function MenPrice() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <MH
          eyebrow="PRICE"
          title={
            <>
              今の購入価格から
              <span className="price-label text-[#1E3A5F]">5%OFF</span>で
              <br />
              ご案内できる可能性があります
            </>
          }
        />

        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-[#D1DCE9] bg-white p-6 shadow-md lg:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF3FA]">
                <CheckIcon className="h-5 w-5 text-[#2272AE]" />
              </div>
              <div>
                <div className="mb-2 flex flex-wrap gap-1.5">
                  <span className="badge inline-block rounded-full bg-[#1E3A5F] px-3 py-0.5 text-[11px] font-bold text-white">
                    診察料0円
                  </span>
                  <span className="badge inline-block rounded-full border border-[#C8D8EC] bg-[#EEF3FA] px-3 py-0.5 text-[11px] font-bold text-[#2272AE]">
                    お薬代・送料は別途
                  </span>
                </div>
                <p className="text-[15px] font-bold text-[#263445]">
                  他院・他サービスをご利用中の方へ
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#6B7A8D]">
                  現在、他のクリニックやオンライン診療サービスをご利用中の方は、シェアクリでも同等の内容を
                  <strong className="text-[#263445]">
                    今より<span className="price-label">5%OFF</span>でご案内できる可能性
                  </strong>
                  があります。
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#6B7A8D]">
                  まずはアンケートから対象かどうかをご確認ください。ご相談だけでも歓迎です。
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#F0F4F8] px-4 py-3 text-[11px] leading-relaxed text-[#6B7A8D]">
              ※ 5%OFFは対象者のみ適用されます。診療内容・処方内容により価格が異なる場合があります。必ずしも5%OFFになることを保証するものではありません。詳細はLINE登録後にご案内します。
            </div>

            <div className="mt-4 rounded-xl border border-[#C8D8EC] bg-[#EEF3FA] px-4 py-3 text-[12.5px] leading-relaxed text-[#6B7A8D]">
              現在の購入価格に関する簡単なアンケートにお答えいただくと、対象の方へLINEでクーポンをご案内します。
            </div>

            <div className="mt-4">
              <MenButton />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── お薬例 ────────────────────────────────────────────────────────────────────

const medicineCategories = [
  {
    category: "AGA・薄毛ケア",
    note: "薄毛・抜け毛のお悩みをオンラインで相談できます。",
    items: ["フィナステリド", "デュタステリド", "ミノキシジル（内服）", "ミノキシジル（外用）"],
    tag: "bg-[#EBF7F5] text-[#1E7A6E]",
    dot: "bg-[#1E7A6E]",
  },
  {
    category: "メディカルダイエット",
    note: "医師管理のもと、体重・体型のお悩みをサポートします。",
    items: ["リベルサス", "ビクトーザ", "サクセンダ", "ウゴービ", "防風通聖散"],
    tag: "bg-[#EEF6FC] text-[#2272AE]",
    dot: "bg-[#2272AE]",
  },
  {
    category: "ED・男性のお悩み",
    note: "EDなどのデリケートなお悩みも、プライバシーに配慮して相談できます。",
    items: ["シルデナフィル", "タダラフィル", "バルデナフィル"],
    tag: "bg-[#EEF2F7] text-[#3A5578]",
    dot: "bg-[#3A5578]",
  },
  {
    category: "コンディションケア",
    note: "肌あれ・疲労感・ビタミン補給など、コンディション維持を相談できます。",
    items: ["ビタミン補給", "睡眠改善薬", "トラネキサム酸", "その他内服薬・サプリメント"],
    tag: "bg-[#F0F3F6] text-[#4A5E72]",
    dot: "bg-[#4A5E72]",
  },
  {
    category: "その他の相談メニュー",
    note: "上記以外のお悩みもLINEからお気軽にご相談ください。",
    items: ["低用量ピル（男性向けホルモン相談）", "その他内服薬", "生活習慣サポート"],
    tag: "bg-[#F4F6F9] text-[#5A6A7A]",
    dot: "bg-[#94A8BE]",
  },
];

function MenMedicineMenu() {
  return (
    <section className="bg-[#F4F7FA] py-10 lg:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label text-xs font-bold tracking-[0.2em] text-[#2272AE] uppercase">MENU</p>
          <h2 className="mt-2 font-heading text-[24px] leading-[1.35] font-black text-[#263445] sm:text-[28px] lg:text-[34px]">
            診察結果に応じて
            <span className="text-[#1E3A5F]">相談できるお薬例</span>
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-[#6B7A8D]">
            AGA・メディカルダイエット・EDなど、目的に合わせて医師と相談できます。
            <br />
            以下は取扱いのあるお薬の一例です。
          </p>
        </div>

        {/* AGA visual feature */}
        <div className="mx-auto mt-8 mb-6 flex max-w-2xl flex-col items-center gap-5 overflow-hidden rounded-2xl border border-[#D1DCE9] bg-white shadow-sm sm:flex-row">
          <div className="relative h-[200px] w-full shrink-0 sm:h-[176px] sm:w-[176px]">
            <Image
              src="/images/men/aga-consulting-man.png"
              alt="スマホを見ながら髪を整える男性のアニメイラスト"
              fill
              quality={85}
              sizes="(min-width: 640px) 176px, 100vw"
              className="object-cover object-top text-transparent"
            />
          </div>
          <div className="px-5 pb-5 sm:py-5 sm:pl-0 sm:pr-6">
            <span className="badge inline-block rounded-full bg-[#EBF7F5] px-3 py-0.5 text-[11px] font-bold text-[#1E7A6E]">
              AGA・薄毛ケア
            </span>
            <p className="mt-2 text-[14.5px] font-bold text-[#263445]">
              スマホから薄毛の悩みを医師に相談
            </p>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#6B7A8D]">
              フィナステリドやミノキシジルなど、診察結果をもとに医師が処方を検討します。
              <br />
              来院不要・自宅から気軽に相談できます。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {medicineCategories.map(({ category, note, items, tag, dot }, idx) => (
            <div
              key={category}
              className={`rounded-2xl border border-[#D1DCE9] bg-white p-5 shadow-[0_2px_10px_-4px_rgba(30,58,92,0.12)] ${idx === medicineCategories.length - 1 && medicineCategories.length % 2 !== 0 ? "sm:col-span-2 sm:max-w-[calc(50%-8px)]" : ""}`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`badge rounded-full px-3 py-0.5 text-[11px] font-bold ${tag}`}>
                  {category}
                </span>
              </div>
              <p className="mb-2 text-[11.5px] text-[#6B7A8D]">{note}</p>
              <ul className="flex flex-col gap-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-[#263445]">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-[#D1DCE9] bg-white/80 px-5 py-4">
          <p className="text-[11.5px] leading-relaxed text-[#6B7A8D]">
            ※ 上記は取扱い例の一部です。診察結果、既往歴、服用中のお薬、体質等により処方できない場合があります。<br />
            ※ 自由診療です。効果・副作用には個人差があります。<br />
            ※ お薬の詳細・費用・副作用・禁忌等は、診察時またはLINE登録後の案内をご確認ください。
          </p>
        </div>
      </Container>
    </section>
  );
}

// ─── 利用の流れ ───────────────────────────────────────────────────────────────

const steps = [
  {
    step: "01",
    title: "アンケート回答・LINE登録",
    desc: "30秒アンケートに回答。対象の方へLINEでクーポンをご案内します。",
  },
  {
    step: "02",
    title: "問診票の入力",
    desc: "スマホで問診票を入力します。数分程度で完了します。",
  },
  {
    step: "03",
    title: "医師によるオンライン診察",
    desc: "医師がオンラインで診察します。自宅から相談できるため、人に知られる心配がありません。",
  },
  {
    step: "04",
    title: "お薬の処方・ご自宅へ配送",
    desc: "処方が決まったお薬をご自宅へお届けします。処方は診察後に医師が判断します。",
  },
];

function MenFlow() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <MH
          eyebrow="FLOW"
          title="ご利用の流れ"
          description="自宅から相談できるため、忙しい方や人に相談しづらいお悩みがある方にも利用しやすい導線です。"
        />
        <div className="mx-auto flex max-w-lg flex-col">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="step-number flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F] text-[13px] font-black text-white shadow">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="my-1 w-px flex-1 bg-[#C8D8EC]" />
                )}
              </div>
              <div className="pb-8">
                <p className="text-[15px] font-bold text-[#263445]">{s.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-[#6B7A8D]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-[#263445]/40">
          ※ 診療内容や決済時間、配送地域により異なります。
        </p>
      </Container>
    </section>
  );
}

// ─── 注意事項 ─────────────────────────────────────────────────────────────────

const notices = [
  "本サービスは医師の診察を必要とするオンライン診療です",
  "薬の処方は診察後に医師が判断します",
  "症状や既往歴によっては処方できない場合があります",
  "5%OFFは対象者のみ適用されます。現在のご利用状況・処方内容によっては適用されない場合があります",
  "5%OFFの適用可否および詳細はLINE登録後にご案内します",
  "本ページはサービス内容のご案内を目的としており、医療効果や特定の結果を保証するものではありません",
  "診察料はかかりません。お薬が処方される場合はお薬代・送料などが別途かかります",
  "料金・診療メニューの詳細はLINE登録後にご確認いただけます",
];

function MenDisclaimer() {
  return (
    <section className="bg-[#EEF3FA] py-14 lg:py-20">
      <Container>
        <MH eyebrow="NOTICE" title="ご利用にあたっての注意事項" />
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#D1DCE9] bg-white px-4 py-1 lg:px-6">
          {notices.map((notice, index) => (
            <div
              key={notice}
              className={`flex items-start gap-2 py-3 text-xs leading-relaxed text-[#6B7A8D] ${
                index < notices.length - 1 ? "border-b border-dashed border-[#D1DCE9]" : ""
              }`}
            >
              <AlertIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2272AE]" />
              {notice}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "AGAかどうかわからなくても相談できますか？",
    answer:
      "はい。まずは現在のお悩みを医師にご相談いただけます。診断・処方の可否は診察後に医師が判断します。",
  },
  {
    question: "ダイエット薬は誰でも使えますか？",
    answer:
      "診察結果により、処方可否が判断されます。必ず処方されるものではありません。詳細は診察時にご確認ください。",
  },
  {
    question: "通院は必要ですか？",
    answer:
      "オンライン診療のため、スマホから相談できます。来院いただく必要はありません。詳細は案内に沿ってご確認ください。",
  },
  {
    question: "相談内容は周りに知られませんか？",
    answer:
      "プライバシーに配慮してご相談いただけます。お薬の配送も個人情報に配慮した形でお届けします。",
  },
  {
    question: "クーポンだけ受け取れますか？",
    answer:
      "まずはアンケートにご回答ください。対象の方へLINEでクーポンをご案内します。クーポンの利用は任意です。",
  },
];

function MenFaq() {
  return (
    <section className="bg-[#F4F7FA] py-10 lg:py-16">
      <Container>
        <MH eyebrow="FAQ" title="よくある質問" />
        <div className="mx-auto flex max-w-2xl flex-col gap-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-[#D1DCE9] bg-[#EEF3FA] px-4 py-3 open:bg-white lg:px-5 lg:py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[13.5px] font-bold text-[#263445]">
                <span className="flex items-center gap-2">
                  <span className="section-label text-[#2272AE]">Q</span>
                  {item.question}
                </span>
                <ChevronIcon className="h-4 w-4 shrink-0 rotate-90 text-[#2272AE] transition-transform group-open:rotate-[270deg]" />
              </summary>
              <p className="mt-2.5 pl-5 text-[13px] leading-relaxed text-[#6B7A8D]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── 最終CTA ──────────────────────────────────────────────────────────────────

function MenCta() {
  return (
    <section className="bg-linear-to-br from-[#1E3A5F] to-[#2272AE] py-12 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-12">
          {/* 画像 — PC: 右, SP: 上 */}
          <div className="w-full lg:order-2 lg:w-[52%] lg:shrink-0">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-3xl bg-[#1a3358] shadow-lg lg:aspect-auto lg:h-full lg:min-h-[360px] lg:max-w-none">
              <Image
                src="/images/men/final-cta-man.png"
                alt="鏡の前でセルフィーを撮る男性のアニメイラスト"
                fill
                quality={90}
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-top text-transparent"
              />
            </div>
          </div>

          {/* テキスト — PC: 左, SP: 下 */}
          <div className="w-full lg:order-1 lg:w-[48%] lg:shrink-0 lg:flex lg:flex-col lg:justify-center">
            <h2 className="text-center font-heading text-[26px] leading-[1.4] font-black text-white sm:text-[30px] lg:text-left lg:text-[34px]">
              次の現場に向けて、
              <br />
              自分を少し
              <br />
              整えてみませんか？
            </h2>
            <p className="mt-5 text-center text-[14px] leading-relaxed text-white/80 lg:text-left">
              髪や体型の悩みは、ひとりで抱え込まなくても大丈夫です。
            </p>
            <p className="mt-3 text-center text-[14px] leading-relaxed text-white/80 lg:text-left">
              まずは30秒アンケートから、
              <br />
              相談できる内容を確認してみてください。
            </p>
            <div className="mt-8 lg:max-w-sm">
              <a
                href={siteConfig.lineUrl}
                className="cta-button flex w-full animate-[pulse-cta_2.6s_ease-in-out_infinite] items-center justify-center gap-2.5 rounded-full bg-white px-5 py-4 text-base font-bold text-[#1E3A5F] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.35)]"
              >
                30秒アンケートでクーポンを受け取る
                <ChevronIcon className="h-[18px] w-[18px] shrink-0" />
              </a>
              <p className="mt-2.5 text-center text-[12.5px] leading-relaxed text-white/70 lg:text-left">
                アンケート回答後、対象の方にLINEでクーポンをご案内します。
              </p>
              <p className="mt-1 text-center text-[11px] text-white/50 lg:text-left">
                ※ お薬代・送料は別途かかります。クーポンは対象者のみ発行。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MenPage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <MenHeader />
      <main>
        <MenHero />
        <MenWorries />
        <MenConcept />
        <MenBenefits />
        <MenPrice />
        <MenMedicineMenu />
        <MenFlow />
        <MenDisclaimer />
        <MenFaq />
        <MenCta />
      </main>
      <Footer />
    </div>
  );
}
