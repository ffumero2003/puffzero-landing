import "../src/index.css";
import InfoCard from "./components/InfoCard";
import StatCard from "./components/StatCard";
import TitleSub from "./components/TitleSub";
import RenderImages from "./components/RenderImages";
import RenderEmail from "./components/RenderEmail";

import onboardingOne from "./assets/Onboarding/onboarding1.png";
import onboardingTwo from "./assets/Onboarding/onboarding2.png";
import onboardingThree from "./assets/Onboarding/onboarding3.png";
import onboardingFour from "./assets/Onboarding/onboarding4.png";
import onboardingFive from "./assets/Onboarding/onboarding5.png";
import onboardingSix from "./assets/Onboarding/onboarding6.png";
import onboardingSeven from "./assets/Onboarding/onboarding7.png";
import onboardingEight from "./assets/Onboarding/onboarding8.png";
import onboardingNine from "./assets/Onboarding/onboarding9.png";
import onboardingTen from "./assets/Onboarding/onboarding10.png";
import onboardingEleven from "./assets/Onboarding/onboarding11.png";
import onboardingTwelve from "./assets/Onboarding/onboarding12.png";

import review from "./assets/Onboarding/post-onbaording/review.png";
import notifications from "./assets/Onboarding/post-onbaording/notifications.png";
import charging from "./assets/Onboarding/post-onbaording/charging.png";
import personalization from "./assets/Onboarding/post-onbaording/personalized-plan.png";
import benefits from "./assets/Onboarding/post-onbaording/benefits.png";
import paywallOnboarding from "./assets/Onboarding/post-onbaording/paywall.png"

import login from "./assets/auth/login.png";
import signup from "./assets/auth/register.png";
import forgotPassword from "./assets/auth/forgot-password.png";
import resetPassword from "./assets/auth/reset-password.png";

import home from "./assets/app/home-screen.png";
import progress from "./assets/app/progress-screen.png";

import privacyPolicy from "./assets/privacy-policy.png";
import termsAndConditions from "./assets/terms.png";
import verificationEmail from "./assets/verify-email.png";
import resetEmail from "./assets/reset-email.png";


