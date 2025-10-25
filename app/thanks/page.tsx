import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home } from "lucide-react"

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" data-aos="fade-up">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8 text-center">
              <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                  Thank You!
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  We appreciate your interest in Cake Paradise and look forward to serving you.
                </p>
              </div>

              <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                  >
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </Button>
                </Link>

                <div className="pt-4">
                  <Link href="/products">
                    <Button variant="outline" size="lg" className="text-lg px-8">
                      Browse Our Products
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
