import { UnifiedForm } from "./components/forms/UnifiedForm";
import { unifiedFormVariants } from "./components/forms/UnifiedForm.funcs.js";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-base text-base px-4 sm:px-6 md:px-8 py-8">
      <Header />

      <main className="max-w-xl mx-auto flex flex-col items-center gap-10 mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center">
          Welcome to the App
        </h1>
        <section className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-6 w-full">
            <UnifiedForm
              variant={unifiedFormVariants.login}
              onSubmit={(data) => console.log("Login:", data)}
            />
            <UnifiedForm
              variant={unifiedFormVariants.signup}
              onSubmit={(data) => console.log("Signup:", data)}
            />
            <UnifiedForm
              variant={unifiedFormVariants.reset}
              onSubmit={(data) => console.log("Reset:", data)}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
