import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewArrivals from "./pages/NewArrivals";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import SportsOutdoor from "./pages/SportsOutdoor";
import Electronics from "./pages/Electronics";
import HomeLiving from "./pages/HomeLiving";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import CustomerService from "./pages/CustomerService";
import TrackOrder from "./pages/TrackOrder";
import LearnMore from "./pages/LearnMore";
import Settings from "./pages/Settings";
import Sale from "./pages/Sale";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/women" element={<Women />} />
              <Route path="/men" element={<Men />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/sports-outdoor" element={<SportsOutdoor />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/home-living" element={<HomeLiving />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/about-us" element={<AboutUs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
