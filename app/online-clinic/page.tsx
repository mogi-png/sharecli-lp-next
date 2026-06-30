import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Faq, { type FaqItem } from "@/components/Faq";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LineButton from "@/components/ui/LineButton";
import {
  HomeIcon,
  PhoneIcon,
  DoctorIcon,
  BoxIcon,
  ShieldIcon,
  SparkleIcon,
  CheckIcon,
  HeadsetIcon,
  AlertIcon,
  ClipboardIcon,
  ChatIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "シェアクリ｜オンラインクリニック — 自宅から相談・5%OFFの可能性",
  description:
    "AGA・美容内服・ダイエット・EDなど、気になる悩みをスマホから相談。来院不要・自宅完結のオンライン診療サービス。現在ご利用中の方は今の価格より5%OFFになる可能性があります。",
  robots: { index: false, follow: false },
};

// ─── 共通: 画像プレースホルダー wrapper ───────────────────────────────────────
// 画像が未配置でもグラデーション背景が表示され、レイアウトが崩れない

function PhotoFrame({
  src,
  alt,
  aspect = "aspect-[4/3]",
  gradient = "from-slate-100 via-blue-50 to-slate-50",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: string;
  gradient?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-linear-to-br ${gradient} shadow-md ${className}`}
    >
      <div className={aspect}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={90}
          sizes={sizes}
          className="object-cover text-transparent"
        />
      </div>
    </div>
  );
}

// ─── ファーストビュー ─────────────────────────────────────────────────────────

const heroFeatures = [
  { icon: HomeIcon, label: "来院不要" },
  { icon: PhoneIcon, label: "スマホ完結" },
  { icon: DoctorIcon, label: "医師が診察" },
  { icon: BoxIcon, label: "自宅へ配送" },
];

function OcHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale">
      <div className="grid lg:grid-cols-2 lg:items-stretch lg:min-h-[580px]">
        {/* 写真: SP上・PC右 */}
        <div className="relative h-[220px] w-full lg:order-2 lg:h-full lg:min-h-[580px]">
          <div className="absolute inset-0 bg-linear-to-br from-slate-100 via-blue-50 to-slate-50" />
          <Image
            src="/images/online-clinic/hero.jpg"
            alt="自宅でスマホを見ながらオンライン相談をする女性"
            fill
            priority
            quality={90}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover text-transparent lg:rounded-l-[48px]"
          />
        </div>

        {/* テキスト: SP下・PC左 */}
        <div className="flex items-center py-8 lg:order-1 lg:py-0">
          <Container wide className="lg:mx-0 lg:max-w-none lg:pr-0 lg:pl-10 xl:pl-16">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-lg lg:text-left">
              <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="inline-block rounded-full border border-brand-pink-light bg-white px-4 py-1.5 text-xs font-bold tracking-wider text-brand-pink-deep">
                  通院不要・自宅完結
                </span>
                <span className="inline-block rounded-full bg-brand-pink-deep px-4 py-1.5 text-xs font-bold tracking-wider text-white shadow-sm">
                  アンケート回答でクーポン発行
                </span>
              </div>
              <h1 className="font-heading text-[26px] leading-[1.35] font-black text-brand-ink sm:text-[32px] lg:text-[40px]">
                家にいながら、
                <br />
                オンラインで相談。
                <br />
                <span className="text-brand-pink-deep">
                  いつものケアを
                  <br className="sm:hidden" />
                  今より5%OFFへ。
                </span>
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink-soft lg:text-[15px]">
                AGA・美容内服・ダイエット・EDなど、
                <br className="hidden sm:block" />
                気になる悩みをスマホから相談。
                <br />
                通院の手間なく、自宅で診療が完結します。
              </p>

              <div className="mt-6 lg:max-w-sm">
                <LineButton label="30秒アンケートでクーポンを受け取る" />
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-brand-ink-soft">
                  30秒アンケート回答後、対象クーポンをLINEでご案内します。
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-brand-ink">
                  <span className="font-bold text-brand-pink-deep">診察料は0円。</span>
                  対象商品・プランに限り、今の購入価格から5%OFFでご案内できる場合があります。
                </p>
                <p className="mt-1 text-[11px] text-brand-ink/40">
                  ※ お薬代・送料は別途かかります。クーポンは対象者のみ発行。
                </p>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-2 lg:max-w-sm">
                {heroFeatures.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-[10px] border border-brand-pink-light bg-white px-1 py-3 text-center shadow-[0_6px_14px_-8px_rgba(255,111,160,0.35)]"
                  >
                    <Icon className="mx-auto mb-1.5 h-[22px] w-[22px] text-brand-pink-deep" />
                    <span className="block text-[11px] leading-tight font-bold text-brand-ink">
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

// ─── こんなお悩みありませんか ──────────────────────────────────────────────────

const worries = [
  "薄毛・抜け毛が最近気になってきた",
  "ダイエットしても思うように体型が変わらない",
  "美容ケアを始めたいけど、何から相談すればいいかわからない",
  "男性のデリケートな悩みを気軽に相談できる場所がない",
  "通院する時間がなかなかとれない",
  "今飲んでいる薬をもう少しおトクに続けたい",
];

function OcProblems() {
  return (
    <section className="bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale py-10 lg:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase">
            WORRY
          </p>
          <h2 className="mt-2 font-heading text-[26px] leading-[1.35] font-black text-brand-ink sm:text-[30px] lg:text-[36px]">
            こんなお悩み、ありませんか？
          </h2>
        </div>
        <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-3">
          {worries.map((worry) => (
            <li
              key={worry}
              className="flex items-center gap-3 rounded-2xl border border-brand-pink-pale bg-white/80 px-5 py-4 text-[14.5px] font-medium leading-relaxed text-brand-ink shadow-sm"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-pink-pale text-brand-pink-deep text-xs font-black">
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

// ─── オンライン診療のメリット ──────────────────────────────────────────────────

const benefits = [
  {
    icon: HomeIcon,
    title: "来院不要",
    desc: "自宅や職場など、好きな場所からスマホで受診できます。",
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

function OcBenefits() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
          {/* 写真: SP上・PC左 */}
          <div className="w-full lg:order-1 lg:flex-1">
            <PhotoFrame
              src="/images/online-clinic/beauty-care.jpg"
              alt="自宅でセルフケアをする女性"
              aspect="aspect-[4/3]"
              gradient="from-brand-pink-pale via-white to-brand-purple-pale"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* テキスト: SP下・PC右 */}
          <div className="w-full lg:order-2 lg:flex-1">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase lg:text-left">
              BENEFITS
            </p>
            <h2 className="mt-2 text-center font-heading text-[26px] leading-[1.35] font-black text-brand-ink sm:text-[30px] lg:text-left lg:text-[36px]">
              オンライン診療の
              <span className="text-brand-pink-deep">メリット</span>
            </h2>
            <p className="mt-3 text-center text-[13.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              通院の手間を減らして、気になる悩みをいつでもご相談いただけます。
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="flex items-start gap-3 rounded-2xl border border-brand-purple-light bg-brand-purple-pale/40 px-4 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="h-4.5 w-4.5 text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-brand-ink">{title}</p>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-brand-ink-soft">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── 5%OFF訴求 ────────────────────────────────────────────────────────────────

function OcDiscount() {
  return (
    <section className="bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale py-10 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="PRICE"
          title={
            <>
              今の購入価格から
              <span className="text-brand-pink-deep">5%OFF</span>で
              <br />
              ご案内できる可能性があります
            </>
          }
        />
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-12">
          {/* テキスト: SP上・PC左 */}
          <div className="w-full lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            <div className="rounded-3xl border border-brand-pink-light bg-white p-6 shadow-md lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-pink-pale">
                  <CheckIcon className="h-5 w-5 text-brand-pink-deep" />
                </div>
                <div>
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    <span className="inline-block rounded-full bg-brand-pink-deep px-3 py-0.5 text-[11px] font-bold text-white">
                      診察料0円
                    </span>
                    <span className="inline-block rounded-full border border-brand-pink-light bg-brand-pink-pale px-3 py-0.5 text-[11px] font-bold text-brand-pink-deep">
                      お薬代・送料は別途
                    </span>
                  </div>
                  <p className="text-[15px] font-bold text-brand-ink">
                    他院・他サービスをご利用中の方へ
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-brand-ink-soft">
                    現在、他のクリニックやオンライン診療サービスをご利用中の方は、シェアクリでも同等の内容を
                    <strong className="text-brand-ink">
                      今より5%OFFでご案内できる可能性
                    </strong>
                    があります。
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-brand-ink-soft">
                    まずはLINEから対象かどうかをご確認ください。ご相談だけでも歓迎です。
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-xl bg-brand-pink-pale/60 px-4 py-3 text-[11px] leading-relaxed text-brand-ink-soft">
                ※ 5%OFFは対象者のみ適用されます。診療内容・処方内容により価格が異なる場合があります。必ずしも5%OFFになることを保証するものではありません。詳細はLINE登録後にご案内します。
              </div>
              <div className="mt-4 rounded-xl border border-brand-purple-light bg-brand-purple-pale/40 px-4 py-3 text-[12.5px] leading-relaxed text-brand-ink-soft">
                現在の購入価格に関する簡単なアンケートにお答えいただくと、対象の方へLINEでクーポンをご案内します。
              </div>
              <div className="mt-4">
                <LineButton label="30秒アンケートでクーポンを受け取る" />
              </div>
            </div>
          </div>

          {/* 写真: SP下・PC右 */}
          <div className="w-full lg:w-[45%] lg:shrink-0">
            <PhotoFrame
              src="/images/online-clinic/price-check.jpg"
              alt="価格を確認する女性"
              aspect="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[320px]"
              gradient="from-slate-50 via-blue-50 to-slate-100"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="lg:min-h-[320px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── お薬・メニュー例 ──────────────────────────────────────────────────────────

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

function OcMedicineMenu() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-[#2272AE] uppercase">
            MENU
          </p>
          <h2 className="mt-2 font-heading text-[24px] leading-[1.35] font-black text-[#263445] sm:text-[28px] lg:text-[34px]">
            診察結果に応じて
            <span className="text-[#1E7A6E]">相談できるお薬例</span>
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-[#5A6A7A]">
            AGA・美容内服・メディカルダイエット・EDなど、目的に合わせて医師と相談できます。
            <br />
            以下は取扱いのあるお薬の一例です。
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {medicineCategories.map(({ category, note, items, tag }, idx) => (
            <div
              key={category}
              className={`rounded-2xl border border-[#E5EAF0] bg-white p-5 shadow-[0_2px_8px_-4px_rgba(38,52,69,0.10)] ${idx === medicineCategories.length - 1 && medicineCategories.length % 2 !== 0 ? "sm:col-span-2 sm:max-w-[calc(50%-8px)]" : ""}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`rounded-full px-3 py-0.5 text-[11px] font-bold ${tag}`}>
                  {category}
                </span>
              </div>
              <p className="mb-2 text-[11.5px] text-[#5A6A7A]">{note}</p>
              <ul className="flex flex-col gap-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-[#263445]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#94A8BE]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-[#E5EAF0] bg-[#F7F9FB] px-5 py-4">
          <p className="text-[11.5px] leading-relaxed text-[#5A6A7A]">
            ※ 上記は取扱い例の一部です。診察結果、既往歴、服用中のお薬、体質等により処方できない場合があります。<br />
            ※ 自由診療です。効果・副作用には個人差があります。<br />
            ※ お薬の詳細・費用・副作用・禁忌等は、診察時またはLINE登録後の案内をご確認ください。
          </p>
        </div>
      </Container>
    </section>
  );
}

// ─── LINE相談 ─────────────────────────────────────────────────────────────────

function OcLineConsultation() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-14">
          {/* 写真: SP上・PC右 */}
          <div className="w-full lg:order-2 lg:flex-1">
            <PhotoFrame
              src="/images/online-clinic/line-consult.jpg"
              alt="スマホでLINE相談をする女性"
              aspect="aspect-[4/3]"
              gradient="from-emerald-50 via-slate-50 to-blue-50"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* テキスト: SP下・PC左 */}
          <div className="w-full lg:order-1 lg:flex-1">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase lg:text-left">
              LINE
            </p>
            <h2 className="mt-2 text-center font-heading text-[26px] leading-[1.35] font-black text-brand-ink sm:text-[30px] lg:text-left lg:text-[36px]">
              LINEから
              <span className="text-brand-pink-deep">気軽に</span>
              <br />
              相談スタート
            </h2>
            <p className="mt-3 text-center text-[13.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              アプリのダウンロードや面倒な手続きは不要です。
              <br className="hidden sm:block" />
              LINEに登録するだけで、まずは対象かどうかをご確認いただけます。
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "LINEを友だち追加するだけ",
                "相談・質問だけでもOK",
                "5%OFFの対象かすぐ確認できる",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-brand-ink">
                  <ChatIcon className="h-4 w-4 shrink-0 text-line-green" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 lg:max-w-sm">
              <LineButton label="30秒アンケートでクーポンを受け取る" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── 相談できるカテゴリ ───────────────────────────────────────────────────────

