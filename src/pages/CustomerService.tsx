import { Mail, Phone, MessageSquare, Clock, HelpCircle, ShoppingBag, Package, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CustomerService = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Can We Help You?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're here to assist you with any questions or concerns. Browse our FAQs or get in touch with our support team.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for help..."
                className="pl-12 py-6 text-lg"
              />
              <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Mon-Fri, 9am-6pm EST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-foreground mb-2">1-800-STYLE-HUB</p>
                <p className="text-sm text-muted-foreground">Average wait time: 2 minutes</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Available 24/7</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Start Chat</Button>
                <p className="text-sm text-muted-foreground mt-2">Instant responses from our team</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">support@stylehub.com</p>
                <p className="text-sm text-muted-foreground">For detailed inquiries</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Shipping & Delivery */}
            <div>
              <div className="flex items-center mb-4">
                <Package className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Shipping & Delivery</h3>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                  <AccordionContent>
                    Standard shipping takes 5-7 business days. Express shipping options are available at checkout for 2-3 day delivery.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer free shipping?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer free standard shipping on all orders over $50. No code needed - the discount applies automatically at checkout.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I track my order?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Orders & Returns */}
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Orders & Returns</h3>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4">
                  <AccordionTrigger>What's your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day return policy on all items. Products must be unworn, unwashed, and in original condition with tags attached.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I start a return?</AccordionTrigger>
                  <AccordionContent>
                    Log into your account, go to Order History, and click "Return Items" next to your order. Follow the prompts to print your prepaid return label.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I exchange an item?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Select "Exchange" when initiating your return. Choose your new size or color, and we'll ship it once we receive your return.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Payment & Security */}
            <div>
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Payment & Security</h3>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-7">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Do you offer payment plans?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We partner with Affirm and Klarna to offer flexible payment plans on orders over $50. Select at checkout to see your options.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Account & Orders */}
            <div>
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Account & Orders</h3>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-10">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    Click "Sign Up" in the top right corner. Enter your email and create a password. You can also checkout as a guest without creating an account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger>Can I modify my order after placing it?</AccordionTrigger>
                  <AccordionContent>
                    Orders can be modified within 1 hour of placement. After that, our system begins processing. Contact us immediately if you need changes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    Click "Login" then "Forgot Password." Enter your email address and we'll send you a link to create a new password.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              Still Need Help?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Send us a message and we'll get back to you as soon as possible.
            </p>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Order Number (Optional)
                    </label>
                    <Input placeholder="#12345" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us how we can help..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerService;
