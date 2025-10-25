import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileInput } from '@/components/ui/file-input';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main
        className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'
        data-aos='fade-up'
      >
        <div className='max-w-4xl mx-auto'>
          <div
            className='text-center mb-8 sm:mb-12'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4'>
              Contact Us
            </h1>
            <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
              We'd love to hear from you. Send us a message below.
            </p>
          </div>

          <Card className='border-border relative shadow-lg'>
            <CardContent className='p-4 sm:p-6 lg:p-8'>
              <form
                action='https://formsubmit.co/treatsbycakeparadise@gmail.com'
                method='POST'
                encType='multipart/form-data'
                className='space-y-6 relative'
              >
                {/* Personal Information Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                  <div className='space-y-2'>
                    <Label className='text-sm font-medium' htmlFor='name'>
                      Name *
                    </Label>
                    <Input
                      id='name'
                      name='name'
                      placeholder='Your name'
                      required
                      minLength={2}
                      className='h-11'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label className='text-sm font-medium' htmlFor='email'>
                      Email *
                    </Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='you@example.com'
                      required
                      className='h-11'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label className='text-sm font-medium' htmlFor='phone'>
                    Phone Number *
                  </Label>
                  <Input
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='+91 98765 43210'
                    required
                    className='h-11'
                  />
                </div>

                <div className='space-y-2'>
                  <Label className='text-sm font-medium' htmlFor='occasion'>
                    Occasion *
                  </Label>
                  <Select name='occasion' required>
                    <SelectTrigger className='w-full h-11'>
                      <SelectValue placeholder='Select an occasion' />
                    </SelectTrigger>
                    <SelectContent position='popper' sideOffset={4}>
                      <SelectItem value='birthday'>Birthday</SelectItem>
                      <SelectItem value='anniversary'>Anniversary</SelectItem>
                      <SelectItem value='wedding'>Wedding</SelectItem>
                      <SelectItem value='newborn'>
                        New Born Baby Welcome Cake
                      </SelectItem>
                      <SelectItem value='graduation'>Graduation</SelectItem>
                      <SelectItem value='promotion'>
                        Promotion/Career Achievement
                      </SelectItem>
                      <SelectItem value='housewarming'>Housewarming</SelectItem>
                      <SelectItem value='retirement'>Retirement</SelectItem>
                      <SelectItem value='valentine'>Valentine's Day</SelectItem>
                      <SelectItem value='mothers-day'>Mother's Day</SelectItem>
                      <SelectItem value='fathers-day'>Father's Day</SelectItem>
                      <SelectItem value='christmas'>Christmas</SelectItem>
                      <SelectItem value='diwali'>Diwali</SelectItem>
                      <SelectItem value='eid'>Eid</SelectItem>
                      <SelectItem value='corporate'>Corporate Event</SelectItem>
                      <SelectItem value='baby-shower'>Baby Shower</SelectItem>
                      <SelectItem value='bridal-shower'>
                        Bridal Shower
                      </SelectItem>
                      <SelectItem value='farewell'>Farewell</SelectItem>
                      <SelectItem value='get-well'>Get Well Soon</SelectItem>
                      <SelectItem value='thank-you'>Thank You</SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <Label className='text-sm font-medium' htmlFor='message'>
                    Message *
                  </Label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Tell us about your requirements, preferred flavors, design ideas, or any special instructions...'
                    className='min-h-[120px] sm:min-h-[140px] resize-none'
                    required
                    minLength={10}
                  />
                </div>

                {/* Improved Image Upload Section */}
                <div className='space-y-3'>
                  <Label className='text-sm font-medium' htmlFor='attachment'>
                    Attach Reference Image (Optional)
                  </Label>
                  <FileInput
                    id='attachment'
                    name='attachment'
                    accept='image/png, image/jpeg, image/jpg, image/webp'
                    className='h-11'
                  />
                  <div className='flex items-start space-x-2 text-xs text-muted-foreground'>
                    <svg
                      className='w-4 h-4 mt-0.5 flex-shrink-0'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    <p>
                      Upload an image to show us your inspiration or reference.
                      Supported formats: PNG, JPG, WebP (max 5MB)
                    </p>
                  </div>
                </div>

                <input
                  type='hidden'
                  name='_next'
                  value={`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/thanks`}
                />
                <input
                  type='hidden'
                  name='_subject'
                  value='New contact form submission'
                />
                <input
                  type='hidden'
                  name='_autoresponse'
                  value="Thank you for your message. We'll get back to you soon!"
                />

                <div className='pt-4'>
                  <Button
                    type='submit'
                    className='w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-medium transition-colors'
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