const categories = [
  {
    icon: ClipboardIcon,
    label: "AGA・スカルプケア",
    desc: "薄毛・抜け毛のお悩みをオンラインでご相談いただけます。",
    iconColor: "text-brand-purple",
    bg: "bg-brand-purple-pale/40",
    border: "border-brand-purple-light",
  },
  {
    icon: SparkleIcon,
    label: "美容・美白ケア",
    desc: "肌のお悩みや美容内服についてご相談いただけます。",
    iconColor: "text-brand-pink-deep",
    bg: "bg-brand-pink-pale",
    border: "border-brand-pink-light",
  },
  {
    icon: CheckIcon,
    label: "ダイエットサポート",
    desc: "体型・体重管理に関するお悩みをスマホから相談できます。",
    iconColor: "text-brand-purple",
    bg: "bg-brand-purple-pale/40",
    border: "border-brand-purple-light",
  },
  {
    icon: ShieldIcon,
    label: "男性の悩み相談",
    desc: "デリケートな男性の悩みも、プライバシーに配慮してご相談いただけます。",
    iconColor: "text-brand-pink-deep",
    bg: "bg-brand-pink-pale",
    border: "border-brand-pink-light",
  },
];

function OcCategories() {
  return (
    <section className="bg-brand-purple-pale/30 py-10 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="CATEGORY"
          title="相談できるカテゴリ"
        />

        {/* カードグリッド */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map(({ icon: Icon, label, desc, iconColor, bg, border }) => (
            <div
              key={label}
              className={`flex items-start gap-4 rounded-2xl border ${border} ${bg} p-5`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon className={`h-5 w-5 ${iconColor}`} />
              </div>
              <div>
                <p className="text-[14.5px] font-bold text-brand-ink">{label}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-brand-ink-soft">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-[11.5px] text-brand-ink-soft">
          ※ 各カテゴリは医師の診察が必要です。処方の可否は診察後に医師が判断します。
        </p>
      </Container>
    </section>
  );
}

// ─── 利用の流れ ───────────────────────────────────────────────────────────────

const steps = [
  {
    step: "01",
    title: "LINEで登録・対象確認",
    desc: "LINEを友だち追加して、5%OFFの対象かどうかをまずご確認ください。ご相談だけでもOKです。",
  },
  {
    step: "02",
    title: "問診票の入力",
    desc: "スマホで問診票を入力します。数分程度で完了します。",
  },
  {
    step: "03",
    title: "医師によるオンライン診察",
    desc: "医師がオンラインで診察します。診察時間は内容により異なります。",
  },
  {
    step: "04",
    title: "お薬の処方・ご自宅へ配送",
    desc: "処方が決まったお薬をご自宅へお届けします。処方は診察後に医師が判断します。",
  },
];

function OcFlow() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="FLOW"
          title="ご利用の流れ"
          description="LINEに登録するだけで、すべてスマホ一つで完結します。"
        />
        <div className="mx-auto flex max-w-lg flex-col">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-pink-deep text-[13px] font-black text-white shadow">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="my-1 w-px flex-1 bg-brand-pink-light" />
                )}
              </div>
              <div className="pb-8">
                <p className="text-[15px] font-bold text-brand-ink">{s.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-brand-ink-soft">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-brand-ink/40">
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

function OcDisclaimer() {
  return (
    <section className="bg-brand-pink-pale py-14 lg:py-20">
      <Container>
        <SectionHeading eyebrow="NOTICE" title="ご利用にあたっての注意事項" />
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#ecdfe6] bg-[#faf7f9] px-4 py-1 lg:px-6">
          {notices.map((notice, index) => (
            <div
              key={notice}
              className={`flex items-start gap-2 py-3 text-xs leading-relaxed text-brand-ink-soft ${
                index < notices.length - 1 ? "border-b border-dashed border-[#ecdfe6]" : ""
              }`}
            >
              <AlertIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-pink-deep" />
              {notice}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqItems: FaqItem[] = [
  {
    question: "どんな悩みに対応していますか？",
    answer:
      "AGA（薄毛・抜け毛）、美容内服、ダイエットサポート、男性のデリケートな悩みなどに対応しています。詳細なカテゴリはLINE登録後にご確認いただけます。",
  },
  {
    question: "5%OFFはどのように確認できますか？",
    answer:
      "LINEに登録後、スタッフにお知らせください。ご利用状況を確認のうえ、5%OFFの対象かどうかをご案内します。必ずしも適用されることを保証するものではありません。",
  },
  {
    question: "現在別のクリニックで薬をもらっていますが、相談できますか？",
    answer:
      "はい、ご相談いただけます。ただし処方内容は診察後に医師が判断します。他院での処方内容をそのまま引き継ぐことをお約束するものではありません。",
  },
  {
    question: "診察料はかかりますか？",
    answer:
      "診察料はかかりません。お薬が処方される場合は、お薬代や送料などが別途かかります。費用の詳細はLINE登録後、または診察前のご案内でご確認いただけます。なお、本サービスは自由診療です。診察結果により処方できない場合があります。",
  },
  {
    question: "本当に通院不要ですか？",
    answer:
      "はい。問診・診察・お薬の受け取りまで、すべてスマホひとつで完結します。来院いただく必要はありません。",
  },
];

// ─── ページ専用 CTA（実写画像・二次元キャラ不使用）───────────────────────────────

function OcCta() {
  return (
    <section className="bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          {/* 写真 — PC: 右60%, SP: 上 */}
          <div className="w-full lg:order-2 lg:w-[60%] lg:shrink-0">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale shadow-md lg:aspect-auto lg:h-full lg:min-h-[420px] lg:max-w-none">
              <Image
                src="/images/online-clinic/final-cta.jpg"
                alt="スマホで気軽に相談する女性"
                fill
                quality={90}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-top text-transparent"
              />
            </div>
          </div>

          {/* テキスト — PC: 左40%, SP: 下 */}
          <div className="w-full lg:order-1 lg:w-[40%] lg:shrink-0 lg:flex lg:flex-col lg:justify-center">
            <h2 className="text-center font-heading text-[26px] leading-[1.4] font-black text-brand-ink sm:text-[30px] lg:text-left lg:text-[36px]">
              まずはLINEから
              <br />
              <span className="text-brand-pink-deep">お気軽に</span>ご確認ください
            </h2>
            <p className="mt-5 text-center text-[14.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              自宅からスマホで医師に相談できる
              <br />
              オンライン診療サービスです。
            </p>
            <p className="mt-3 text-center text-[14.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              AGA・美容内服・ダイエットなど、
              <br />
              気になるお悩みをオンラインで相談できます。
            </p>
            <div className="mt-8">
              <LineButton label="30秒アンケートでクーポンを受け取る" variant="primary" />
              <p className="mt-2.5 text-center text-[12.5px] leading-relaxed text-brand-ink/70 lg:text-left">
                <span className="font-bold text-brand-pink-deep">診察料は0円。</span>
                アンケート回答後、対象の方へクーポンをLINEでご案内します。
              </p>
              <p className="mt-1 text-center text-[11px] text-brand-ink/40 lg:text-left">
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

export default function OnlineClinicPage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <Header />
      <main>
        <OcHero />
        <OcProblems />
        <OcBenefits />
        <OcDiscount />
        <OcMedicineMenu />
        <OcLineConsultation />
        <OcCategories />
        <OcFlow />
        <OcDisclaimer />
        <Faq items={faqItems} />
        <OcCta />
      </main>
      <Footer />
    </div>
  );
}
