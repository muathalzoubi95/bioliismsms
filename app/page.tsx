"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Lock,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Wallet,
  Receipt,
} from "lucide-react";

export default function HomePage() {
  const link = "https://zaimsor.com?label=0cbf4a0db8b341ac5b659c6ce081bc01";

  const items = [
    { title: "الدفع السريع", href: link, Icon: CreditCard },
    { title: "تعبئة باقات رصيد", href: link, Icon: Wallet },
    { title: "ادفع فواتيرك", href: link, Icon: Receipt },
  ];

  return (
    <div
      className="min-h-screen text-slate-100 bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden"
      dir="rtl"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: 22,
          }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/ww.jpeg"
                alt="logo"
                className="h-9 w-9 rounded-full ring-2 ring-fuchsia-400/60 shadow-sm"
              />
              <span className="text-sm text-slate-300 hidden sm:inline">
                لوحة الروابط
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/privacy">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-fuchsia-300 hover:text-emerald-300 hover:bg-white/5"
                >
                  سياسة الخصوصية
                </Button>
              </Link>
              <Link href="/security">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-fuchsia-300 hover:text-emerald-300 hover:bg-white/5"
                >
                  قواعد الأمان
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-12">
          <Avatar className="h-24 w-24 mb-6 ring-4 ring-fuchsia-600 shadow-[0_0_40px_-10px] shadow-fuchsia-600/60">
            <AvatarImage src="/ww.jpeg" alt="الصورة الشخصية" />
            <AvatarFallback className="text-3xl bg-emerald-600 text-white">
              أح
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-rose-200 to-emerald-300">
            مرحبًا بك 👋
          </h1>
          <p className="mt-3 text-sm text-slate-300 max-w-prose">
            تحكم بخطك، تسوق وادفع بأسلوب جديد وسهل
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 mb-12">
          {items.map(({ title, href, Icon }, i) => (
            <div key={i}>
              <Card className="group relative border-white/10 bg-white/5 hover:bg-white/7.5 transition-all duration-300 rounded-2xl overflow-hidden">
                <Link
                  href={href}
                  className="flex items-center justify-between p-5 sm:p-6 gap-4"
                  aria-label={title}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center group-hover:bg-fuchsia-500/10 group-hover:border-fuchsia-400/30 transition-colors">
                      <Icon className="h-6 w-6 text-fuchsia-300" />
                    </div>
                    <div className="text-right">
                      <h3 className="font-semibold text-base text-emerald-200/90">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-400 hidden sm:block">
                        انتقل الآن إلى الصفحة المقصودة
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-fuchsia-300 group-hover:translate-x-0.5 transition-transform" />

                  {/* subtle highlight on hover */}
                  <span className="pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Card>
            </div>
          ))}
        </div>

        {/* Security */}
        <Card className="p-6 sm:p-7 bg-white/5 border-white/10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/20">
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="text-right">
              <h3 className="font-semibold text-sm mb-2 text-emerald-200">
                موقع آمن ومحمي
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                نحن نلتزم بحماية خصوصيتك وأمان بياناتك. جميع الروابط محمية
                ومشفرة. يرجى مراجعة{" "}
                <Link
                  href="/privacy"
                  className="text-fuchsia-300 underline-offset-4 hover:underline"
                >
                  سياسة الخصوصية
                </Link>{" "}
                و{" "}
                <Link
                  href="/security"
                  className="text-fuchsia-300 underline-offset-4 hover:underline"
                >
                  قواعد الأمان
                </Link>{" "}
                لمزيد من المعلومات.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <Lock className="h-4 w-4" />
                <span>تشفير TLS • حماية من التتبع • أفضل ممارسات الأمان</span>
              </div>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-8 bg-slate-950/50 backdrop-blur">
        <div className="container mx-auto px-4 text-center text-sm text-slate-300">
          <p>© 2025 جميع الحقوق محفوظة</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link
              href="/privacy"
              className="hover:text-emerald-300 transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <span>•</span>
            <Link
              href="/security"
              className="hover:text-emerald-300 transition-colors"
            >
              قواعد الأمان
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
