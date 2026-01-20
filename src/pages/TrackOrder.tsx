import { Package, MapPin, CheckCircle, Truck, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showTracking, setShowTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber && email) {
      setShowTracking(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Track Your Order
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your order details below to see real-time updates on your shipment
            </p>
          </div>

          {/* Tracking Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Order Tracking</CardTitle>
              <CardDescription>
                Please enter your order number and email address to track your package
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Order Number
                  </label>
                  <Input
                    placeholder="e.g., SH123456789"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Found in your order confirmation email
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Track Order
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Results */}
      {showTracking && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Order Summary */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Order #{orderNumber}</CardTitle>
                    <CardDescription>Placed on March 28, 2025</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Estimated Delivery</div>
                    <div className="text-lg font-semibold text-foreground">April 2, 2025</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Out for Delivery</p>
                      <p className="text-sm text-muted-foreground">Your package will arrive today</p>
                    </div>
                  </div>
                  <Truck className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Timeline</CardTitle>
                <CardDescription>Track the progress of your shipment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Step 1 - Delivered */}
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center border-2 border-border">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <div className="w-0.5 h-full bg-border mt-2"></div>
                    </div>
                    <div className="pb-8">
                      <p className="font-semibold text-foreground">Out for Delivery</p>
                      <p className="text-sm text-muted-foreground">Your package is on the delivery vehicle</p>
                      <p className="text-xs text-muted-foreground mt-1">Today at 8:45 AM</p>
                      <p className="text-xs text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>

                  {/* Step 2 - In Transit */}
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="w-0.5 h-full bg-border mt-2"></div>
                    </div>
                    <div className="pb-8">
                      <p className="font-semibold text-foreground">Arrived at Local Facility</p>
                      <p className="text-sm text-muted-foreground">Package has arrived at the local distribution center</p>
                      <p className="text-xs text-muted-foreground mt-1">Today at 6:30 AM</p>
                      <p className="text-xs text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>

                  {/* Step 3 - In Transit */}
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <div className="w-0.5 h-full bg-border mt-2"></div>
                    </div>
                    <div className="pb-8">
                      <p className="font-semibold text-foreground">In Transit</p>
                      <p className="text-sm text-muted-foreground">Package is on the way to your city</p>
                      <p className="text-xs text-muted-foreground mt-1">March 30, 2025 at 2:15 PM</p>
                      <p className="text-xs text-muted-foreground">Los Angeles, CA</p>
                    </div>
                  </div>

                  {/* Step 4 - Shipped */}
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="w-0.5 h-full bg-border mt-2"></div>
                    </div>
                    <div className="pb-8">
                      <p className="font-semibold text-foreground">Shipped</p>
                      <p className="text-sm text-muted-foreground">Package has been shipped from our warehouse</p>
                      <p className="text-xs text-muted-foreground mt-1">March 29, 2025 at 10:00 AM</p>
                      <p className="text-xs text-muted-foreground">Phoenix, AZ</p>
                    </div>
                  </div>

                  {/* Step 5 - Order Placed */}
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Order Placed</p>
                      <p className="text-sm text-muted-foreground">We've received your order and began processing</p>
                      <p className="text-xs text-muted-foreground mt-1">March 28, 2025 at 3:45 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Items in this Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80"
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Premium Leather Watch</p>
                      <p className="text-sm text-muted-foreground">Color: Brown | Quantity: 1</p>
                      <p className="text-sm font-semibold text-foreground mt-1">$199.00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=100&q=80"
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Designer Sunglasses</p>
                      <p className="text-sm text-muted-foreground">Color: Black | Quantity: 1</p>
                      <p className="text-sm font-semibold text-foreground mt-1">$149.00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">Need Help?</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      If you have any questions about your order or delivery, our customer service team is here to help.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="/customer-service">Contact Support</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Help Section for non-tracked */}
      {!showTracking && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">
              Common Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">When will my order arrive?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Standard shipping takes 5-7 business days. Express options available at checkout.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Package className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Where's my tracking number?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Check your order confirmation email. It may take 24 hours to appear after shipment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Can I change my address?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Contact us within 1 hour of placing your order to modify the shipping address.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TrackOrder;
