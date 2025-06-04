import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Save, Key, Trash2, User } from "lucide-react";

export const UserDetailsCard = ({ userDetails }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
            <User className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <CardTitle className="text-white text-lg">{userDetails.firstName} {userDetails.lastName}</CardTitle>
            <p className="text-sm text-slate-400">{userDetails.jobTitle}</p>
          </div>
        </div>
        <Button 
          size="sm" 
          className="bg-blue-600 hover:bg-blue-700 gap-2"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <span className="text-slate-400">First Name</span>
            <div className="text-white font-medium">{userDetails.firstName}</div>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400">Last Name</span>
            <div className="text-white font-medium">{userDetails.lastName}</div>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400">Date of Birth</span>
            <div className="text-white font-medium">{userDetails.dateOfBirth}</div>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400">Gender</span>
            <div className="text-white font-medium">{userDetails.gender}</div>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400">Email</span>
            <div className="text-white font-medium">{userDetails.email}</div>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400">Phone</span>
            <div className="text-white font-medium">{userDetails.phone}</div>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400">Job Title</span>
            <div className="text-white font-medium">{userDetails.jobTitle}</div>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400">City</span>
            <div className="text-white font-medium">{userDetails.city}</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700">
          <Button 
            size="sm" 
            variant="outline" 
            className="border-slate-600 text-slate-300 hover:bg-slate-700/50 gap-2"
          >
            <Key className="w-4 h-4" />
            Reset Password
          </Button>
          <Button 
            size="sm" 
            variant="destructive"
            className="gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete User
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 