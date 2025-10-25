import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" data-aos="fade-up">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">We'd love to hear from you. Send us a message below.</p>
          </div>

          <Card className="border-border relative">
            <CardContent className="p-6">
              <form
                action="https://formsubmit.co/treatsbycakeparadise@gmail.com"
                method="POST"
                encType="multipart/form-data"
                className="space-y-6 relative"
              >
                <div className="space-y-2">
                  <Label className="text-sm" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    minLength={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm" htmlFor="phone">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm" htmlFor="occasion">
                    Occasion
                  </Label>
                  <Select name="occasion" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an occasion" />
                    </SelectTrigger>
                    <SelectContent position="popper" sideOffset={4}>
                      <SelectItem value="birthday">Birthday</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="newborn">New Born Baby Welcome Cake</SelectItem>
                      <SelectItem value="graduation">Graduation</SelectItem>
                      <SelectItem value="promotion">Promotion/Career Achievement</SelectItem>
                      <SelectItem value="housewarming">Housewarming</SelectItem>
                      <SelectItem value="retirement">Retirement</SelectItem>
                      <SelectItem value="valentine">Valentine's Day</SelectItem>
                      <SelectItem value="mothers-day">Mother's Day</SelectItem>
                      <SelectItem value="fathers-day">Father's Day</SelectItem>
                      <SelectItem value="christmas">Christmas</SelectItem>
                      <SelectItem value="diwali">Diwali</SelectItem>
                      <SelectItem value="eid">Eid</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="baby-shower">Baby Shower</SelectItem>
                      <SelectItem value="bridal-shower">Bridal Shower</SelectItem>
                      <SelectItem value="farewell">Farewell</SelectItem>
                      <SelectItem value="get-well">Get Well Soon</SelectItem>
                      <SelectItem value="thank-you">Thank You</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    className="min-h-[140px]"
                    required
                    minLength={10}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm" htmlFor="attachment">
                    Attach Image (Optional)
                  </Label>
                  <Input
                    id="attachment"
                    name="attachment"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  <p className="text-xs text-muted-foreground">
                    Upload an image to show us your inspiration or reference (max 5MB, PNG, JPG, GIF, WebP)
                  </p>
                </div>

                <input type="hidden" name="_next" value={`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/thanks`} />
                <input type="hidden" name="_subject" value="New contact form submission" />
                <input type="hidden" name="_autoresponse" value="Thank you for your message. We'll get back to you soon!" />

                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


