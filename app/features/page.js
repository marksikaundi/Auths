/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rJN6lfT2KDa
 */
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-xl font-semibold">Lupleg</span>
          <span className="sr-only">Lupleg</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About Us
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
          style={{
            backgroundImage: '"url("/placeholder.svg?height=600&width=800")"',
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Our Features
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the capabilities that make Lupleg a unique learning platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Interactive Content</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Engage with dynamic content that adjusts to your learning style.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Personalized Learning</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Experience a tailored learning journey that adapts to your progress.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Track your progress and identify areas for improvement with our analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Lupleg. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