function App() {
  /**
   * ✅ SCREENSHOTS (Unlimited)
   *
   * Option A (recommended): put images in /public/puffzero/
   * - Example: public/puffzero/01-login.png
   * - Use: src: "/puffzero/01-login.png"
   *
   * Option B: import from src/assets like you did before (works too)
   */

  const onboarding = [
    { src: onboardingOne, alt: "Onboarding — goals" },
    { src: onboardingTwo, alt: "Onboarding — motivations" },
    { src: onboardingThree, alt: "Onboarding — currency selection" },
    { src: onboardingFour, alt: "Onboarding — currency selection" },
    { src: onboardingFive, alt: "Onboarding — currency selection" },
    { src: onboardingSix, alt: "Onboarding — currency selection" },
    { src: onboardingSeven, alt: "Onboarding — currency selection" },
    { src: onboardingEight, alt: "Onboarding — currency selection" },
    { src: onboardingNine, alt: "Onboarding — currency selection" },
    { src: onboardingTen, alt: "Onboarding — currency selection" },
    { src: onboardingEleven, alt: "Onboarding — currency selection" },
    { src: onboardingTwelve, alt: "Onboarding — currency selection" },
  ];

  const postOnboarding = [
    { src: review, alt: "Review" },
    { src: notifications, alt: "Notifications" },
    { src: charging, alt: "Charging" },
    { src: personalization, alt: "Personalized Plan" },
    { src: benefits, alt: "Benefits" },
    { src: paywallOnboarding, alt: "Paywall" },
  ];

  const auth = [
    { src: login, alt: "Login" },
    { src: signup, alt: "Signup" },
    { src: forgotPassword, alt: "Forgot Password" },
    { src: resetPassword, alt: "Reset Password" },
 
  ];

  const paywall = [
    { src: paywallOnboarding, alt: "Paywall" },
  ];

  const app = [
    { src: home, alt: "Home" },
    { src: progress, alt: "Progress" },
  ];

  const other = [
    { src: privacyPolicy, alt: "Privacy Policy" },
    { src: termsAndConditions, alt: "Terms and Conditions" },
  ];
  const email = [
    { src: verificationEmail, alt: "Verification Email" },
    { src: resetEmail, alt: "Reset Email" },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-[92%] max-w-6xl rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />

      {/* Nav */}
      <header className="relative z-10 border-b border-white/5">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-sm font-semibold tracking-wide">PuffZero</span>
            <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300">
              coming soon
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#overview">
              Overview
            </a>
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#screens">
              Screens
            </a>
            <a className="hover:text-white" href="#tech">
              Tech
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="overview" className="relative z-10">
        <div className="mx-auto grid grid-cols-1 gap-10 px-6 py-14 sm:px-8 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Quit with structure • Track patterns • Stay motivated
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              A quitting plan that adapts to you.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-300 md:text-lg">
              PuffZero is a full-featured vape cessation app built with React Native + Supabase.
              It combines tracking, personalized plans, analytics, and motivational support — with
              production-style authentication and a scalable architecture.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <StatCard big="11" small="onboarding steps" />
              <StatCard big="14" small="LATAM currencies" />
              <StatCard big="MVVM" small="clean architecture" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Supabase Auth",
                "Google OAuth",
                "Email verification",
                "Edge Functions",
                "Push notifications",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right side: mock system card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-200">Core systems</p>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300">
                Supabase-backed
              </span>
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-zinc-950/40 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Authentication lifecycle</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    Email/password, Google OAuth, reset password, verification grace period,
                    protected routes, session persistence.
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300">
                  done
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Onboarding engine</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    11-step flow with progress, animations, multi-currency, plan generation.
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300">
                  done
                </span>
              </div>

              <div className="flex items-center justify-between  gap-2">
                <div>
                  <div className="text-sm font-semibold">Paywall + pricing</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    Currency-aware pricing display, weekly/yearly options, RevenueCat integration pending.
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300">
                  in progress
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Notifications</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    Expo push, reminders, daily quote, verification nudges, Android channels.
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300">
                  in progress
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Built to feel like a production app: clean separation, reusable components,
              and scalable flows.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 border-t border-white/5">
        <div className="mx-auto px-6 py-14 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Key features</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">
            PuffZero focuses on the full quitting journey: secure access, guided onboarding, daily tracking,
            analytics, and motivation — with a backend that supports real-world product needs.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <InfoCard
              title="Auth done right"
              body="Email/password + Google OAuth, protected routes, session persistence, reset password via Edge Functions, and a verification grace period."
            />
            <InfoCard
              title="Personalized onboarding"
              body="11-step flow with progress tracking, animations, motivations, concerns, currency selection, and plan generation."
            />
            <InfoCard
              title="Tracking + insights"
              body="Daily progress, time-since-last tracker, money saved, streaks, and charts for 7/30/all time ranges with real-time sync."
            />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screens" className="relative z-10 border-t border-white/5">
        <div className="mx-auto px-6 py-14 sm:px-8">
          
          <TitleSub title="Onboarding" subtitle="11-step flow with progress tracking, animations, motivations, concerns, currency selection, and plan generation." />
          <RenderImages images={onboarding} />

          <TitleSub title="Post Onboarding" subtitle="6-step flow with reviews, notifications, plans, paywall and more." />
          <RenderImages images={postOnboarding} />

          <TitleSub title="Authentication" subtitle="Email/password + Google OAuth, protected routes, session persistence, reset password via Edge Functions, and a verification grace period." />
          <RenderImages images={auth} />

          <TitleSub title="Paywall" subtitle="Currency-aware pricing display, weekly/yearly options, RevenueCat integration pending." />
          <RenderImages images={paywall} />

          <TitleSub title="Application Screens" subtitle="Home and Progress screens. Zuffy and Settings coming soon." />
          <RenderImages images={app} />

          <TitleSub title="Other" subtitle="Privacy Policy and Terms and Conditions screens." />
          <RenderImages images={other} />

          <TitleSub title="Email" subtitle="Verification and Reset Email screens." />
          <RenderEmail images={email} />
        </div>
      </section>

      {/* Tech */}
      <section id="tech" className="relative z-10 border-t border-white/5">
        <div className="mx-auto px-6 py-14 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Tech</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">
            Built with a clean, scalable architecture — mobile-first UI with a backend designed for real product flows.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <InfoCard
              title="React Native + Expo + Expo Router"
              body="Cross-platform app with file-based routing, protected route groups, and consistent navigation patterns."
            />
            <InfoCard
              title="Supabase (Auth + DB + Edge Functions)"
              body="Auth, database, RLS policies, and Edge Functions (Deno/TypeScript) for email flows and server logic."
            />
            <InfoCard
              title="MVVM + Providers"
              body="ViewModels per screen, providers for global state (Auth/Onboarding), and a modular components system."
            />
            <InfoCard
              title="Reanimated + Notifications"
              body="Smooth UI transitions, haptics-ready interactions, and Expo push notifications with scheduled reminders."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
