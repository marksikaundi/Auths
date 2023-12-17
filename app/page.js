/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yUicp6k83BB
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

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
            Features
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
                  Transform Your Learning Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Lupleg provides interactive and engaging educational resources that adapt to individual learning
                  needs.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar alt="User Image" className="w-10 h-10" src="/placeholder.svg?height=40&width=40" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-500">Student</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Lupleg has transformed my learning experience. The personalized approach really works for me.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar alt="User Image" className="w-10 h-10" src="/placeholder.svg?height=40&width=40" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Jane Smith</h3>
                      <p className="text-sm text-gray-500">Teacher</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    As a teacher, I appreciate the data-driven insights. It helps me understand each students needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Avatar alt="User Image" className="w-10 h-10" src="/placeholder.svg?height=40&width=40" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Alex Brown</h3>
                      <p className="text-sm text-gray-500">Parent</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    My child loves the interactive content. Learning has become a fun activity for them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">Get Started</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
              Sign up to get notified when we launch.
            </p>
            <div className="mx-auto w-full max-w-sm space-y-2 mt-8">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {`
                                    By signing up, you agree to our} `}
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
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

