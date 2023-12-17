/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZcTTPqwR2Ha
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
                  About Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Learn more about Lupleg, our mission, vision, and values.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">Our Story</h2>
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our mission is to democratize education by making it accessible, engaging, and personalized for
                    everyone.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our vision is to build a world where everyone, regardless of their background or circumstances, can
                    have access to a quality education.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Our Values</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We believe in continuous learning, integrity, collaboration, and putting our learners at the heart
                    of everything we do.
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

