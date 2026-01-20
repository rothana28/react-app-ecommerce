import { LogOut, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout logic would go here
    console.log("User logged out");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <LogOut className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Logout Confirmation</CardTitle>
          <CardDescription>
            Are you sure you want to logout? You'll need to sign in again to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleLogout}
            className="w-full"
            size="lg"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Yes, Logout
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate("/profile")}
            className="w-full"
            size="lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logout;
