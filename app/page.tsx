"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const { addItem } = useCart()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />
        <Image src="/bakery-hero-background.jpg" alt="Artisan bakery products" fill className="object-cover" priority />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
            Handcrafted with love, baked to perfection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover our selection of artisan cakes, biscuits, muffins, and chocolate treats made fresh daily with
            premium ingredients.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular items, loved by customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addItem} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Baked fresh daily with premium ingredients
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At Artisan Bakery, we believe in the art of traditional baking. Every product is handcrafted with care
                using only the finest ingredients sourced from trusted suppliers.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From our rich chocolate cakes to our delicate biscuits, each item tells a story of passion, quality, and
                dedication to the craft of baking.
              </p>
              <Link href="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/bakery-interior-artisan.jpg" alt="Our bakery" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Artisan Bakery</h3>
              <p className="text-sm text-muted-foreground">
                Handcrafted baked goods made with love and premium ingredients.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">Email: hello@artisanbakery.com</p>
              <p className="text-sm text-muted-foreground">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Artisan Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
