import { Shield, Settings, Bell, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">FraudWatch</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className={`${isActive("/") ? "text-blue-400 bg-blue-900/30" : "text-slate-300 hover:text-white hover:bg-slate-800"}`}
              onClick={() => navigate("/")}
            >
              Dashboard
            </Button>
            <Button 
              variant="ghost" 
              className={`${isActive("/users") ? "text-blue-400 bg-blue-900/30" : "text-slate-300 hover:text-white hover:bg-slate-800"}`}
              onClick={() => navigate("/users")}
            >
              Users
            </Button>
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Reports
            </Button>
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 relative">
              Alerts
              <Badge className="ml-2 bg-red-500 text-white px-1.5 py-0.5 text-xs">3</Badge>
            </Button>
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Analytics
            </Button>
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Teams
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800 relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </Button>
          
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-800 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AD</span>
            </div>
            <span className="text-white text-sm font-medium">Nagdi</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};
