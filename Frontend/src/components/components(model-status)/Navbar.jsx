import { Shield, Settings, Bell, User, Activity, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-500/20 border border-blue-400/20 shadow-lg shadow-blue-400/10">
                <Shield className="w-7 h-7 text-blue-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                  FraudWatch
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              className="group relative h-10 px-4 rounded-xl transition-all duration-200 hover:bg-slate-800/80 flex items-center gap-2"
              variant="ghost" 
            >
              <Bell className="w-5 h-5 text-white" />
              <span className="text-white">Notifications</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border-2 border-slate-900" />
            </Button>

            <Button 
              className="group h-10 px-4 rounded-xl transition-all duration-200 hover:bg-slate-800/80 flex items-center gap-2"
              variant="ghost" 
            >
              <Settings className="w-5 h-5 text-white" />
              <span className="text-white">Settings</span>
            </Button>

            <Button 
              className="group h-10 px-4 rounded-xl transition-all duration-200 hover:bg-slate-800/80 flex items-center gap-2"
              variant="ghost" 
            >
              <User className="w-5 h-5 text-white" />
              <span className="text-white">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
